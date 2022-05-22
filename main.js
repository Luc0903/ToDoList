const todoContainer = document.querySelector('.todos');
const input = document.querySelector('.formTodo__input');
const form = document.querySelector('.formTodo__ctn');
const itemsLeft = document.querySelector('.viewTodos__items--left');
const buttonClearCompleted = document.querySelector('.viewTodos__items--clear');
const filterButtons = document.querySelectorAll(".options h3");


form.addEventListener("submit", (e)=> {

	e.preventDefault();

	if (input.value.trim() !== ''){

        addTodo();

        input.value = '';

        const todoContainerArray = [...document.querySelectorAll('.todo')];

        filterArray(todoContainerArray, 'pressed');

    }

});


function addTodo() {

	//Creando los elementos HTML

	const divTodo = document.createElement("DIV");

	const span = document.createElement("SPAN");

	const xmark = document.createElement("img");

	xmark.src = 'images/icon-cross.svg';

	xmark.classList.add('xmark');

	span.classList.add('spanCreated');

	// Agregamos en el body del todolist la nueva nota

	divTodo.classList.add('todo');

	divTodo.appendChild(span);

	divTodo.innerHTML += `<p>${input.value}</p>`;

	divTodo.appendChild(xmark);

	todoContainer.appendChild(divTodo);

	// En caso de click sobre el elemento, se agrega la
	// imagen del tilde.

	divTodo.addEventListener('click',()=>{

        divTodo.classList.toggle('pressed'); 

        const todoContainerArray = [...document.querySelectorAll('.todo')];

        filterArray(todoContainerArray, 'pressed');

    });

    xmark.addEventListener('click', ()=> {

    	todoContainer.removeChild(divTodo);

    	const todoContainerArray = [...document.querySelectorAll('.todo')];

        filterArray(todoContainerArray, 'pressed');

    });

    filterButtons.forEach((btn) => {
    const todoContainerArrayNodes = document.querySelectorAll(".todo");
    btn.addEventListener("click", (e) => {
      let btnEvent = e.currentTarget.classList.value;
      if (btnEvent == "all") {
        todoContainerArrayNodes.forEach((node) => {
          node.style.display = "flex";
        });
      } else if (btnEvent == "active") {
        todoContainerArrayNodes.forEach((node) => {
          node.style.display = "flex";
          if (node.classList.contains("pressed")) {
            node.style.display = "none";
          }
        });
      } else {
        todoContainerArrayNodes.forEach((node) => {
          node.style.display = "flex";
          if (!node.classList.contains("pressed")) {
            node.style.display = "none";
          }
        });
      }
    });
  });

} 

function filterArray(arr, className){

	const filterTodos = arr.filter(elem => {

		return !elem.classList.contains(className);

	});

	itemsLeft.textContent = `${filterTodos.length} item(s) left`;

}


buttonClearCompleted.addEventListener('click', ()=> {

	const todoContainerArrayNodes = document.querySelectorAll('.todo');

	clear(todoContainerArrayNodes);

});


function clear(arr) {

    const todosClassified = [...arr].filter((obj) => {

      return obj.classList.contains("pressed");

    });

    todosClassified.forEach((elem) => {

      todoContainer.removeChild(elem);

    });

  }