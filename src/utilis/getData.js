const API_KEY = 'c568a01e4a034cbd5e1e512fe3da7adc'

export default (city, country, data, lat, lon, daycoords) => {
  let url = '';
  const daysCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&units=metric&&appid=${API_KEY}`
  const coords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&&appid=${API_KEY}`
  const current = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&&units=metric&&appid=${API_KEY}`
  const day =`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&&units=metric&&appid=${API_KEY}`
  if (daycoords ) {
    url = daysCoords
  } else if (lat && lon ) {
    url = coords
  } else if (data === 'current') {
    url = current
  } else {
    url = day
  }
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw err
    })
}

