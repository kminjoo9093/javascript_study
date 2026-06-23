// class 구현 옛날 문법
function character(q, w){
  this.q = q;
  this.w = w;
}

let nunu = new character('consume', 'snowball');
let garen = new character('strike', 'courage');

// class 구현 신문법
// 클래스 첫글자는 대문자
class Hero {
  constructor(q, w){
    this.q = q;
    this.w = w;
  }
}

let nunu2 = new Hero('consume', 'snowball');
console.log(nunu2);


// class는 작업 지시서
class Product { //추상화 (공통되는 부분 따로 빼기)
  name= '';
  price= 0;
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  //속성과 관련된 함수 정의
  //캡슐화 - 유저가 변수에 직접 접근하는걸 막음
  getPrice(){ 
    return this.price + "만원";
  }
  setPrice(price){
    if(price < 0){
      throw new Error("마이너스 값은 안됩니다.");
    }
    this.price = price;
  }
}
class TV extends Product{ //상속
  // 이 속성들이 반드시 있어야 한다
  size= '';
  constructor(name, price, size){ // 이 TV를 처음 만들때 반드시 필요하다, 초기화
    super(name, price); //부모 불러오기
    this.size = size;
  }
}

class AC extends Product{
  type='';
  constructor(name, price, type){
    super(name, price);
    this.type = type;
  }
}

class Laptop extends Product{
  weight=0;
}

let tv1 = new TV("ultraTV", 500, "32inch");
let tv2 = new TV("wideTV", 300, "52inch");
console.log(tv1); //TV { name: 'ultraTV', price: 500, size: '32inch' }
console.log(tv1.name, tv2.name); //ultraTV wideTV
console.log(tv1.getPrice()); //500만원
// tv1.setPrice(-1000); // Error: 마이너스 값은 안됩니다.
tv1.setPrice(350);
console.log(tv1.getPrice()); //350만원