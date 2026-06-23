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