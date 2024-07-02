let ToDoList = [{
  name: 'Atsispaudimai',
  date: '2024-01-19'
}];

displayList();

function displayList(){
  let ToDoListHTML = '';
  ToDoList.forEach(function(ToDoObject,index){
    const {name, date}=ToDoObject;

    const html=`<div>${name}</div>
      <div>${date}</div>
      <button class="deleteButton" onclick="ToDoList.splice(${index}, 1);
      displayList();">Delete</button>`;
      ToDoListHTML+=html;})
    document.querySelector('.js-todo-list').innerHTML=ToDoListHTML;
}
function AddToList() {
  const InputElement = document.querySelector('.js-todo-input');
  const name = InputElement.value;

  const DateElement = document.querySelector('.js-todo-date');  // Correct the class name here
  const date = DateElement.value;

  ToDoList.push({
    name,
    date
  });

  InputElement.value = '';
  DateElement.value = '';  // Clear the date input
  displayList();
}