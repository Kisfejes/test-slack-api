const http = require('http');
const express = require('express');

const port = 7700;

const app = express();

app.use('*', (req, res) => {

});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`);
});
