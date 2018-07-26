// Variables


// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    // Create the <option> for the years
    const html = new HTMLUI();
    html.displayYears();
});

// Objects

function HTMLUI() {}

// Displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function() {
    // Max & Min years
    const max = new Date().getFullYear(),
            min = max - 20;

    // Generate the list with the latest twenty years
    const selectYears = document.getElementById('year');

    // Print the values
    for(let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}