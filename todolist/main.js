//인풋창에 할일 입력 -> +버튼 누르면 할일 목록에 추가됨
//체크한 할일은 체크가 되돌리기아이콘으로 바뀌고,
//줄이 그어진다
//삭제를 누르면 리스트에서 제거된다

const taskInput = document.querySelector(".todo-input"),
  inputBtn = document.querySelector(".input-btn"),
  taskBoard = document.querySelector(".task-board");

inputBtn.addEventListener("click", addList);

let taskList = [];
function addList() {
  let taskInfo = {
    taskContent: taskInput.value,
    isComplete: false,
    taskId: makeRandomId(),
  };
  taskList.push(taskInfo);
  renderList();
}

function renderList() {
  let resultList = "";
  taskList.forEach((task) => {
    if (task.isComplete === true) {
      resultList += `<div class="task">
        <p class="done-line">${task.taskContent}</p>
        <div class="task-btn">
          <button onclick="toggleComplete('${task.taskId}')"><i class="xi-check"></i></button>
          <button><i class="xi-trash"></i></button>
        </div>
      </div>`;
    } else {
      resultList += `<div class="task">
            <p>${task.taskContent}</p>
            <div class="task-btn">
              <button onclick="toggleComplete('${task.taskId}')"><i class="xi-check"></i></button>
              <button><i class="xi-trash"></i></button>
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
}

function makeRandomId() {
  return Math.random().toString(36).substr(2, 16);
}
