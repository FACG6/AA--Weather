const API_KEY = 'c568a01e4a034cbd5e1e512fe3da7adc'

export default (city, country) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&&units=metric&&appid=${API_KEY}`)
  .then(res => res.json())
  .catch(err => {
    throw err
  })

