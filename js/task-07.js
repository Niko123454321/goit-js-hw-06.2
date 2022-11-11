const inputEl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text')
// console.log(inputEl)
// console.log(spanText)

inputEl.addEventListener('input',inputFontSize)

function inputFontSize() {
  spanText.style.fontSize = this.value+ 'px';
}



