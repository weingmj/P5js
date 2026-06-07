function setup() {
  createCanvas(600, 400);
  background(172, 251, 248);
}

function draw() {
  // 학교
  noStroke();
  
  fill(242, 217, 160);
  rect(250, 200, 100, 200);
  noStroke();
  
  fill(242, 217, 160);
  rect(150, 300, 300, 100);
  noStroke();
  
  fill(255, 255, 255);
  
  // 미사일 머리
  fill(255, 0, 0);
  triangle(300, 200, 275, 170, 325, 170);
  noStroke();
  
  // 미사일 몸통
  fill(255, 150, 150);
  rect(275, 80, 50, 90);
  noStroke();
  
  // 미사일 꼬리 부분 불 x : 275, 289, 311, 325
  fill(255, 0, 0);
  triangle(275, 80, 289, 80, 282, 60);
  noStroke();
  
  fill(255, 0, 0);
  triangle(289, 80, 311, 80, 300, 60);
  noStroke();
  
  fill(255, 0, 0);
  triangle(311, 80, 325, 80, 318, 60);
  noStroke();
  
  // 폭발 표현
  fill(150, 0, 0, 10);
  circle(300, 400, 500);
  noStroke();
  
  fill(252, 133, 42, 10);
  circle(300, 400, 800);
  noStroke();
}