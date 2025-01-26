// Espera a que el DOM esté completamente cargado

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos del menú
  const menuItems = document.querySelectorAll('.menu-item')

  // Agrega un evento 'click' a cada elemento del menú
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Elimina la clase 'active' de todos los elementos
      menuItems.forEach((menu) => menu.classList.remove('active'))

      // Agrega la clase 'active' al elemento seleccionado
      item.classList.add('active')
    })
  })

  // Verificación adicional: elimina duplicados de 'search-box'
  // Esto asegura que no se generen cuadros de búsqueda adicionales accidentalmente
  const searchBoxes = document.querySelectorAll('.search-box')
  if (searchBoxes.length > 1) {
    for (let i = 1; i < searchBoxes.length; i++) {
      searchBoxes[i].remove() // Elimina los duplicados dejando solo el primero
    }
  }
})

document
  .getElementById('redirectButton')
  .addEventListener('click', function () {
    window.location.href = 'signin.html'
  })
