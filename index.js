const express = require('express');
const app = express();

// allow cross domain requests
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

// send user to home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// enable any other routers defined in the routers folder
const fs = require('fs');
const routers = fs.readdirSync('routers');
for (let routerFile of routers) {
    const router = require('./routers/' + routerFile);
    app.use(router);
}

// start server on port 8080
app.listen(process.env.PORT || 8080);
