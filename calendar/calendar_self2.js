const prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  display = document.querySelector(".display"),
  days = document.querySelector(".days"),
  selected = document.querySelector(".selected-date");

const dateToday = new Date();
let year = dateToday.getFullYear();
let month = dateToday.getMonth();
let date = dateToday.getDate();

function renderCalendar() {
  //display month, year
  const formattedDate = dateToday.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
  });
  display.textContent = formattedDate;

  //days 안 div 날짜
  // 현재 달의 1일이 시작되는 요일알아내고, 시작 전은 빈칸출력
  // 요일 : 일(0)~토(6)  월: 1월(0)~12월(11)
  const firstDay = new Date(year, month, 1);
  const firstDayIdx = firstDay.getDay();
  for (let i = 0; i < firstDayIdx; i++) {
    days.innerHTML += `<div></div>`;
  }
  //첫날~마지막날 표시, 각 날짜에 날짜 데이터 넣기, 현재 날짜 표시
  const lastDay = new Date(year, month + 1, 0);
  const numberOfDays = lastDay.getDate();
  for (let i = 1; i <= numberOfDays; i++) {
    let currentDate = new Date(year, month, i);
    days.innerHTML += `<div data-date="${currentDate.toDateString()}">${i}</div>`;
    if (
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month &&
      currentDate.getDate() === date
    ) {
      days.innerHTML += `<div class='current-date' data-date="${currentDate.toDateString()}">${i}</div>`;
    }
  }
}

function renderSelectedDate() {
  const daysEl = document.querySelectorAll(".days div");
  daysEl.forEach((day) => {
    day.addEventListener("click", (e) => {
      let selectedDate = e.target.dataset.date;
      selected.textContent = selectedDate;
    });
  });
}

prevBtn.addEventListener("click", () => {
  // days, selected 초기화
  days.innerHTML = "";
  selected.innerHTML = "";
  if (month < 0) {
    year -= 1;
    month = 11;
  }
  month -= 1;
  dateToday.setMonth(month);
  renderCalendar();
  renderSelectedDate();
});
nextBtn.addEventListener("click", () => {
  // days, selected 초기화
  days.innerHTML = "";
  selected.innerHTML = "";
  if (month > 11) {
    year += 1;
    month = 0;
  }
  month += 1;
  dateToday.setMonth(month);
  renderCalendar();
  renderSelectedDate();
});

renderCalendar();
renderSelectedDate();
