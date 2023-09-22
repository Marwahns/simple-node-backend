const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Request handler goes here

    // Content with plain text format
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end("Ini adalah halaman utama dengan content type plain text. Nanti buat halaman 1")
    }

    // Content with JSON format
    else if(req.url === "/contacts") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        let contacts = JSON.stringify([
            {name: "ace", phone: "081234567890"},
            {name: "sabo", phone: "02134567890"},
            {name: "luffy", phone: "0814567890"},
        ])

        res.end(contacts)
    }

    // Content with HTML Format
    else if (req.url === '/about') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        res.end("<h1>Ini Halaman about, dengan type content HTML </h1>")
    }

    // Content with html 
    else if (req.url === '/products') {
        fs.readFile('public/index.html', (err, data) => {
            if(err) {
                res.writeHead(404)
                res.write("Halaman ini tidak ditemukan")
            } else {
                res.writeHead(200)
                res.write(data)
            }
        })

        res.end("<h1>Ini Halaman about, dengan type content HTML </h1>")
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

