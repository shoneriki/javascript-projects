const fleeButton = document.getElementById('fleeing-button');

fleeButton.addEventListener('click', () => {
  alert('Nice Try')
  window.close()
})

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = fleeButton.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 2 + OFFSET
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition = mousePosition + boxSize / 2
}
