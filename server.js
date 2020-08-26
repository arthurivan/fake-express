const http = require('http')
const fs = require('fs')
const path = require('path')

const { PORT } = require('./config')

const server = http.createServer((req, res) => {
  fs.readFile(path.resolve(__dirname, 'public', 'index.html'), (err, data) => {
    res.setHeader('Content-Type', 'text/html')
    if (err) {
      res.writeHead(500)
      return res.end('some server error occured')
    }
    res.writeHead(200)
    return res.end(data)
  })
})

server.listen(8080, console.log(`Server running on port ${PORT}`))
