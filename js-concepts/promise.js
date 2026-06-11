const myPromise = new Promise((resolve, reject) => {
  //비동기 작업 처리
  setTimeout(() => {
    const text = prompt("hello를 입력해줘! 그럼 선물을 줄게");

    if (text === "hello") {
      resolve("선물이야~");
    } else {
      reject("error message");
    }
  }, 2000);
});

myPromise
  .then((result) => { //성공시 resolve 값
    console.log("result: ", result);
  })
  .catch((error) => { //실패시 reject 값
    console.log("error: ", error);
  })
  .finally(()=>{
    console.log("끝이야~");
  })