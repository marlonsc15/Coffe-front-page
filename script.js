const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const A = document.getElementsByClassName('A')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


function refresh() {
    return location.reload()
}

A.addEventListener('click', () => {
  window.location.href = "http://conteudo.imguol.com.br/c/entretenimento/ac/2020/08/14/cafe-especial-1597429133880_v2_1920x1280.jpg";
})
