'use strict';

const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#closeModal');

showModal.addEventListener('click', toggleModal)
closeModal.addEventListener('click', toggleModal)

function toggleModal() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
}
console.log('Scripts Loaded');

const generateWeather = document.querySelector('#generateWeather');

generateWeather.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll('input');
    const zipCodeResponse = document.querySelector('#zipCodeResponse');

    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === 'zipCode') {
            zipCodeResponse.innerHTML = inputItem.value;
    });
})