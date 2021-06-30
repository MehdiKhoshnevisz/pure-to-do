window.onload = (function () {
  var toDoForm = document.querySelector('.to-do-form');
  var todoAddButton = document.querySelector("#to-do-add-button");
  var firstToDoNode = document.querySelectorAll('.to-do-element')[0];
  var todoCloseButton = document.querySelector("#to-do-close-button");
  var todoFormWrapper = document.querySelector("#to-do-form-wrapper");
  var todoAddToListButton = document.querySelector('#to-do-add-to-list-button');
  var todoEditListItemButton = document.querySelector('#to-do-edit-list-item-button');

  document.addEventListener('click', handleEditToDoItem);
  document.addEventListener('click', removeToDoItem);
  todoAddButton.addEventListener("click", showToDoForm);
  todoCloseButton.addEventListener("click", hideToDoForm);
  todoAddToListButton.addEventListener("click", addToDoToList);
  todoEditListItemButton.addEventListener("click", editToDoListItem);
  

  function showToDoForm(id, hasEditButton) {
    todoFormWrapper.style.display = "flex";

    if (!!id) {
      var toDoForm = document.querySelector('.to-do-form');
      toDoForm.setAttribute('data-id', `${id}`);
    }

    if (hasEditButton) {
      todoAddToListButton.style.display = 'none';
      todoEditListItemButton.style.display = 'initial';
    } else {
      todoAddToListButton.style.display = 'initial';
      todoEditListItemButton.style.display = 'none';
    }
  }

  function hideToDoForm() {
    todoFormWrapper.style.display = 'none';
  }

  function fillToDoForm(id) {
    var toDoFormTitle = document.querySelector('#to-do-form-title');
    var toDoFormDescription = document.querySelector('#to-do-form-description');
    var selectedToDoItem = document.querySelector(`.to-do-element[data-id="${id}"]`);
    var selectedToDoItemTitleValue = selectedToDoItem.querySelector('.to-do-element__title').innerText;
    var selectedToDoItemDescriptionValue = selectedToDoItem.querySelector('.to-do-element__description').innerText;

    toDoFormTitle.value = selectedToDoItemTitleValue;
    toDoFormDescription.value = selectedToDoItemDescriptionValue;
  }

  function addToDoToList() {
    var toDoIndex = document.querySelectorAll('.to-do-element').length;
    var toDoFormTitleValue = document.querySelector('#to-do-form-title').value;
    var toDoFormDescriptionValue = document.querySelector('#to-do-form-description').value;
    
    var newToDoNode = firstToDoNode.cloneNode(true);
    
    newToDoNode.setAttribute('data-id', `${toDoIndex}`);
    newToDoNode.querySelector('.to-do-element__title').innerText = toDoFormTitleValue; 
    newToDoNode.querySelector('.to-do-element__description').innerText = toDoFormDescriptionValue;
    newToDoNode.querySelector('.to-do-element__edit').setAttribute('data-id', `${toDoIndex}`);
    newToDoNode.querySelector('.to-do-element__remove').setAttribute('data-id', `${toDoIndex}`);

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

  function handleEditToDoItem(event) {
    var targetNode = event.target;

    if (!targetNode.classList.contains('to-do-element__edit')) return;
    
    var id = targetNode.dataset.id;
    
    showToDoForm(id, true);

    fillToDoForm(id);
  }

  function editToDoListItem() {
    var selectedToDoForm = document.querySelector('.to-do-form');

    var id = selectedToDoForm.dataset.id;

    var selectedtoDoFormTitleValue = selectedToDoForm.querySelector('#to-do-form-title').value;
    var selectedtoDoFormDescriptionValue = selectedToDoForm.querySelector('#to-do-form-description').value;

    var selectedToDoItem = document.querySelector(`.to-do-element[data-id="${id}"]`);
    var selectedToDoItemTitle = selectedToDoItem.querySelector('.to-do-element__title');
    var selectedToDoItemDescription = selectedToDoItem.querySelector('.to-do-element__description');

    selectedToDoItemTitle.innerText = selectedtoDoFormTitleValue;
    selectedToDoItemDescription.innerText = selectedtoDoFormDescriptionValue;

    selectedToDoForm.reset();

    hideToDoForm();
  }
})();
