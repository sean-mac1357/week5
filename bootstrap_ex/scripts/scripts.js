'use strict';

// const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#closeModal');

showModal.addEventListener('click', toggleModal)
closeModal.addEventListener('click', toggleModal)

function toggleModal() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
}
console.log('Scripts Loaded');

const generateMessage = document.querySelector('#generateMessage');

generateMessage.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll('input');
    const nameResponse = document.querySelector('#nameResponse');
    const emailResponse = document.querySelector('#emailResponse');
    const messageResponse = document.querySelector('#messageResponse');
    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === 'name') {
            nameResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'email') {
            emailResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'message') {
            messageResponse.innerHTML = inputItem.value;
        }
    });
    toggleModal();
})
