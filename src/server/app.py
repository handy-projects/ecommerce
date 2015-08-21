import tornado.web          # the Tornado web framework
import tornado.httpserver   # the Tornado web server
import tornado.ioloop       # the Tornado event-loop
import tornado.httpclient

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
app = tornado.web.Application([
        (r"/", MainHandler),
        (r"/asyncCallback", AsyncCallbackMainHandler),
        (r"/async", AsyncHandler),
    ], debug=True, template_path='templates')

if __name__ == '__main__':
    # prepares the web server
    srv = tornado.httpserver.HTTPServer(app, xheaders=True)

    # listens incoming request on port 8000
    srv.bind(8000, '')

    # starts the server using 1 process
    # unless you know what you're doing, always set to 1
    srv.start(1)

    # use 0 for autodetect cpu cores and fork one process per core
    #srv.start(0)

    # runs all the things
    tornado.ioloop.IOLoop.instance().start()
