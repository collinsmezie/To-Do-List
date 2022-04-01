import './style.css';
import Icon1 from './refresh.svg';
import setLocalStorage from './modules/setLocalStorage.js';
import handleToDo from './modules/handleToDo.js';

const dynamicDivision = document.querySelector('.dynamic-list');
const mainForm = document.querySelector('.main-form');
const mainInput = document.querySelector('.field-input');
let taskArr = [];

document.addEventListener('DOMContentLoaded', () => {
  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textValue = mainInput.value;
    const itemObj = {
      index: taskArr.length + 1,
      Description: textValue,
      Completed: false,
    };
    taskArr.push(itemObj);
    setLocalStorage(taskArr);
    // display todos in realtime
    /* eslint-disable no-use-before-define */
    getList(taskArr);
    /* eslint-enable */
    mainForm.reset();
  });
  /* eslint-disable no-use-before-define */
  getLocalStorage();
  /* eslint-enable */
});

// get items from local storage
const getLocalStorage = () => {
  const todoStorage = localStorage.getItem('Todos');
  if (todoStorage === null) {
    taskArr = [];
  } else {
    taskArr = JSON.parse(todoStorage);
  }
  /* eslint-disable no-use-before-define */
  getList(taskArr);
  /* eslint-enable */
};

function getList(myToDos) {
  dynamicDivision.innerHTML = '';
  if (myToDos.length > 0) {
    myToDos.forEach((todo) => {
      dynamicDivision.insertAdjacentHTML('beforeend', `<div class = "inner-main-container todo">
  <div class="section-1" data-time="${todo.index}">
  <input type="checkbox" class="checkbox" ${todo.Completed ? 'checked' : 'unchecked'}>
  <label class="label" contenteditable="true">${todo.Description}</label>
  
  </div> 
  <div class="section-2"> 
  <span class="fa fa-trash trash-image remove-btn"></span>
  </div>
  </div>`);
      handleToDo(todo, taskArr);
    });
  }
}
document.querySelector('.clear').addEventListener('click', (e) => {
  e.preventDefault();
  const filteredTodos = taskArr.filter((item) => !item.Completed);
  for (let i = 0; i < filteredTodos.length; i += 1) {
    filteredTodos[i].index = filteredTodos.indexOf(filteredTodos[i]) + 1;
  }
  taskArr = filteredTodos;
  setLocalStorage(taskArr);
  getList(taskArr);
});
const refreshImage = new Image();
refreshImage.src = Icon1;
const headlineSection = document.querySelector('.headline');

headlineSection.appendChild(refreshImage);
refreshImage.className = 'refresh-image';