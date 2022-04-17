const ratingSelect = document.querySelector('#rating-select')
const ratingDisplay = document.querySelector('#rating-display')
const ratingText = document.querySelector('#rating-num')
const submit = document.querySelector('#submit')
let rating

ratingSelect.addEventListener('click', e => {
  if (e.target.name !== 'rating') return
  rating = e.target.id
  ratingText.textContent = rating
})

submit.onclick = _ => {
  ratingSelect.setAttribute('hidden', true)
  ratingDisplay.removeAttribute('hidden')
}
