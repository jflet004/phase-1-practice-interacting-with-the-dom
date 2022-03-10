// Timer
const counter = document.querySelector("#counter");
let timer = setInterval(increase, 1000);
let seconds = 0;

function increase() {
  seconds++;
  counter.textContent = seconds;
}

// Plus Sign Click Event
const plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", plusOne);

function plusOne() {
  seconds++;
  counter.textContent = seconds;
}

// Minus Sign Click Event
const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", minusOne);

function minusOne() {
  seconds--;
  counter.textContent = seconds;
}

// Pause Click Event
const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", pause);

function pause() {
  if (pauseBtn.classList.toggle("clicked")) {
    clearInterval(timer);
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    likeBtn.disabled = true;
    pauseBtn.textContent = "resume";
  } else {
    timer = setInterval(increase, 1000);
    pauseBtn.textContent = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    likeBtn.disabled = false;
  }
}

// 'Like' Click Event
const likeBtn = document.getElementById("heart");
const likeUl = document.querySelector(".likes");
likeBtn.addEventListener("click", liked);

function liked() {
  const listElement = document.getElementById(seconds);
  
  if(listElement) {
    const numClick = parseInt(listElement.getAttribute('num-times-click'));
    listElement.textContent = `Number ${seconds} has been liked ${numClick + 1} times`;
    listElement.setAttribute('num-times-click', numClick + 1);
  } else {
    const list = document.createElement('li');
    list.setAttribute('id', seconds);
    list.setAttribute('num-times-click', 1);
    list.textContent = `Number ${seconds} has been liked 1 time`;
    likeUl.appendChild(list);
  }
}

// 'Comments' Submit Event
const commentForm = document.getElementById('comment-form');
commentForm.addEventListener("submit", userInput);

function userInput(e) {
  e.preventDefault();
  const commentInput = e.target.comment_input.value;
  const commentList = document.getElementById('list');
  const list = document.createElement('li');
  commentList.appendChild(list);
  list.textContent = commentInput;
  commentForm.reset();
}




