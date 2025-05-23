
let tamanhoFonte = 100

function aumentarFonte() {
  if (tamanhoFonte < 200) {
    tamanhoFonte += 10
    document.body.style.fontSize = tamanhoFonte + '%'
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 50) {
    tamanhoFonte -= 10
    document.body.style.fontSize = tamanhoFonte + '%'
  }
}

function contraste() {
  document.body.classList.toggle('contraste')
}

function resetar() {
  tamanhoFonte = 100
  document.body.style.fontSize = '100%'
  document.body.classList.remove('contraste')
}

function lerTexto() {
  const activeText =
    document.querySelector('.slide.active .text') ||
    document.querySelector('.main-section .text')
  if (activeText) {
    const utter = new SpeechSynthesisUtterance(activeText.innerText)
    utter.lang = 'pt-BR'
    window.speechSynthesis.speak(utter)
  }
}


function toggleMenu() {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('ativo')
}

const slides = document.querySelectorAll('.slide')
let currentSlide = 0

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[index].classList.add('active')
}

const setaEsquerda = document.querySelector('.arrow.left')
const setaDireita = document.querySelector('.arrow.right')

if (setaEsquerda && setaDireita) {
  setaEsquerda.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  })

  setaDireita.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  })
}


if (slides.length) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }, 6000)
}


const form = document.getElementById('form-contato')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const mensagem = document.getElementById('mensagem').value.trim()

    const feedback = document.getElementById('feedback')

    if (nome === '' || email === '' || mensagem === '') {
      feedback.innerText = 'Por favor, preencha todos os campos.'
      feedback.style.color = 'red'
    } else {
      feedback.innerText = 'Mensagem enviada com sucesso!'
      feedback.style.color = 'green'
      form.reset()
    }
  })
}
