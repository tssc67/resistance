var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

function main(){
  this.db = require('./db.js');
  var clients = {};
  var rooms = [];
  this.lobby = new (require('./lobby.js'))(this);
  this.game = new (require('./game.js'))(this);
  app.use(cookieParser());
  app.get('/game',this.game.api);
  app.get('/lobby',this.lobby.api);
  app.use(express['static']("./client"));
  app.listen(5678);
}

var theresistance = new main();
