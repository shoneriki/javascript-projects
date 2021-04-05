const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

checkButton.addEventListener('click', function() {
  definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
  alert("You clicked the next button");
});
