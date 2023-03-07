const Navigate = document.querySelectorAll('a[href="#"]')

console.log('NAVIAGET', Navigate)

Navigate.forEach(element =>{
  element.addEventListener('click', ()=> {
    console.log('clicked')
    Navigate.forEach(el => {
      console.log('EL CLASSLIST', el.classList)
      if (el.classList.contains('active')) {
        console.log('CONTAIN', el.classList)
        el.classList.remove('active')
        console.log('REMOVED', el.classList)
      }
    })

    element.classList.toggle('active')
    console.log('ADD NEW', element.classList)
  })
})