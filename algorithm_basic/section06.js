// [코드캠프] 입문자를 위한 자바스크립트 알고리즘 section06

//Q. 오점뭐
function solution1(menuList, today) {
  if(menuList.includes(today)){
    return menuList;
  }
  if(menuList.length > 10){
    return menuList;
  }
  menuList.push(today);
  return menuList;
}
console.log(solution1(["돈까스", "마라샹궈"], "마라탕")); 
// [ "돈까스", "마라샹궈", "마라탕" ]
console.log(solution1(["국밥", "파스타", "카레라이스"], "닭갈비")); 
// [ "국밥", "파스타", "카레라이스", "닭갈비" ]
console.log(solution1(["쌀국수"], "쌀국수")); 
// [ "쌀국수" ]


//Q. 프로젝트 명세서
function solution2(stacks) {
  return stacks.sort().reverse();
}
console.log(solution2(["typescript", "express", "node", "react"]));
// ["typescript", "react", "node", "express"]
console.log(solution2(["docker", "graphql", "javascript"]));
// ["javascript", "graphql", "docker"]


//Q. 좋은 질문? 지적? 아무튼 감사합니다~
function solution3(prev, join) {
	// const first = prev.splice(0, 1)[0];
  // prev.push(first);
  // prev.unshift(join);
  // return prev;

  const first = prev.shift();
  return [join, ...prev, first];
}
console.log(solution3(["sudo", "임금"], "라떼"));
// ["라떼", "임금", "sudo"];
console.log(solution3(["아버", "광어", "안드로이드", "siri"], "피카츄"));
// ["피카츄", "광어", "안드로이드", "siri", "아버"];


//Q. 벌레 퇴치
function solution4(feature) {
	const bugIndex = feature.indexOf("bug");
  if(bugIndex === -1){
    return feature;
  }
  //splice 사용
  feature.splice(bugIndex, 1);
  return feature;

  //slice 사용(bugIndex 전 + bugIndex 후)
  // const arr1 = feature.slice(0, bugIndex);
  // const arr2 = feature.slice(bugIndex + 1);
  // return [...arr1, ...arr2];
}
console.log(solution4(["code", "bug", "code"])); // ["code", "code"]
console.log(solution4(["code", "code"])); // ["code", "code"]
