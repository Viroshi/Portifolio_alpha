const navbar = document.querySelectorAll('.navbar button[class^="l"]');
const buttonsBar = document.querySelectorAll('.links')
const textTime = document.querySelector('.text-time');
const bar = document.querySelector('.navbar')
let i = 9;
function start() {
    const capa = document.getElementById('main');
    capa.classList.add("activeFadeIn");
    let timer = setInterval(() => interval(timer), 1000)
    setTimeout(() => {
        capa.classList.add("activeFadeOut");
        setTimeout(() => {
            capa.classList.remove("activeFadeIn");
            capa.classList.remove("activeFadeOut");
            classOne()
        }, 3000);
    }, 10000);
}
start()

function interval(timer) {
    if(i > 0) {
        textTime.textContent = i;
        i--;
    } else {
        clearInterval(timer)
        return textTime.textContent = 'Iniciando Aula 1...'
    }
}

function classOne() {
    document.getElementById('aula1').classList.add('ativar');
    activesElement()
    setTimeout(() => textTime.textContent = 'Você está vendo: ', 2000)
}

function activesElement() {
    bar.classList.add('ativar');
    buttonsBar.forEach(element => element.classList.add('ativar'));
}


navbar.forEach(item => {
    item.addEventListener('click', getElemenetOnClick);
})

function getElemenetOnClick(event) {
    event.preventDefault();
    const get_element = event.target;
    const targetDivId = get_element.getAttribute('data-target');
    const targetDiv = document.getElementById(targetDivId);

    if (targetDiv) {
        const allContents = document.querySelectorAll('.reason');
        allContents.forEach(content => content.classList.remove('ativar'));
        targetDiv.classList.add("ativar");
    }
}