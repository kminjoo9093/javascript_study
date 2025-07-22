// [코드캠프] 입문자를 위한 자바스크립트 알고리즘 section04

//계산기가 이상해
function solution1(num1, num2) {
  return typeof num1 + " "  + typeof num2;
}
console.log(solution1("9", 10)); // string number
console.log(solution1(19, 1)); // number number
console.log(solution1("2", "14")); // string string


//덧셈 계산기
function solution2(num1, num2) {
  return Number(num1) + Number(num2);
}
console.log(solution2("1", 2)); // 3
console.log(solution2(5, 6)); // 11
console.log(solution2("3", "5")); // 8


//경마장 용지
function solution3(input) {
  return Number(input);
}
console.log(solution3(1)); // 1
console.log(solution3("2")); // 2