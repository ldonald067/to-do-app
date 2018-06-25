function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text for the to-do title
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set text display of delete button
    deleteButton.textContent = "Delete";

    // set the to-do title
    newLi.textContent = title;

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    //empty the input
    newToDoText.value = '';

    //event listener for the delete button
    deleteButton.addEventListener('click', function () {
      toDoList.removeChild(newLi);

    });
  });
}

window.onload = function() {
  // alert("The window has loaded!");
  onReady();
};
