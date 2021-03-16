const http = require('http');
const express = require('express');


const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//require("./routers/orders.route")(app);

// default URL to API
app.use('/', function(req, res) {
    res.send('tjx_full_stack works :-)');
});

//const db = require("./models");
//db.sequelize.sync();

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);