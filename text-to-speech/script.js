const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

playButton.addEventListener('click', function(event) {
  playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText)

function playText(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = speedInput.value || 1;
  speechSynthesis.cancel();
  utterance.addEventListener('end', () => {
    textInput.disabled = false
  })
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause()
}
