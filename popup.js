document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('city');
    const searchBtn = document.getElementById('search-btn');
    const temperatureLabel = document.getElementById('temperature');
    const humidityLabel = document.getElementById('humidity');
    const windLabel = document.getElementById('wind');
  
    searchBtn.addEventListener('click', function () {
      const city = cityInput.value;
  
      fetchWeather(city);
    });
  
    function fetchWeather(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53fe141e0cbf97ce3c449a01b181dc56`;
  
      fetch(url)
        .then(response => response.json())
        .then(weather => {
          const temp = Math.round(weather.main.feels_like - 273);
          const humidity = Math.round(weather.main.humidity);
          const wind = Math.round(weather.wind.speed * 3.6);
  
          temperatureLabel.textContent = `${temp}°C`;
          humidityLabel.textContent = `${humidity}%`;
          windLabel.textContent = `${wind} Km/Hr`;
        })
        .catch(error => {
          console.error('Error:', error);
          temperatureLabel.textContent = 'N/A';
          humidityLabel.textContent = 'N/A';
          windLabel.textContent = 'N/A';
        });
    }
  });
  