const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

dogs = {
  JRT: "Jack Russell Terrier",
  WC: "Welsh Corgi",
  SH: "Siberian Husky"
}

data = Object.entries(dogs)

function getRandomWord() {
  randomTerm = data[Math.floor(Math.random() * data.length)]
  term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
  definition.innerHTML = `<h3>${randomTerm[1]}</h3>`

}

checkButton.addEventListener('click', function() {
  definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
  location.reload();
});
