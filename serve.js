const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const http = require('http');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = 3001;

http.createServer({}, app).listen(port, function () {
  console.log(`local: http://localhost:${port}`);
});
