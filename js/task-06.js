const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', symbolCheck);

function symbolCheck() {
  const desiredLength = this.dataset.length;
  console.log(desiredLength)
  const inputDataLength = this.value.length;
  console.log(inputDataLength)

  if (desiredLength==inputDataLength) {
    this.style.borderColor = '#4caf50';
  } else {
    this.style.borderColor = '#f44336';
  }
}
