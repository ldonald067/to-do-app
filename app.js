function onReady() {
  const toDos = [];
  const addToDoForm = getElementById('addToDoForm');

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
  }

window.onload = function () {
        // alert("The window has loaded!");
    onReady();
};
