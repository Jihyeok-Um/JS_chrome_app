const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const HIDDEN_CN = "hidden";
const USER_LS = "currentUser";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    greeting.classList.remove(HIDDEN_CN);
    form.classList.add(HIDDEN_CN);
    greeting.innerText = `Hello ${text}`;
}

function setName() {
    form.classList.remove(HIDDEN_CN);
    form.onsubmit=function(event){
        event.preventDefault();
        currentUser = input.value;
        paintGreeting(currentUser);
        saveName(currentUser);
    }
}

function getName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        setName();
    }
    else {
        paintGreeting(currentUser);
    }
}

function init() {
    getName();
}
init();