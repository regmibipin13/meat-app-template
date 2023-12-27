"use strict"; // Enable strict mode

// Function to scroll to the next position
function scrollNext() {
    // Select the scroll container and animate the scrollLeft property
    $('.scroll-container').animate({
        scrollLeft: "+=300px"
    }, "slow"); // Animation duration is set to "slow"
}

// Function to scroll to the previous position
function scrollPrev() {
    // Select the scroll container and animate the scrollLeft property in the opposite direction
    $('.scroll-container').animate({
        scrollLeft: "-=300px"
    }, "slow"); // Animation duration is set to "slow"
}
