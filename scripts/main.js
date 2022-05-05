const ratingSelect = document.querySelector('#rating-select')
const ratingDisplay = document.querySelector('#rating-display')
const ratingText = document.querySelector('#rating-num')

ratingSelect.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(e.target)
  ratingText.textContent = formData.get('rating')

  ratingSelect.setAttribute('hidden', true)
  ratingDisplay.removeAttribute('hidden')
})
