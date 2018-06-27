function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });

    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      newLi.textContent = toDo.title;

      newLi.appendChild(checkbox);

      toDoList.appendChild(newLi);

      newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', function(){
          deleteToDo(toDo.id);
          renderTheUI();
        });
    });
  }

   function deleteToDo (id){
    toDos = toDos.filter(item => item.id !== id);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();

}

window.onload = function () {
        // alert("The window has loaded!");
    onReady();
};
