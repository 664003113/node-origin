'use strict'

const http = require('http');
const jwt = require('jsonwebtoken');
const qs = require('querystring');

const config = require('./config/');

const server = http.createServer();

server.listen('3000', () => {
  console.log('server listening at 3000');
});

process.on('SIGINT', () => {
  console.log('server exiting...');
  server.close(() => {
    console.log('server closed');
  });
});

server.on('request', (req, res) => {
  console.log('req.method', req.method);
  console.log('req.url', req.url);
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    console.log('data--->', data);
    const reqData = qs.parse(data);
    console.log('req.data', reqData);
    const url = req.url;
    res.statusCode = 200;
    if (url === '/verify-token') {
      jwt.verify(reqData.token, config.jwt_secret, (err, result) => {
        if (err) {
          return res.end(JSON.stringify({ code: 0, message: err.message }));
        }
        return res.end(JSON.stringify({ code: 1, result }));
      });
    } else {
      res.statusCode = 404;
      return res.end('fail');
    }
    // res.statusCode = 200;
    // return res.end('success');
  });
});
