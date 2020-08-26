const http = require('http')
const fs = require('fs')
const path = require('path')

function fakeExpress () {
  function listen (port = 8080, cb) {
    return http
      .createServer((req, res) => {
        fs.readFile(path.resolve(__dirname, '..', 'public', 'index.html'), (err, data) => {
          console.log(__dirname)
          res.setHeader('Content-Type', 'text/html')
          if (err) {
            res.writeHead(500)
            return res.end('some server error occured')
          }
          res.writeHead(200)
          return res.end(data)
        })
      })
      .listen({ port }, () => {
        if (cb) {
          if (typeof cb === 'function') {
            return cb()
          }
          throw new Error('listen callback needs to be a function')
        }
      })
  }
  return { listen }
}

module.exports = fakeExpress
