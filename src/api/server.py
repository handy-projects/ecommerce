from __future__ import print_function
import tornado.web          # the Tornado web framework
import tornado.httpserver   # the Tornado web server
import tornado.ioloop       # the Tornado event-loop
import tornado.httpclient
from tornado import gen
import os

PORT = 8001;
api_url = 'http://localhost:8000/products';

class AsyncCallbackMainHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
        client = tornado.httpclient.AsyncHTTPClient()
        client.fetch(api_url, callback=self._on_finish)

    def _on_finish(self, response):
        self.write(str(response.body))
        self.finish()

# prepares the application
app = tornado.web.Application([
        (r"/products", AsyncCallbackMainHandler),
    ], debug=True, template_path='templates')

if __name__ == '__main__':
    # prepares the web server
    http_server = tornado.httpserver.HTTPServer(app, xheaders=True)

    # runs all the things
    ioloop = tornado.ioloop.IOLoop.instance()

    http_server.listen(PORT, 'localhost')
    print ('tornado server started on %s port' % PORT)
    ioloop.start()
