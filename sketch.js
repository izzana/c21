const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  
  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  //criar evento de clique
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  //criar evento de clique

  //ground = new Ground(200,390,400,20);//criação do chão
  //right = new Ground(390,200,20,400);
  //left = new Ground(10,200,20,400);
  //criar parede do topo 
 
  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  //ground.show();

  //mostrar objeto ball na tela


  //mostrar paredes na tela


  Engine.update(engine);
}


function hForce() {//função para aplicar força para à direita

}

function vForce() {//função para aplicar força para cima
  
}