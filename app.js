function onReady() {
  const toDos = [];

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
  }

window.onload = function () {
        // alert("The window has loaded!");
    onReady();
};
