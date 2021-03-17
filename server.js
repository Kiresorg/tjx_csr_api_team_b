const app       = express();
const http      = require('http');
const express   = require('express');

var passport    = require('passport');
var session     = require('express-session');
var bodyParser  = require('body-parser');
var models      = require('./app/models');
var exphbs      = require('express-handlebars');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

require("./app/routers/customers.route")(app);
require("./app/routers/orders.route")(app);

/* 
*  For BodyParser (this extracts the entire body of an 
*  incoming request and exposes it in JSON format)
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Setting up required passport initialization
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); //Persistent login sessions

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