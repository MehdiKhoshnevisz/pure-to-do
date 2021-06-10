window.onload = (function () {
  var toDoForm = document.querySelector('.to-do-form');
  var todoAddButton = document.querySelector("#to-do-add-button");
  var firstToDoNode = document.querySelectorAll('.to-do-element')[0];
  var todoCloseButton = document.querySelector("#to-do-close-button");
  var todoFormWrapper = document.querySelector("#to-do-form-wrapper");
  var todoAddToListButton = document.querySelector('#to-do-add-to-list-button');

  todoAddButton.addEventListener("click", showToDoForm);
  todoCloseButton.addEventListener("click", hideToDoForm);
  todoAddToListButton.addEventListener("click", addToDoToList);

  function showToDoForm() {
    todoFormWrapper.style.display = "flex";
  }

  function hideToDoForm() {
    todoFormWrapper.style.display = "none";
  }

  function addToDoToList() {
    var toDoFormTitle = document.querySelector('#to-do-form-title').value;
    var toDoFormDescription = document.querySelector('#to-do-form-description').value;
    
    var newToDoNode = firstToDoNode.cloneNode(true);

    newToDoNode.querySelector('.to-do-element__title').innerText = toDoFormTitle; 
    newToDoNode.querySelector('.to-do-element__description').innerText = toDoFormDescription;

    document.querySelector('.to-do-wrapper').appendChild(newToDoNode);

    toDoForm.reset();

    hideToDoForm();
  }
})();
