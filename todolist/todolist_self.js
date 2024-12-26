//유저가 인풋에 할일을 입력하고 +버튼 누르면 리스트에 할일이 추가된다
//체크(완료)버튼 누르면 완료된 리스트로 이동. 되돌리기 버튼으로 바뀌고, 줄이 그어진다
//되돌리기버튼 누르면 다시 완료 전 상태로 돌아감(토글)
//삭제버튼 누르면 리스트에서 삭제된다
//탭메뉴 누르면 언더바가 해당 메뉴로 위치 이동하고
//해당 탭에서는 필터링된 리스트가 보인다
//엔터를 눌러도 리스트 추가가 되게
//인풋에 아무 내용없으면 버튼 비활성화, 인풋에 글자를 입력하는 순간 버튼 활성화
//리스트 추가 후 인풋에 포커스

const taskInput = document.querySelector(".todo-input"),
  addBtn = document.querySelector(".input-btn"),
  taskBoard = document.querySelector(".task-board"),
  tabMenus = document.querySelectorAll(".tabs div"),
  indicator = document.querySelector(".underline");
let taskList = [];
let filteredList = [];
let mode = "all";

taskInput.addEventListener('keydown', function(e){
  if(e.key === "Enter"){
    addList();
  }
});
taskInput.addEventListener('input', function(){
  if(this.value.length > 0){
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
})

addBtn.addEventListener("click", addList);
tabMenus.forEach((menu, idx, arr) => {
  menu.addEventListener("click", function (e) {
    filterList(e, arr);
  });
});

function addList() {
  let taskInfo = {
    textContent: taskInput.value,
    isComplete: false,
    Id: makeRandomId(),
  };
  taskList.push(taskInfo);
  renderList();
  taskInput.value = "";
  taskInput.focus();
  addBtn.disabled = true;
}

function renderList() {
  let resultList = "";
  let list;
  if(mode === 'all'){
    list = taskList;
  } else {
    list = filteredList;
  }
  list.forEach((task) => {
    if (task.isComplete === false) {
      resultList += `<div class="task">
            <p>${task.textContent}</p>
            <div class="task-btn">
              <button onclick="toggleComplete('${task.Id}')"><i class="xi-check"></i></button>
              <button onclick="deleteTask('${task.Id}')"><i class="xi-trash"></i></button>
            </div>
          </div>`;
    } else {
      resultList += `<div class="task">
      <p class="done-line">${task.textContent}</p>
      <div class="task-btn">
        <button onclick="toggleComplete('${task.Id}')"><i class="xi-rotate-right"></i></button>
        <button onclick="deleteTask('${task.Id}')"><i class="xi-trash"></i></button>
      </div>
    </div>`;
    }
  });
  taskBoard.innerHTML = resultList;
}

function filterList(e, arr) {
  //언더바 이동, 리스트 필터링
  if (e) {
    arr.forEach((menu)=>{
      menu.style.color = '#666';
    })
    e.target.style.color = "#000";
    indicator.style.width = e.target.offsetWidth + "px";
    indicator.style.left = e.target.offsetLeft + "px";
    indicator.style.top = e.target.offsetTop + e.target.offsetHeight + "-3px";
    mode = e.target.id;
  }

  // filteredList로 보내기
  filteredList = [];
  if(mode === "ongoing"){
    taskList.forEach((task)=>{
      if(task.isComplete === false){
        filteredList.push(task);
      }
    })
  }
  if(mode === "done"){
    taskList.forEach((task)=>{
      if(task.isComplete === true){
        filteredList.push(task);
      }
    })
  }
  renderList();
}

function toggleComplete(id) {
  //체크버튼 누르면 isComplete가 true
  taskList.forEach((task) => {
    if (task.Id === id) {
      task.isComplete = !task.isComplete;
    }
  });
  filterList();
}
function deleteTask(id) {
  taskList.forEach((task, index) => {
    if (task.Id === id) {
      taskList.splice(index, 1);
    }
  });
  filterList();
}

function makeRandomId() {
  return Math.random().toString(36).substr(2, 16);
}
