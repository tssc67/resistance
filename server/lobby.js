var clients;
var rooms;
var core;
var xu = require('./xutil.js');
function Client(){
  this.id = xu.generateSessionID();
  this.name = "unnamed";
  this.state = "lobby";
}
//res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });
module.exports = function(_core){
  core = _core;
  clients = core.clients;
  room = core.rooms;
  this.api = function(req,res){
    var user;
    if(!req.cookies.uid){
      user = new Client();
      clients[req.cookies.uid] = user;
      res.cookie('uid',user.id);
    }
    else{
      user = clients[req.cookies.uid];
    }
    function _mapName(obj){
      var keys = Object.keys(obj);
      var returnList = [];
      for(var i=0;i<keys.length;i++){
        returnList.push(obj[keys[i]].name);
      }
      return returnList;
    }
    if(req.headers.action = "list_user"){
      return res.end(_mapName(clients));
    }
    if(req.headers.action = "list_room"){
      return res.end(_mapName(rooms));
    }
  }
}
