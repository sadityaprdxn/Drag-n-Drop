'use strict';

window.onload = function () {
  var priorities = document.querySelectorAll('.drop');
  var dragElement = document.querySelectorAll('.priorities ul:last-of-type li');
  var start = document.querySelector('.start');
  var restart = document.querySelector('.restart');
  var draggedItem = null;
  start.addEventListener('click', run);

  function run() {

    if (start.innerHTML == "start") {
      start.innerHTML = "stop";
      for (var i = 0; i < dragElement.length; i++) {
        dragElement[i].children.draggable = true;
        dragElement[i].draggable = true;

        dragElement[i].addEventListener('dragstart', dragstart);

        function dragstart() {
          draggedItem = this;
          setTimeout(function () {
            draggedItem.classList.add('hidden');
            console.log(draggedItem);
          }, 0);
        }
        dragElement[i].addEventListener('dragend', dragend);

        function dragend() {
          draggedItem = this;
          setTimeout(function () {
            draggedItem.classList.remove('hidden');
          }, 0);
        }
      }

      for (var k = 0; k < priorities.length; k++) {
        var priority = priorities[k];
        priority.addEventListener('dragover', function (e) {
          e.preventDefault();
          this.classList.toggle('bgcolor');
        });
        priority.addEventListener('dragenter', function (e) {
          e.preventDefault();
        });
        priority.addEventListener('drop', function () {
          this.appendChild(draggedItem);
        });
      }
    }

    else if (start.innerHTML === "stop") {
      start.innerHTML = "start";
      for (var i = 0; i < dragElement.length; i++) {
        dragElement[i].children.draggable = false;
        dragElement[i].draggable = false;
      }
    }
  }

  restart.addEventListener('click', function () {
    window.location.reload();
  });
}
