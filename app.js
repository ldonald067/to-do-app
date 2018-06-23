function onReady() {
  const toDos = [];
  const addToDoForm = getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
  }
}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();    
  });

window.onload = function () {
        // alert("The window has loaded!");
    onReady();
};
