let display = document.querySelector('.display'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    days = document.querySelector('.days'),
    selectedDate = document.querySelector('.selected-date');

    
let dateToday = new Date();
let year = dateToday.getFullYear();
let month = dateToday.getMonth(); // 월 0~11월
let date = dateToday.getDate(); 

function displayCalendar() {
  const firstDay = new Date(year, month, 1); //첫째날
  const firstDayIdx = firstDay.getDay(); //요일 : 0부터 일요일
  const lastDay = new Date(year, month+1, 0); //마지막 날(다음 달에서 하루를 빼기)
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

prevBtn.addEventListener('click', ()=>{
  //days안 날짜 초기화, selected 초기화, 
  days.textContent = '';
  selectedDate.textContent = '';
  //현재 달이 1월이면 연도가 바껴야함 (0~11이기 때문에 1월은 month가 0)
  if(month < 0){
    year = year - 1;
    month = 11
  }
  month = month - 1;
  dateToday.setMonth(month);
  console.log(month)
  displayCalendar();
  displaySelectedDate()
})
nextBtn.addEventListener('click', ()=>{
  //days안 날짜 초기화, selected 초기화, 
  days.textContent = '';
  selectedDate.textContent = '';
  //현재 달이 12월이면 연도가 바껴야함 
  if(month > 11){
    year = year + 1;
    month = 0;
  }
  month = month + 1;
  dateToday.setMonth(month);
  console.log(month)
  displayCalendar();
  displaySelectedDate()
})

displayCalendar();
displaySelectedDate();