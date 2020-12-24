const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
  addNewNote();
});

function addNewNote() {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `

  `

  document.body.appendChild('note');
}
const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');

editBtn.addEventListener('click', () => {
  main.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
});

textArea.addEventListener('input' , (e) => {
  const { value } = e.target;

  main.innerHTML = marked(value);
});
