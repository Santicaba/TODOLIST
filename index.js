const formulario = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const lista = document.querySelector('ul');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value.trim() === '') return;
  const tarea = document.createElement('li');
  const contenido = document.createElement('span');
  contenido.textContent = input.value;
  const boton = document.createElement('button');
  boton.textContent = 'Borrar';
  boton.classList.add('borrar');
  tarea.appendChild(contenido);
  tarea.appendChild(boton);
  lista.appendChild(tarea);
  input.value = '';
});

lista.addEventListener('click', (event) => {
  if (event.target.classList.contains('borrar')) {
    event.target.parentElement.remove();
  }
});
