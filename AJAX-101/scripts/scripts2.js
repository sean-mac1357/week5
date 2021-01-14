'use strict';

function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8316e366af13e76f72a95e976c965236&units=imperial`;
    get(url).then(function (response) {
        updateBody(response.value);
        console.log('you got zip')
    });
}

function getCityName() {
    const url = 'https://api.openweathermap.org/data/2.5/weather/name';
    get(url).then(function (response) {
        buildCityNameList(response);
    })
}

function updateBody(weather) {
    const paragraph = document.querySelector('div #modal-body p');
    paragraph.innerHTML = weather;
}

function buildCityNameList(cityNameList) {
    const filteredList = cityNameList.filter(function (cityName) {
        if (cityName !== 'Bluffton') {
            return cityName;
        }
    });

    const form = document.querySelector('#changeWeather');
    const cityNameSelect = document.createElement('select');
    filteredList.map(function (cityName) {
        const cityNameOption = document.createElement('option');
        cityNameOption.value = cityName;
        cityNameOption.text = cityName;
        cityNameSelect.appendChild(cityNameOption);
    });
    form.appendChild(cityNameSelect);    
    
    cityNameSelect.addEventListener('change', function (event) {
        getWeather(event.target.value);
    })
}


getCityName();
getWeather('London');