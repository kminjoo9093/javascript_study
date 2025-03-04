// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저가 추측한 숫자와 랜덤으로 나온 숫자가 일치해야 이기는 게임
// 유저에게 게임의 승패를 알려야 합니다.

const gameForm = document.querySelector("#gameForm");
const endNumInput = gameForm.querySelector("#endNum");
const guessNumInput = gameForm.querySelector("#guessNum");
const result = document.querySelector("#result");

function playGame(e) {
  e.preventDefault();
  //범위지정
  const endNum = parseInt(endNumInput.value);

  //추측숫자입력
  const guessNum = parseInt(guessNumInput.value);
  if (guessNum > endNum) {
    result.innerText = "check the number's range!";
    return;
  }

  //랜덤숫자 출력
  const randomNum = Math.floor(Math.random() * endNum) + 1;

  //결과출력
  if (guessNum === randomNum) {
    result.innerHTML = `
    You chose: <strong>${guessNum}</strong>, the machine chose: <strong>${randomNum}</strong>
    <p class="won">You won!</p>
    `;
  } else {
    result.innerHTML = `
    You chose: <strong>${guessNum}</strong>, the machine chose: <strong>${randomNum}</strong>
    <p class="lost">You lost!</p>
    `;
  }
}

gameForm.addEventListener("submit", playGame);
