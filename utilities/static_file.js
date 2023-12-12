const fs = require('fs')
const path = require('path')

const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    "ison":"application/ison",
    ".png":"image/png",
    ".jpg": "image/jpg",
    ".jpeg": "image/jpeg",
    ".gifi": "image/gif",
    ".Svg": "image/svg+xmI",
    ".wav": "audio/wav",
    ".mp4": "video/mp4"
    };

function staticFile(res, filePath, exp){
    res.setHeader('Contant-type', mimeTypes[exp])
}