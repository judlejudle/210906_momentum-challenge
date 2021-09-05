const todoForm = document.querySelector("#todoform");
const todoinput = todoForm.querySelector("input");
const todolist = document.querySelector("#todolist");

let toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText= "끝";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
  saveToDos();
}

function handletToDo(event){
  event.preventDefault();
  const newTodo = todoinput.value;
  todoinput.value="";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDos();
}

todoForm.addEventListener("submit", handletToDo)

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
