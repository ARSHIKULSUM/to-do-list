const tasks=[];
const tasksList = document.getElementById("List");
const addTaskInput = document.getElementById("add");
const TasksCounter = document.getElementById("tasks-counter");
const added = document.getElementById("added");

console.log("working")


function addTaskToDOM(task){
const li= document.createElement('li');
/*template string*/
li.innerHTML=`
      
      <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''}
      class="custom-checkbox">
      <label for= "${task.id}">${task.text}</label>
      <❌ class="delete" data-id="${task-id}" />
      
`;

tasksList.append(li);
}

function renderList(task){
  
 tasksList.innerHTML= '';
  
  for(let i=0; i<tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }

   TasksCounter.innerHTML = tasks.length; 
}




function toggleTask(taskId){
  const task = tasks.filter(function(task){
    return task.id == taskId
  });

  if(task.length > 0){
    const currentTask = task[0];

    currentTask.done = !currentTask.done;
    renderList();
    showNotification('Task toggled');
    return;
  };
  
  showNotification('task toggle failed');

}




function deleteTask(taskId){
  const newTasks = tasks.filter(function(task){
    return task.id !== taskId
  });

  tasks = newTasks;
  renderList();
  showNotification("Task deleted successfully");
  return;
}




function addTask(task) {
  /* jo task niche find kiye hain usko add karenge array me */
  if(task){
    tasks.push(task);
    renderList();
    showNotification('task added successfully');
    return;
  }

  showNotification('task can not be added');
}



/*{
  const newTask = tasks.filter(function(task){
    return task.id !== taskId
  })

  tasks = newTask;
  renderList();
  showNotification('task deleted successfully');
  return;
}*/




function showNotification(text) {
  alert(text);
}



function handleInputKeypress (e) {
  if (e.key == 'Enter') {
    const text = e.target.value;

    console.log('text', text);

  if (!text) {
    showNotification('task text can not be empty');
    return;
  }

  const task = { 
    text: text,
    id: Date.now().toString(),
    done: false
  }

  e.target.value = '';
  addTask(task);
 }
}

function handleClickListener(e) {
  const target = e.target;
  console.log(target);

  if (target.className == 'delete') {
    const taskId =target.dataset.id;
    deleteTask(taskId);
    return;

  }else if (target.className == 'custom-checkbox'){
    const taskId = target.id;
    toggleTask(taskId);
    return;
  }
}

addTaskInput.addEventListener('keyup', handleInputKeypress);

document.addEventListener('click',handleClickListener);



















































/*var add= document.querySelector(".add-btn");
var remove= document.querySelector(".remove-btn");
var items= document.querySelector(".item");
var list= document.querySelector(".box");



add.addEventListener('click', function(e){
  var para= document.createElement("p");  
  list.appendChild(para);
  var val = items.value;
    if(val==''){
        
      list.innerHTML += "please enter something";
      items.value = ' ';  
      
      

    }else{
        
    para.innerHTML += items.value;

    items.value=" ";
    para.addEventListener('click', function(){
      para.style.textDecoration= "line-through";
    });

    remove.addEventListener('click', function(){
      list.removeChild(para);
    
    });
    }
});*/





