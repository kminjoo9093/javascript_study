// 현재 날짜 데이터를 저장해 달력을 만든다
// display에 월, 년도
// 날짜 시작일, 마지막날 맞게 나오도록, 현재 날짜 표시
// 클릭하는 날짜 선택일에 나오도록
// 화살표를 누르면 이전달, 다음달 필요시 전년도, 다음년도로 넘어간다
// 화살표를 누르면 해당 달의 날짜가 새롭게 표시된다

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const displayDate = document.querySelector(".display");
const days = document.querySelector(".days");
const selected = document.querySelector(".selected-date");

const dateToday = new Date();
let year = dateToday.getFullYear();
let month = dateToday.getMonth();
let date = dateToday.getDate();

function renderCalendar() {
  // 1. display에 월, 년도 출력하기
  displayDate.textContent = dateToday.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
  });

  //2. days 영역에 날짜 출력하기
  // 현재 달의 1일이 시작되는 요일구하기
  const firstDay = new Date(year, month, 1);
  const firstDayIdx = firstDay.getDay(); //요일은 일요일 0부터
  // 현재 달의 마지막 날짜구하기
  const lastDay = new Date(year, month + 1, 0);
  const numberOfDays = lastDay.getDate();
  // 1일 시작 전 빈칸 출력
  for (let i = 0; i < firstDayIdx; i++) {
    let div = document.createElement("div");
    div.textContent = "";
    days.appendChild(div);
  }
  // 날짜 출력 (각 날짜에 날짜데이터를 넣어야 함)
  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);
    div.setAttribute("data-date", currentDate.toDateString());
    div.textContent = i;
    days.appendChild(div);

    //3. 현재 날짜 표시
    if (
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month &&
      currentDate.getDate() === date
    ) {
      div.classList.add("current-date");
    }
  }
}

function renderSelectedDate() {
  //클릭한 날짜 선택일에 출력
  const daysEl = document.querySelectorAll(".days div");
  daysEl.forEach((day) => {
    day.addEventListener("click", (e) => {
      let selectedDate = e.target.getAttribute("data-date");
      selected.textContent = `선택일: ${selectedDate}`;
    });
  });
}

renderCalendar();
renderSelectedDate();

prevBtn.addEventListener("click", () => {
  days.textContent = "";
  selected.textContent = "";
  //현재달이 1월일 경우 년도도 -1 (0~11월)
  if (month < 0) {
    year = year - 1;
    month = 11; //월을 다시 12월로
  }
  month = month - 1;
  dateToday.setMonth(month);
  renderCalendar();
  renderSelectedDate();
});
nextBtn.addEventListener("click", () => {
  days.textContent = "";
  selected.textContent = "";
  //현재달이 12월일 경우 년도도 +1 (0~11월)
  if (month > 11) {
    year = year + 1;
    month = 0; //다시 1월로
  }
  month = month + 1;
  dateToday.setMonth(month);
  renderCalendar();
  renderSelectedDate();
});
