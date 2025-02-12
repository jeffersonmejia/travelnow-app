const d = document,
  w = window,
  $modalForget = d.querySelector('.modal-forget-container'),
  $body = d.querySelector('body'),
  $messageSuccessForget = d.querySelector('.message-success'),
  $forgetQuery = d.getElementById('forget-query'),
  $forgetHiddenElements = d.querySelectorAll(
    '.modal-forget :not(.message-success)'
  ),
  $modalForgetContent = d.querySelector('.modal-forget')

function forgetClicked() {
  $modalForget.classList.toggle('hidden')
}

function showInterface() {
  setTimeout(() => {
    $body.classList.toggle('hidden')
  }, 300)
}

function forgetQueryClicked() {
  $messageSuccessForget.textContent = ''
  if ($forgetQuery.value.length === 0) {
    $messageSuccessForget.textContent =
      'Ingresa tu correo para recuperar tus credenciales'
  } else {
    let elementsHidden = Array.from($forgetHiddenElements),
      count = 5

    $modalForgetContent.classList.toggle('modal-forget-hidden-elements')
    elementsHidden.forEach((hidden) => {
      hidden.classList.toggle('hidden')
    })

    $messageSuccessForget.classList.toggle('message-success-ok')
    let interval = setInterval(() => {
      if (count == 0) {
        w.location.reload()
        clearInterval(interval)
      }
      $messageSuccessForget.textContent = `Se ha enviado a tu correo: '${$forgetQuery.value}' tu usuario y una clave temporal ✅ ${count}(s)`
      count--
    }, 1000)
  }
}

d.addEventListener('click', (e) => {
  if (
    e.target.matches('#forget') ||
    e.target.matches('.btn-group-modal small')
  ) {
    forgetClicked()
  }
  if (e.target.matches('#query-btn')) {
    e.preventDefault()
    forgetQueryClicked()
  }
})

d.addEventListener('DOMContentLoaded', (e) => {
  showInterface()
})
