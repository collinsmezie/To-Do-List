import './style.css';
import Icon1 from './kebab.png';
import Icon2 from './refresh.svg';

const tasks = [
  { description: 'eat', completed: true, index: 0 },
  { description: 'code', completed: true, index: 1 },
  { description: 'sleep', completed: false, index: 2 },
];

const headline = document.querySelector('.headline');
const refreshIcon = new Image();
refreshIcon.src = Icon2;
refreshIcon.className = 'refresh-image';
headline.appendChild(refreshIcon);
function CreateList(tasks) {
  for (let i = 0; i < tasks.length; i += 1) {
    const list = document.querySelector('.dynamic-list');
    const element = document.createElement('div');
    element.className = 'bg task';
    /* eslint-disable */
    const { description, completed, index } = tasks[i];
    /* eslint-enable */
    element.innerHTML = description;
    const menu = new Image();
    menu.src = Icon1;
    menu.className = 'menu-image';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkBox';

    element.appendChild(checkbox);
    element.appendChild(menu);
    list.appendChild(element);
  }
}
CreateList(tasks);
