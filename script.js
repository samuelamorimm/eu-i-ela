window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector("audio");
  audio.play().catch(error => console.log("Autoplay bloqueado:", error));
});


// animacao-scrool ---------------------

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) { // se o elemento estiver na tela
        entry.target.classList.add('show')
      } else { // se o elemento não estiver na tela
          entry.target.classList.remove('show')
      }
  })
})

const elements = document.querySelectorAll(".hidden")


elements.forEach((elements) => myObserver.observe(elements))

// animacao-scrool ---------------------