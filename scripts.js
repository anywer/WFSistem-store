const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const itens = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numnberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = itens.length
let timer;

prevButton.addEventListener('click', () => {
    alert('Prev')
})

nextButton.addEventListener('click', () => {
    alert('Next')
})

