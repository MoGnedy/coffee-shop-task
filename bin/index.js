const app = require('../../app');
const http = require('http');

const server = http.createServer(app);

server.listen(app.get('port'));

module.exports = app;