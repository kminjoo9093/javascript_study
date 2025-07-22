// [코드캠프] 입문자를 위한 자바스크립트 알고리즘 section05

//새해 복 많이 받으세요
function solution1(name){
  // if(name === "나사장"){
  //   return "code100";
  // }
  // return "code50";

  return name === "나사장" ? "code100" : "code50";
}
console.log(solution1("나사장")); // code100
console.log(solution1("나임원")); // code50


//원두는 착한 어른이
function solution2(age){
	if(age <= 3){
    return "분유 스틱";
  } else if(age <= 7){
    return "초콜릿과 사탕";
  }
  return "쿠키";
}
console.log(solution2(7)); // “초콜릿과 사탕”
console.log(solution2(2)); // “분유 스틱”
console.log(solution2(19)); // “쿠키”


// 내 휴가는 너무 소중해
function solution3(year){
	if(year === 10){
    return 30;
  } else if(year === 5){
    return 12;
  } else if(year === 3){
    return 5;
  } else {
    return 0;
  }
}
console.log(solution3(3)); // 5
console.log(solution3(4)); // 0
console.log(solution3(5)); // 12
console.log(solution3(7)); // 0
console.log(solution3(10)); // 30