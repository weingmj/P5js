let glassesAngle = 0;
let hairY = 0;
let hairDirection = -1;
let hairSpeed = 1;

let snotLength = 0;
let snotDirection = 1;
let snotSpeed = 1;
const maxSnotLength = 20;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 배경
  background(135, 206, 235);

  // 상반신
  fill(70, 130, 180);
  stroke(0);
  strokeWeight(2);
  arc(300, 400, 300, 200, PI, TWO_PI);

  // 목
  fill(255, 224, 189);
  stroke(0);
  strokeWeight(2);
  rect(275, 290, 50, 40, 10);

  // 귀
  fill(255, 224, 189);
  stroke(0);
  strokeWeight(2);
  ellipse(210, 200, 30, 50);
  ellipse(390, 200, 30, 50);

  // 얼굴
  ellipse(300, 200, 180, 220);

  // 마우스 이벤트: 마우스 클릭 시 머리카락 움직임 속도 증가
  if (mouseIsPressed) {
    hairSpeed = 6;
  } else {
    hairSpeed = 1;
  }

  // 머리카락
  hairY += hairSpeed * hairDirection;
  if (hairY <= -30 || hairY >= 0) {
    hairDirection *= -1; 
  }
  
  push();
  translate(0, hairY);
  fill(20, 20, 20);
  noStroke();
  arc(300, 130, 190, 150, PI, TWO_PI);
  rect(205, 130, 25, 60);
  rect(370, 130, 25, 60);
  triangle(240, 150, 220, 130, 260, 130);
  triangle(280, 150, 260, 130, 300, 130);
  triangle(320, 150, 300, 130, 340, 130);
  triangle(360, 150, 340, 130, 380, 130);
  pop();

  // 눈
  let eyeScale = map(sin(frameCount * 0.1), -1, 1, 0.8, 1.2);

  push();
  translate(260, 190);
  scale(eyeScale);
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(0, 0, 40, 30);
  fill(0);
  ellipse(0, 0, 15, 15);
  pop();

  push();
  translate(340, 190);
  scale(eyeScale);
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(0, 0, 40, 30);
  fill(0);
  ellipse(0, 0, 15, 15);
  pop();

  // 코
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(300, 230, 20, 20, 0, PI); 
  
  // 콧물
  snotLength += snotDirection * snotSpeed;
  if (snotLength >= maxSnotLength || snotLength <= 0) {
    snotDirection *= -1;
  }
  
  if (snotLength > 0) { 
    push();
    fill(180, 230, 160, 180);
    noStroke();
    ellipse(300, 240 + snotLength / 2, 8, snotLength);
    pop();
  }
  
  // 입
  // 마우스 이벤트: 클릭 시 입 모양이 놀란 표정으로 변경
  if (mouseIsPressed) {
    fill(255, 100, 100);
    stroke(0);
    strokeWeight(1);
    ellipse(300, 270, 30, 40);
  } else {
    fill(255, 100, 100);
    stroke(0);
    strokeWeight(1);
    arc(300, 260, 60, 40, 0, PI);
  }

  // 안경
  // 마우스 이벤트: 클릭 시 안경 회전 속도 대폭 증가
  if (mouseIsPressed) {
    glassesAngle += 0.3;
  } else {
    glassesAngle += 0.05;
  }
  
  push();
  translate(300, 190);
  rotate(glassesAngle);
  translate(-300, -190);
  
  noFill();
  stroke(50, 50, 50);
  strokeWeight(4);
  rect(235, 175, 50, 30, 5);
  rect(315, 175, 50, 30, 5);
  line(285, 190, 315, 190);
  line(235, 190, 210, 190);
  line(365, 190, 390, 190);
  pop();
}

function keyPressed() {
  // 's' 또는 'S' 키를 누르면 3초 분량의 GIF 저장
  if (key === 's' || key === 'S') {
    saveGif('my_caricature', 3);
  }
}