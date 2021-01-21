const toDoForm = document.querySelector(".js-toDo"),
    toDoInput = toDoForm.querySelector(".js-toDoInput"),
    toDoList = toDoForm.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function setToDos() {
    toDoForm.onsubmit=function(event){
        event.preventDefault();
        toDos = toDoInput.value;
        paintToDos(toDos);
    }
}

function getToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    setToDos();
}

function init() {
    getToDos();
}
init();