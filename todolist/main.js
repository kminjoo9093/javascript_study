//인풋창에 할일 입력 -> +버튼 누르면 할일 목록에 추가됨
//체크한 할일은 체크가 되돌리기아이콘으로 바뀌고,
//줄이 그어진다
//삭제를 누르면 리스트에서 제거된다
//탭메뉴 누르면 해당 메뉴에 맞게 필터링 된 할일리스트가 출력된다
//그리고 언더바가 해다 메뉴 위치로 이동한다

const taskInput = document.querySelector(".todo-input"),
  inputBtn = document.querySelector(".input-btn"),
  taskBoard = document.querySelector(".task-board"),
  tabMenus = document.querySelectorAll('.tabs div'),
  underline = document.querySelector('.underline')

inputBtn.addEventListener("click", addList);

let taskList = [];
let filterList = [];
let mode = 'all';
function addList() {
  let taskInfo = {
    taskContent: taskInput.value,
    isComplete: false,
    taskId: makeRandomId(),
  };
  taskList.push(taskInfo);
  renderList();
  taskInput.value = '';
}

function renderList() {
  let list; 
  let resultList = "";
  if(mode === 'all'){    
    list = taskList;
  } else {
    list = filterList;
  }
  list.forEach((task) => {
    if (task.isComplete === true) {
      resultList += `<div class="task">
        <p class="done-line">${task.taskContent}</p>
        <div class="task-btn">
          <button onclick="toggleComplete('${task.taskId}')"><i class="xi-rotate-right"></i></button>
          <button onclick="deleteTask('${task.taskId}')"><i class="xi-trash"></i></button>
        </div>
      </div>`;
    } else {
      resultList += `<div class="task">
            <p>${task.taskContent}</p>
            <div class="task-btn">
              <button onclick="toggleComplete('${task.taskId}')"><i class="xi-check"></i></button>
              <button onclick="deleteTask('${task.taskId}')"><i class="xi-trash"></i></button>
            </div>
          </div>`;
    }
  });
  taskBoard.innerHTML = resultList;
}

function toggleComplete(id) {
  taskList.forEach((task) => {
    if (id === task.taskId) {
      task.isComplete = !task.isComplete;
    }
  });
  filterTask();
}

function deleteTask(id){
  taskList.forEach((task, idx)=>{
    if(id === task.taskId){
     taskList.splice(idx, 1);
    }
  })
  filterTask();
}

tabMenus.forEach((menu, idx, arr)=>{
  menu.addEventListener('click', function(e){filterTask(e, arr)})
})
function filterTask(e, arr){
  //언더바 이동
  if(e){
    underline.style.width = e.target.offsetWidth + 'px';
    underline.style.top = e.target.offsetTop + e.target.offsetHeight + '-3px';
    underline.style.left = e.target.offsetLeft + 'px';
    e.target.style.color = '#000'
    // 클릭안된 메뉴 색 연하게 : 배열자체를 인수로 받아오기
    arr.forEach((menu)=>{
      if(menu !== e.target){
        menu.style.color = '#666';
      }
    })
    mode = e.target.id
  }

  filterList = [];
  // mode가 all, ongoing, done
  if(mode === 'ongoing'){
    taskList.forEach((task)=>{
      if(task.isComplete === false){
        filterList.push(task);
      }
    })
  } else if(mode === 'done'){
    taskList.forEach((task)=>{
      if(task.isComplete === true){
        filterList.push(task);
      }
    })
  }
  renderList();
}

function makeRandomId() {
  return Math.random().toString(36).substr(2, 16);
}
