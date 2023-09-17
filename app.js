// https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org
//https://www.youtube.com/watch?v=qwfE7fSVaZM&t=68s&ab_channel=freeCodeCamp.org


const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome')
    }
    if (req.url === '/about') {
        res.end('history')
    }
    res.end()
})

server.listen(5000)
