const toDoForm = document.querySelector(".js-toDoForm"),
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
    toDoList.appendChild(li); //오류 나는 이유 분석
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function getToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
}

function init() {
    getToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();

