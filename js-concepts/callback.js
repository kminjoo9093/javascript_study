// function taskSyncFuntion(callback) {
//   console.log("첫번째 작업");
//   console.log("두번째 작업");
//   callback();
// }

// taskSyncFuntion(() => {
//   console.log("콜백 함수 실행");
// });

function taskAsyncFuntion(callback) {
  console.log("start");
  setTimeout(() => {
    console.log("첫번째 작업");
    console.log("두번째 작업");
    callback();
  }, 2000);
  console.log("end");
}

taskAsyncFuntion(() => {
  console.log("콜백 함수 실행");
});
