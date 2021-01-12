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

const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll('input');
    const adjectiveResponse = document.querySelector('#adjectiveResponse');
    const pluralNounResponse = document.querySelector('#pluralNounResponse');
    const somethingAliveResponse = document.querySelector('#somethingAliveResponse');
    const femaleCelebrityResponse = document.querySelector('#femaleCelebrityResponse');
    const somethingAlive2Response = document.querySelector('#somethingAlive2Response');
    const pluralNoun3Response = document.querySelector('#pluralNoun3Response');
    const pluralNoun4Response = document.querySelector('#pluralNoun4Response');
    const adverbResponse = document.querySelector('#adverbResponse');
    const adjective2Response = document.querySelector('#adjective2Response');
    const somethingStickyResponse = document.querySelector('#somethingStickyResponse');
    const nounResponse = document.querySelector('#nounResponse');
    const noun2Response = document.querySelector('#noun2Response');
    const adjective3Response = document.querySelector('#adjective3Response');
    const friendResponse = document.querySelector('#friendResponse');
    const chemicalResponse = document.querySelector('#chemicalResponse');
    const foodResponse = document.querySelector('#foodResponse');
    const liquidResponse = document.querySelector('#liquidResponse');
    const friend2Response = document.querySelector('#friend2Response');
    const femaleCelebrity2Response = document.querySelector('#femaleCelebrity2Response');

    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === 'myAdjective') {
            adjectiveResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myPluralNoun') {
            pluralNounResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'mySomethingAlive') {
            somethingAliveResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myFemaleCelebrity') {
            femaleCelebrityResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'mySomethingAlive') {
            somethingAlive2Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myPluralNoun3') {
            pluralNoun3Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myPluralNoun4') {
            pluralNoun4Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myAdverb') {
            adverbResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myAdjective2') {
            adjective2Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'mySomethingSticky') {
            somethingStickyResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myNoun') {
            nounResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myNoun2') {
            noun2Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myAdjective3') {
            adjective3Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myFriend') {
            friendResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myChemical') {
            chemicalResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myFood') {
            foodResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myLiquid') {
            liquidResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myFriend') {
            friend2Response.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'myFemaleCelebrity') {
            femaleCelebrity2Response.innerHTML = inputItem.value;
        }
    });
})