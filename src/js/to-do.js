window.onload = (function () {
  // Display form
  var todoAddButton = document.querySelector("#to-do-add-button");
  var todoCloseButton = document.querySelector("#to-do-close-button");
  var todoFormWrapper = document.querySelector("#to-do-form-wrapper");

  todoAddButton.addEventListener("click", function () {
    todoFormWrapper.style.display = "flex";
  });

  todoCloseButton.addEventListener("click", function () {
    todoFormWrapper.style.display = "none";
  });
})();
