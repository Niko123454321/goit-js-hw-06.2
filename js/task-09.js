function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorEl = document.querySelector('.change-color')
const spanColor = document.querySelector('span.color')

colorEl.addEventListener('click',  buttonRandomColor)

function buttonRandomColor() {
  document.body.style.backgroundColor = getRandomHexColor()
 spanColor.textContent=getRandomHexColor()
}

