const Btn = document.querySelector('.button');
const InBox = document.querySelector('.input-box');
const TodoList = document.querySelector('.todo-list');

Btn.addEventListener('click', add);
TodoList.addEventListener('click', del);
TodoList.addEventListener('click', finish);

function add() {
    if (InBox.value.length === 0)
        return;
    const newDiv = document.createElement('div');
    newDiv.innerText = InBox.value;

    newDiv.innerHTML = `
        <div>
        <input class="checkbox" type="checkbox">
        <label class="todo__title" />${InBox.value}</label>
        <button class="deletebtn"></button>
        </div>
    `

    newDiv.classList.add('todo');
    TodoList.appendChild(newDiv);
}

function del(event){
    const target = event.target;
    if(target.classList[0] === 'deletebtn') {
        target.parentNode.remove();
    }
}

function finish(event){
    const target = event.target;
    if(target.classList[0] === 'checkbox') {
        target.parentNode.classList.toggle("done");
    }
}
