'use strict';

function getQuote(category) {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (response) {
        updateBody(response.value);
    });
}

function getCategories() {
    const url = 'https://api.chucknorris.io/jokes/categories';
    get(url).then(function (response) {
        buildCategoryList(response);
    })
}

function updateBody(quote) {
    const paragraph = document.querySelector('div #modal-body p');
    paragraph.innerHTML = quote;
}

function buildCategoryList(categoryList) {
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

getCategories();
getQuote('career');