const express = require('express');
const app=express();

app.set('PORT',3000);

app.set('views',__dirname + '/view');
app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"));
//Devuelve formularios en json
app.use(express.urlencoded({extended:false}));

app.use(require('./router/index'));



module.exports=app;