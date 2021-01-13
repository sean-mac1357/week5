'use strict';

// ***************** Plain JS Version **************************************************************
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Ready');
    const button = document.querySelector('#button'); // button has now been created into an object
    button.addEventListener('click', function (event) {
        event.preventDefault(); // prevents reloading of the page
        alert('CLICKED!!');
    })
});

// ***************** jQuery Version *****************************************************************
$(document).ready(function () {
    console.log('jQuery DOM Ready');
    $('#button2').click(function (event) {
        event.preventDefault();
        alert('Button 2 CLICKED')
    });
});