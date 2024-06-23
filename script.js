// script.js

document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next-state');
    const prevButton = document.querySelector('.prev-state');
    const state1 = document.querySelector('.state-1');
    const state2 = document.querySelector('.state-2');
    const dateElements = document.querySelectorAll('.date');

    // Function to format and display the current date
    const renderDate = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString(); // Customize the date format as needed
        dateElements.forEach(el => {
            el.textContent = `Date: ${formattedDate}`;
        });
    };

    nextButton.addEventListener('click', () => {
        state1.classList.remove('active');
        state2.classList.add('active');
    });

    prevButton.addEventListener('click', () => {
        state2.classList.remove('active');
        state1.classList.add('active');
    });

    // Render the date on page load
    renderDate();
});
