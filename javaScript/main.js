'use stirct';

const modal = document.querySelector('.Modal');
const button1 = document.querySelector('#button1');
const closeIcon = document.querySelector('.modal__content--close');

button1.addEventListener('click', () => { 
  modal.classList.remove('hidden');     /* con esto eliminamos la case de hidden */
  modal.classList.add('visible');       /* aqui volvemos visible el modal */
});

closeIcon.addEventListener('click', () => {  // Asi escondemos de regreso el modal 
  modal.classList.remove('visible');
  modal.classList.add('hidden'); 
  console.log('click detectado')
})

