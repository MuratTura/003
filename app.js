const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const card3 = document.querySelector('.card-3')
const card4 = document.querySelector('.card-4')
const container = document.querySelector('.container')

card1.addEventListener('mouseenter', () => {
  container.classList.add('hover-left')
})
card1.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})