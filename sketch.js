var canvas, bgIMG;
var gameState = 0;
var playerCount;
var database;
var form, game;

function setup(){
  canvas = createCanvas(400,400);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw(){

}