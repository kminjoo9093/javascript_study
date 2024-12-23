let display = document.querySelector('.display'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    days = document.querySelector('.days'),
    selectedDate = document.querySelector('.selected-date');

    
let dateToday = new Date();

function displayCalendar() {
  let year = dateToday.getFullYear();
  console.log(year)
  let month = dateToday.getMonth(); // 월 0~11월
  console.log(month)
  let date = dateToday.getDate(); 
  const firstDay = new Date(year, month, 1); //첫째날
  console.log(firstDay)
  const firstDayIdx = firstDay.getDay(); //요일 : 0부터 일요일
  console.log(firstDayIdx)
  const lastDay = new Date(year, month+1, 0); //마지막 날(다음 달에서 하루를 빼기)
  console.log(lastDay)
  const numberOfDays = lastDay.getDate(); //현재 달의 마지막 날짜

  let formattedDate = dateToday.toLocaleString('en-US', {
    month: "long",
    year: "numeric",
    timeZone: 'Asia/Seoul'
  })
  display.innerHTML = formattedDate;

  //첫날 전 빈칸 출력
  for(let i=0; i<firstDayIdx; i++){
    let div = document.createElement('div');
    div.textContent = '';
    days.appendChild(div);
  }
  // 날짜 출력
  for(let i=1; i<=numberOfDays; i++){
    let div = document.createElement('div');
    let currentDate = new Date(year, month, i);
    // 아래 코드 둘 같은 거임 (사용자 속성 지정)
    // div.setAttribute('data-date', currentDate);
    div.dataset.date = currentDate.toDateString();
    div.textContent = i;
    days.appendChild(div);

    // 현재 날짜 표시
    if(
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month &&
      currentDate.getDate() === date
    ) {
      div.classList.add('current-date');
    }
  }
}

function displaySelectedDate(){
  const daysEl = document.querySelectorAll('.days div');
  daysEl.forEach((day)=>{
    day.addEventListener('click', (e)=>{
      selectedDate.textContent = `선택일 : ${e.target.getAttribute('data-date')}`;
    })
  })
}

displayCalendar();
displaySelectedDate();