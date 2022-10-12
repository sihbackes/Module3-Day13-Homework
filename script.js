/* EXERCISE 5:
              Add a new task to the list.
              Suggestion:
              - Use document.getElementById to get the UL item and the input text
              - Use the document.createElement to create the new List Item
              - Append the LI child to the UL
          */
const addNewTask = function (content) {
  let ul = document.getElementById("myTaskList");
  let li = document.createElement("li");
  content = document.getElementById("newTask").value;
  li.appendChild(document.createTextNode(content));
  ul.appendChild(li);
  document.getElementById("newTask").value = "";
};

/* EXERCISE 6:
              Create a function "removeLast" which removes the last item from the task list
          */

const removeLast = function () {
  let list = document.querySelectorAll("li");
  let lastTask = list[list.length - 1];
  lastTask.remove();
};

/* EXERCISE 7:
              Create a function "removeFirst" which removes the first item from the task list
          */
const removeFirst = function () {
  let list = document.querySelectorAll("li");
  list[0].remove();
};
/* EXERCISE 8:
             Create a function "getTasksAsArray" which returns, and prints to the console an array containing the tasks as strings
          */
const getTasksAsArray = function () {};

/* EXERCISE 9:
             Create a function "changeTaskBackgroundColor" and attach it to the "Change task background" button via JavaScript (not via html attribute)
             Take the color from the color picker ad apply it as background to every list item
    */
const changeTaskBackgroundColor = function () {
  let color = document.getElementById("colorPicker").value;
  let background = document.getElementById("myTaskList");
  background.style.backgroundColor = color;
};
/* ### EXTRA ### */

/* EXERCISE 10:
              Attach an eventListener to each new task you create. When the task receives the click it should be removed (only the clicked task should disappear)
    */

/* EXERCISE 11:
             Create a function "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
    */

/* #### Suggestion:
     - Break the code into many function for semplicity 
     - Reuse the functions previously created */
