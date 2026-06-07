function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  //배경
  background(135, 206, 235);

  //상반신
  fill(70, 130, 180);
  stroke(0);
  strokeWeight(2);
  arc(300, 400, 300, 200, PI, TWO_PI);

  //목
  fill(255, 224, 189);
  stroke(0);
  strokeWeight(2);
  rect(275, 290, 50, 40, 10);

  noFill();

  //귀
  fill(255, 224, 189);
  stroke(0);
  strokeWeight(2);
  ellipse(210, 200, 30, 50);
  ellipse(390, 200, 30, 50);

  //얼굴
  ellipse(300, 200, 180, 220);

  //머리카락
  fill(20, 20, 20);
  noStroke();
  arc(300, 130, 190, 150, PI, TWO_PI);
  rect(205, 130, 25, 60);
  rect(370, 130, 25, 60);
  triangle(240, 150, 220, 130, 260, 130);
  triangle(280, 150, 260, 130, 300, 130);
  triangle(320, 150, 300, 130, 340, 130);
  triangle(360, 150, 340, 130, 380, 130);

  //눈
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(260, 190, 40, 30);
  ellipse(340, 190, 40, 30);
  
  //눈동자
  fill(0);
  ellipse(260, 190, 15, 15);
  ellipse(340, 190, 15, 15);

  //코
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(300, 230, 20, 20, 0, PI);
  
  //입
  fill(255, 100, 100);
  arc(300, 260, 60, 40, 0, PI);

  //안경
  noFill();
  stroke(50, 50, 50);
  strokeWeight(4);
  rect(235, 175, 50, 30, 5);
  rect(315, 175, 50, 30, 5);
  line(285, 190, 315, 190);
  line(235, 190, 210, 190);
  line(365, 190, 390, 190);
}