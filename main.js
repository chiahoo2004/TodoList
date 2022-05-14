const Btn = document.querySelector('.button');
const InBox = document.querySelector('.input-box');
const TodoList = document.querySelector('.todo-list');

Btn.addEventListener('click', add);
TodoList.addEventListener('click', del);
TodoList.addEventListener('click', finish);

function add(e) {

    e.preventDefault();
    if (InBox.value.length === 0)
        return;
    const newDiv = document.createElement('div');
    newDiv.innerText = InBox.value;

    newDiv.innerHTML = `
        <div>
        <input class="checkbox" type="checkbox">
        <label class="todo__title" />${InBox.value}</label>
        <button class="deletebtn">delete</button>
        </div>
    `

    newDiv.classList.add('todo');
    TodoList.appendChild(newDiv);

    savelocal(InBox.value);
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

function savelocal(todo){
    //Check: if item/s are there;
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
