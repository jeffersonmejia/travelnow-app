const d = document,
  w = window

let isLocalEnviroment = !w.location.href.includes('github')

const $itineraryTable = d.querySelector('#itinerary-table tbody'),
  $template = d.getElementById('itinerary-template'),
  $fragment = d.createDocumentFragment(),
  API_LOCAL = 'http://localhost:5500/api/admin.json',
  API_GITHUB = 'https://jeffersonmejia.github.io/tripgo-app/api/admin.json',
  API = isLocalEnviroment ? API_LOCAL : API_GITHUB,
  $signoutAncle = d.getElementById('signout-ancle')

$signoutAncle.href = isLocalEnviroment
  ? $signoutAncle.href
  : 'tripgo/signin.html'
//TRAER ITINERARIOS DESDE: admin.json
async function fetchItineraries() {
  try {
    const response = await fetch(API),
      json = await response.json()
    if (!response.ok) throw { status: response.status }
    return json
  } catch (error) {
    console.log(`error ${error.status}`)
  }
}

//INSERTA ITINERARIOS EN INTERFAZ GRÁFICA
async function insertItineraries() {
  const itinerariesJSON = await fetchItineraries()
  let counter = 1
  itinerariesJSON.forEach((itinerary) => {
    const $clone = $template.content.cloneNode(true)
    $clone.getElementById('itinerary-number').textContent = counter
    $clone.getElementById('itinerary-name').textContent = itinerary.name
    $clone.querySelector('#itinerary-date-time').textContent =
      itinerary['date-time']
    $clone.querySelector('#itinerary-price').textContent = itinerary.price
    $clone.querySelector('#itinerary-available').textContent =
      itinerary.available
    $fragment.appendChild($clone)
    counter++
  })
  $itineraryTable.appendChild($fragment)
}
insertItineraries()
