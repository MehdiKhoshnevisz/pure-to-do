window.onload = (function () {
  var toDoForm = document.querySelector('.to-do-form');
  var todoAddButton = document.querySelector("#to-do-add-button");
  var firstToDoNode = document.querySelectorAll('.to-do-element')[0];
  var todoCloseButton = document.querySelector("#to-do-close-button");
  var todoFormWrapper = document.querySelector("#to-do-form-wrapper");
  var todoAddToListButton = document.querySelector('#to-do-add-to-list-button');

  document.addEventListener('click', removeToDoItem);
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
    var toDoIndex = document.querySelectorAll('.to-do-element').length;
    var toDoFormTitle = document.querySelector('#to-do-form-title').value;
    var toDoFormDescription = document.querySelector('#to-do-form-description').value;
    
    var newToDoNode = firstToDoNode.cloneNode(true);
    
    newToDoNode.setAttribute('data-id', `to-do-item-${toDoIndex}`);
    newToDoNode.querySelector('.to-do-element__title').innerText = toDoFormTitle; 
    newToDoNode.querySelector('.to-do-element__description').innerText = toDoFormDescription;
    newToDoNode.querySelector('.to-do-element__edit').setAttribute('data-id', `to-do-item-${toDoIndex}`);
    newToDoNode.querySelector('.to-do-element__remove').setAttribute('data-id', `to-do-item-${toDoIndex}`);

    document.querySelector('.to-do-wrapper').appendChild(newToDoNode);

    toDoForm.reset();

    hideToDoForm();
  }

  function removeToDoItem(event) {
    var targetNode = event.target;

    if (!targetNode.classList.contains('to-do-element__remove')) return;

    var allToDoElements = document.querySelectorAll('.to-do-element')
    
    allToDoElements.forEach(function(element) {
      if (element.dataset.id === targetNode.dataset.id) {
        element.remove();
      }
    });
  }
})();
