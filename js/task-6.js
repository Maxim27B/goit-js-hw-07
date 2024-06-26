function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlElems = document.querySelector('#controls');
const input = controlElems.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

    
createBtn.addEventListener('click', () => {
    if (input.value >= 1 && input.value <= 100) {
        createBoxes(input.value)
    }
})

const width = 30;
const height = 30;

function createBoxes(amount) {
    boxesElem.innerHTML = '';
    let markup = '';
    for (let i = 1; i <= amount; i++) {
        const divElem = `<div class="color-boxes" style="background-color: ${ getRandomHexColor()}; width: ${width + (i-1) * 10}px; height: ${height + (i-1) *10}px"></div>`;
        markup += divElem;
    }
    boxesElem.insertAdjacentHTML('beforeend', [markup]);
    input.value = '';
}

destroyBtn.addEventListener('click', () => {
    boxesElem.innerHTML = '';
})
