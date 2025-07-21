// [코드캠프] 입문자를 위한 자바스크립트 알고리즘 section03

// 막내야 도넛 좀 사 와라
function solution1(n, donuts) {
  return n / donuts;
}
console.log(solution1(120, 12)); // 10
console.log(solution1(40, 8)); // 5


// 운수 좋은 날
function solution2(n, members) {
  return (n + 6000) - (4100 * members);
}
console.log(solution2(50000, 12)); // 6800
console.log(solution2(35000, 9)); // 4100


// 이런 건 맨날 나만 시키지
function solution3(name, birth) {
	return name + birth;
}
console.log(solution3("marco", 970219)); // marco971204
console.log(solution3("tomas", 991108)); // tomas991108


// 비밀번호 만들기
function solution4(birth, date) {
	return `비밀번호는 ${birth + date}입니다.`;
}
console.log(solution4(900501, 2021)); // 비밀번호는 902522입니다.
console.log(solution4(930219, 2020)); // 비밀번호는 932239입니다.


// 제비뽑기 용지
function solution5(a, b) {
  return (a - 1) + (b - 1) * a;
}
console.log(solution5(100, 100)); // 9999
console.log(solution5(1, 1)); // 0
console.log(solution5(20, 50)); // 999


//분기별 일정
function solution6(month) {
  return Math.ceil(month / 3);	
}
console.log(solution6(4)); // 2
console.log(solution6(12)); // 4