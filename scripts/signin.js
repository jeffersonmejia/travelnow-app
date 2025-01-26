const d = document,
  w = window,
  $form = d.querySelector('form'),
  $user = d.querySelector('.user'),
  $password = d.querySelector('.password')

d.addEventListener('submit', (e) => {
  if (e.target.matches('form')) {
    e.preventDefault()
    let user = $user.value,
      password = $password.value
    if (user.match('admin') && password.match('admin')) {
      w.location.href = 'admin.html'
    }
  }
})
