const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagens() {
  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  })
}

function mostrarImagens() {
  imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
  const totalDeImagens = imagensPainel.length - 1
  if (imagemAtual === imagensPainel.length - 1) {
    return
  }

  imagemAtual++

  esconderImagens()

  mostrarImagens()
})

setaVoltar.addEventListener('click', function () {
  if (imagemAtual === 0) {
    return
  }

  imagemAtual--

  esconderImagens()

  mostrarImagens()
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  ` #quem-somos .titulo, .texto, .imagem1,
  .discover, #descubra .container, .descubra,
  .redes-sociais, .copyright, .space
 `,
  { interval: 100 }
)
