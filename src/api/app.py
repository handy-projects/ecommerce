from __future__ import print_function
import tornado.web          # the Tornado web framework
import tornado.httpserver   # the Tornado web server
import tornado.ioloop       # the Tornado event-loop
import tornado.httpclient

# momoke example

from tornado import gen
import os

import momoko

db_database = os.environ.get('MOMOKO_TEST_DB', 'ecommerce')
db_user = os.environ.get('MOMOKO_TEST_USER', 'postgres')
db_password = os.environ.get('MOMOKO_TEST_PASSWORD', '1990')
db_host = os.environ.get('MOMOKO_TEST_HOST', 'localhost')
db_port = os.environ.get('MOMOKO_TEST_PORT', 5432)
enable_hstore = True if os.environ.get('MOMOKO_TEST_HSTORE', '0') == '1' else False
dsn = 'dbname=%s user=%s password=%s host=%s port=%s' % (
    db_database, db_user, db_password, db_host, db_port)

class BaseHandler(tornado.web.RequestHandler):
    @property
    def db(self):
        return self.application.db

class OverviewHandler(BaseHandler):
    def get(self):
        self.write("""
<ul>
    <li><a href="/mogrify">Mogrify</a></li>
    <li><a href="/query">A single query</a></li>
    <li><a href="/hstore">A hstore query</a></li>
    <li><a href="/json">A JSON query</a></li>
    <li><a href="/transaction">A transaction</a></li>
    <li><a href="/multi_query">Multiple queries executed by yielding a list</a></li>
    <li><a href="/connection">Manual connection management</a></li>
</ul>
        """)
        self.finish()




class MogrifyHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        try:
            sql = yield self.db.mogrify("SELECT %s;", (1,))
            self.write("SQL: %s<br>" % sql)
        except Exception as error:
            self.write(str(error))

        self.finish()


class SingleQueryHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        try:
            cursor = yield self.db.execute("SELECT pg_sleep(%s);", (1,))
            self.write("Query results: %s<br>\n" % cursor.fetchall())
        except Exception as error:
            self.write(str(error))

        self.finish()


class HstoreQueryHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        if enable_hstore:
            try:
                cursor = yield self.db.execute("SELECT 'a=>b, c=>d'::hstore;")
                self.write("Query results: %s<br>" % cursor.fetchall())
                cursor = yield self.db.execute("SELECT %s;", ({"e": "f", "g": "h"},))
                self.write("Query results: %s<br>" % cursor.fetchall())
            except Exception as error:
                self.write(str(error))
        else:
            self.write("hstore is not enabled")

        self.finish()


class JsonQueryHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        if self.db.server_version >= 90200:
            try:
                cursor = yield self.db.execute('SELECT \'{"a": "b", "c": "d"}\'::json;')
                self.write("Query results: %s<br>" % cursor.fetchall())
            except Exception as error:
                self.write(str(error))
        else:
            self.write("json is not enabled")

        self.finish()


class MultiQueryHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        cursor1, cursor2, cursor3 = yield [
            self.db.execute("SELECT 1;"),
            self.db.mogrify("SELECT 2;"),
            self.db.execute("SELECT %s;", (3*1,))
        ]

        self.write("Query 1 results: %s<br>" % cursor1.fetchall())
        self.write("Query 2 results: %s<br>" % cursor2)
        self.write("Query 3 results: %s" % cursor3.fetchall())

        self.finish()


class TransactionHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        try:
            cursors = yield self.db.transaction((
                "SELECT 1, 12, 22, 11;",
                "SELECT 55, 22, 78, 13;",
                "SELECT 34, 13, 12, 34;",
                "SELECT 23, 12, 22, 23;",
                "SELECT 42, 23, 22, 11;",
                ("SELECT 49, %s, 23, 11;", ("STR",)),
            ))

            for i, cursor in enumerate(cursors):
                self.write("Query %s results: %s<br>" % (i, cursor.fetchall()))
        except Exception as error:
            self.write(str(error))

        self.finish()


class ConnectionQueryHandler(BaseHandler):
    def __init__(self, *args, **kwargs):
        self.http_connection_closed = False
        super(ConnectionQueryHandler, self).__init__(*args, **kwargs)

    @gen.coroutine
    def get(self):
        try:
            connection = yield self.db.getconn()
            with self.db.manage(connection):
                for i in range(5):
                    if self.http_connection_closed:
                        break
                    cursor = yield connection.execute("SELECT pg_sleep(1);")
                    self.write('Query %d results: %s<br>\n' % (i+1, cursor.fetchall()))
                    self.flush()
        except Exception as error:
            self.write(str(error))

        self.finish()

    def on_connection_close(self):
        self.http_connection_closed = True

# handles incoming request, this is the C part in MVC
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # renders the Tornado template
        self.render('homepage.html', user='John Doe')

    @tornado.web.asynchronous
    def testAsync(self):
        client = tornado.httpclient.AsyncHTTPClient()
        client.fetch('http://groovematic.com/', callback=self._on_finish)

    def _on_finish(self, response):
        self.write(str(response.code))
        self.finish()

class AsyncCallbackMainHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
        client = tornado.httpclient.AsyncHTTPClient()
        client.fetch('http://groovematic.com/', callback=self._on_finish)

    def _on_finish(self, response):
        self.write(str(response.code))
        self.finish()

class AsyncHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    @tornado.gen.engine
    def get(self):
        client = tornado.httpclient.AsyncHTTPClient()
        response = yield tornado.gen.Task(client.fetch, 'http://groovematic.com/')
        self.write(str(response.code))
        self.finish()



# prepares the application
application = tornado.web.Application([
        (r"/", MainHandler),
        (r"/asyncCallback", AsyncCallbackMainHandler),
        (r"/async", AsyncHandler),
        (r'/momoko', OverviewHandler),
        (r'/mogrify', MogrifyHandler),
        (r'/query', SingleQueryHandler),
        (r'/hstore', HstoreQueryHandler),
        (r'/json', JsonQueryHandler),
        (r'/transaction', TransactionHandler),
        (r'/multi_query', MultiQueryHandler),
        (r'/connection', ConnectionQueryHandler),
    ], debug=True, template_path='templates')

if __name__ == '__main__':
    # prepares the web server
    #srv = tornado.httpserver.HTTPServer(app, xheaders=True)

    # listens incoming request on port 8000
    #srv.bind(8000, '')

    # starts the server using 1 process
    # unless you know what you're doing, always set to 1
    #srv.start(1)

    # use 0 for autodetect cpu cores and fork one process per core
    #srv.start(0)

    # runs all the things
    ioloop = tornado.ioloop.IOLoop.instance()

    application.db = momoko.Pool(
            dsn=dsn,
            size=1,
            max_size=3,
            ioloop=ioloop,
            setsession=("SET TIME ZONE UTC",),
            raise_connect_errors=False,
        )

    # this is a one way to run ioloop in sync
    future = application.db.connect()
    ioloop.add_future(future, lambda f: ioloop.stop())
    ioloop.start()

    if enable_hstore:
            future = application.db.register_hstore()
            # This is the other way to run ioloop in sync
            ioloop.run_sync(lambda: future)

    if application.db.server_version >= 90200:
        future = application.db.register_json()
        # This is the other way to run ioloop in sync
        ioloop.run_sync(lambda: future)

    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8000, 'localhost')
    print ('tornado server started on %s port' % 8000)
    ioloop.start()
