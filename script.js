// write js code here if required
document.addEventListener('DOMContentLoaded', function () {
    // Get the <p> element by its id
    var timerElement = document.getElementById('timer');

    // Function to update the timer
    function updateTimer() {
        // Get the current date and time
        var currentDate = new Date();

        // Format the date and time
        var formattedDate = currentDate.toLocaleDateString();
        var formattedTime = currentDate.toLocaleTimeString();

        // Display the timer in the specified format
        var timerText = formattedDate + ', ' + formattedTime;
        timerElement.innerText = timerText;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();
});
