/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let day_cost = 35; // Default cost per day
let day_number = 0; // Default number of days
const MONDAY = document.getElementById('monday');
const TUESDAY = document.getElementById('tuesday');
const WEDNESDAY = document.getElementById('wednesday');
const THURSDAY = document.getElementById('thursday');
const FRIDAY = document.getElementById('friday');
const CLEAR_BUTTON = document.getElementById('clear-button');
const HALF = document.getElementById('half');
const FULL = document.getElementById('full');
const CALCULATED_COST = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Event listeners for day buttons
MONDAY.addEventListener('click', function () {
    switchDay(MONDAY);
});

TUESDAY.addEventListener('click', function () {
    switchDay(TUESDAY);
});

WEDNESDAY.addEventListener('click', function () {
    switchDay(WEDNESDAY);
});

THURSDAY.addEventListener('click', function () {
    switchDay(THURSDAY);
});

FRIDAY.addEventListener('click', function () {
    switchDay(FRIDAY);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Event listener for clear button
CLEAR_BUTTON.addEventListener('click', function () {
    MONDAY.classList.remove('clicked');
    TUESDAY.classList.remove('clicked');
    WEDNESDAY.classList.remove('clicked');
    THURSDAY.classList.remove('clicked');
    FRIDAY.classList.remove('clicked');
    day_number = 0;
    CALCULATED_COST.textContent = '0';
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Event listener for half-day button
HALF.addEventListener('click', function () {
    day_cost = 20;
    HALF.classList.add('clicked');
    FULL.classList.remove('clicked');
    Calculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Event listener for full-day button
FULL.addEventListener('click', function () {
    day_cost = 35;
    FULL.classList.add('clicked');
    HALF.classList.remove('clicked');
    Calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Function to Calculate the total cost
function Calculate() {
    const total_cost = day_cost * day_number;
    CALCULATED_COST.textContent = total_cost;
}

// Function to switch day selection
function switchDay(day) {
    if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        day_number += 1;
        Calculate();
    }
}
