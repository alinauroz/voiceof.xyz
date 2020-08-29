const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

app.use('/', express.static('./server/build'))

const options = {
  key: fs.readFileSync('./privkey.pem'),
  cert: fs.readFileSync('./cert.pem')
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html")
})

https.createServer(options, app).listen(443);