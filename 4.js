let missileY = -300;
let isHit = false;
let hitTime = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  // 전체 진행이 느려졌으므로 녹화 시간을 7초로 연장
  //saveGif('assignment4', 7); //gif 저장 생략
}

function draw() {
  if (isHit) {
    let timeSinceHit = millis() - hitTime;
    // 배경색 변화 시간을 4초(4000ms)로 연장
    let amt = min(timeSinceHit / 4000, 1);
    let bgColor = lerpColor(color(172, 251, 248), color(200, 0, 0), amt);
    background(bgColor);
  } else {
    background(172, 251, 248);
  }

  noStroke();

  fill(242, 217, 160);
  rect(250, 200, 100, 200);
  rect(150, 300, 300, 100);

  if (!isHit) {
    // 프레임당 이동 픽셀을 5에서 2로 줄여 미사일 낙하 속도 감소
    missileY += 2;
    
    if (missileY >= 0) {
      isHit = true;
      hitTime = millis();
    }

    push();
    translate(0, missileY);
    
    fill(255, 0, 0);
    triangle(300, 200, 275, 170, 325, 170);
    
    fill(255, 150, 150);
    rect(275, 80, 50, 90);
    
    fill(255, 0, 0);
    triangle(275, 80, 289, 80, 282, 60);
    triangle(289, 80, 311, 80, 300, 60);
    triangle(311, 80, 325, 80, 318, 60);
    pop();
    
  } else {
    let timeSinceHit = millis() - hitTime;
    // 폭발 원의 팽창 계수를 1.2에서 0.5로 감소
    let expSize = timeSinceHit * 0.5;
    
    fill(150, 0, 0, 150);
    circle(300, 200, expSize);
    
    fill(252, 133, 42, 150);
    circle(300, 200, expSize * 0.7);
  }
}

// 화면을 클릭했을 때 실행되는 함수
function mousePressed() {
  // 변수들을 최초 선언 시의 값으로 강제 초기화하여 애니메이션 재시작
  missileY = -300;
  isHit = false;
  hitTime = 0;
}
