/* make a function addtask - we want jese hi es button pe click hoga ye wala fuction call hoga */

function addTask (){
    const newTask = document.createElement("li") // make a variable const newTask nd create a list-item element
    const taskList = document.getElementById("taskList") // take another variable list itm wali me se 
          taskList.appendChild(newTask) // or task list mein add kr denge new task list ko to dainamicly add list item only
          newTask.textContent = document.getElementById('inputTask').value //input me jo bhi likhe newtask ke andr li me aa jaye value
          document.getElementById('inputTask').value = "" // jo bhi input me likhe use blank hone ke liye
          deleteTask(newTask) // deletask function also call or esme pass krenge li variable newtask 
};

// make a function delete task
function deleteTask(newTask) {
    const deleteBtn = document.createElement("button") // firstly create delete button 
    deleteBtn.textContent = "Delete" // delete button ka text content delete  
    newTask.appendChild(deleteBtn) // delete button ko add krna chate h es newTask mein 
    deleteBtn.onclick = function() { // delebtn pe handler lagenge ki jese hi es delte btn pe click ho function call hona chaie
        newTask.remove() // or es function mein newtask ke andr likhi chize remove , remove method work jis bhi element pe remove method lagaya h use remove
    }  0 
};