const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3600

const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    "ison": "application/ison",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".jpeg": "image/jpeg",
    ".gifi": "image/gif",
    ".svg": "image/svg+xmL",
    ".wav": "audio/wav",
    ".mp4": "video/mp4"
};

function staticFile(res, filePath, exp) {
    res.setHeader('Content-type', mimeTypes[exp])
    fs.readFile("public" + filePath, (error, data) => {
        if (error) {
            statusCode = 404
            res.end()
        }
        res.end(data)
    })
}


http.createServer((req, res) => {
    const url = req.url
    console.log(url)

    switch (url) {

        case "/":
            staticFile(res, "/html/index.html", ".html")
            break;

        case "/contacts":
            staticFile(res, "/html/contacts.html", ".html")
            break;

        case "/skills":
            staticFile(res, "/html/skills.html", ".html")
            break;

        case "/project-page":
            staticFile(res, "/html/project-page.html", ".html")
            break;
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase()

            if (extname in mimeTypes) {
                staticFile(res, url, extname)
            }
            else {
                res.statusCode = 404
                res.end()
            }
    }
}).listen(PORT) 