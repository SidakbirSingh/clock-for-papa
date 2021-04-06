var ho,min,sec
var ha,ma,sa;

var twelve,one,two,three,four,five,six,seven,eight,nine,ten,eleven;




function setup() {
  createCanvas(500,400);
  angleMode(DEGREES)

  twelve=createElement("h2")
  twelve.html("12")
  twelve.position(190,66)
  twelve.style("color","white")

  six=createElement("h2")
  six.html("6")
  six.position(195,280)
  six.style("color","white")

  nine=createElement("h2")
  nine.html("9")
  nine.position(85,165)
  nine.style("color","white")

  one=createElement("h2")
  one.html("1")
  one.position(250,75)
  one.style("color","white")

  two=createElement("h2")
  two.html("2")
  two.position(290,114)
  two.style("color","white")

  three=createElement("h2")
  three.html("3")
  three.position(305,160)
  three.style("color","white")

  four=createElement("h2")
  four.html("4")
  four.position(295,220)
  four.style("color","white")

  five=createElement("h2")
  five.html("5")
  five.position(250,265)
  five.style("color","white")

  seven=createElement("h2")
  seven.html("7")
  seven.position(135,265)
  seven.style("color","white")

  eight=createElement("h2")
  eight.html("8")
  eight.position(93,220)
  eight.style("color","white")

  ten=createElement("h2")
  ten.html("10")
  ten.position(95,107)
  ten.style("color","white")

  eleven=createElement("h2")
  eleven.html("11")
  eleven.position(135,70)
  eleven.style("color","white")

}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  ho=hour()
  min=minute()
  sec=second()
  
  sa=map(sec,0,60,0,360)
  ma=map(min,0,60,0,360)
  ha=map(ho%12,0,12,0,360)

  push()
  rotate(sa)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ha)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,sa)

  stroke(0,255,0)
  arc(0,0,280,280,0,ma)

  stroke(0,0,255)
  arc(0,0,260,260,0,ha)
 
  
}