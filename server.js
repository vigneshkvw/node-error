var express = require('express');
var app = express();
var port = process.env.PORT || 3010;
var path=require('path');
var methodOverride = require('method-override');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var multer  = require('multer')
var bodyParser = require('body-parser');
var cors=require('cors')



app.use(express.static(__dirname + '/public'));
app.use(cors({  
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3012');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});



app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/src/components/home/login.js'));
  });
app.listen(3012, function(){
    console.log('app is running on port 3012');
});




module.exports =app;