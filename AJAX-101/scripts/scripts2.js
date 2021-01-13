'use strict';

function getWeather(zip) {
    const url = `api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=8316e366af13e76f72a95e976c965236&units=imperial`;
    get(url).then(function (response) {
        updateBody(response.value);
    });
}

// function getInput() {
//     const url = 'https://api.chucknorris.io/jokes/categories';
//     get(url).then(function (response) {
//         buildCategoryList(response);
//     })
// }

function updateBody(weather) {
    const paragraph = document.querySelector('#modal p');
    paragraph.innerHTML = weather;
    toggleModal();
}

function buildCategoryList(categoryList) {
    // Filter out the "explicit" and "celebrity"     categories
    const filteredList = categoryList.filter(function (category) {
        if (category !== 'explicit' && category !== 'celebrity') {
            return category;
        }
    });

    const form = document.querySelector('#changeQuote');
    const categorySelect = document.createElement('select');
    filteredList.map(function (category) {
        const categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.text = category;
        categorySelect.appendChild(categoryOption);
    });
    form.appendChild(categorySelect);    
    
    categorySelect.addEventListener('change', function (event) {
        getQuote(event.target.value);
    })
}

closeModal.addEventListener('click', toggleModal)

function toggleModal() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
}
getCategories();
getQuote('career');