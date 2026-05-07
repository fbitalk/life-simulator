// 本地开发服务器——解决 ES Module 无法从 file:// 加载的问题
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
    let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url.split('?')[0]);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log(`本地开发服务器运行在 http://localhost:${PORT}/`);
    console.log('按 Ctrl+C 停止');
});
