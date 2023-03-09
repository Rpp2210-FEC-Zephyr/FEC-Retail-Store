const Navigate = document.querySelectorAll('a[href="#"]')


Navigate.forEach(element =>{
  element.addEventListener('click', ()=> {
    Navigate.forEach(el => {
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    element.classList.toggle('active')

  })
})