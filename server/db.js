var sqli = require('sqlite3');
var opt;

function checkTable(table){
  if(opt.useMem)_mem();
  else _disk();
  function _mem(){
    if(!mem[table])throw new Error("NO_TABLE");
  }
  function _disk(){ 

  }
}

exports.initialize = function(option){
  opt = option;
  if(opt.useMem===false){
  _mem();
  }
  else{
    opt.useMem = true;
    _disk();
  }
  function _mem(){
    mem = {};
    exports.mem = mem;
  }
  function _disk(){

  }
}
exports.write = function(table,key,value){
  checkTable(table);
  if(opt.useMem)_mem();
  else _disk();
  function _mem(){
    mem[table][key]=value;
  }
  function _disk(){

  }
}

exports.read = function(table,key){
  checkTable(table);
  if(opt.useMem)_mem();
  else _disk();
  function _mem(){
    return mem[table][key];
  }
  function _disk(){

  }
}

exports.createTable = function(table){
  if(opt.useMem)_mem;
  try{
    checkTable(table)
  }catch(e){
    throw new Error("TABLE_EXIST");
  }
  function _mem(){
    mem[table] = {};
  }
  function _disk(){

  }
}
