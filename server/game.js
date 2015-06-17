var core;
var clients;
var rooms;
function Game(){
  var opt;
  this.name = "an unnamed room";
  this.state = "waiting";
  this.member = {};
  this.owner = "";
  this.options = {
    //Default option here
  };
  this.start = function(){
    ///
  }
}
module.exports = function(_core){
  core = _core;
  clients = core.clients;
  rooms = core.rooms;
  this.api = function(req,res){

  }
  this.createGame = function(){
  }
}
