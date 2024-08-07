// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to remove the last character from the display (backspace)
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to format numbers with commas and two decimal places
function formatNumberWithCommas(number) {
    if (isNaN(number)) {
        return number;
    }

    // Round to two decimal places
    number = parseFloat(number).toFixed(2);

    const parts = number.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join('.');
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    const resultElement = document.querySelector('.result');
    if (resultElement) {
        const resultText = resultElement.innerText.split(' ')[1];
        const formattedResult = formatNumberWithCommas(resultText);
        resultElement.innerText = `Result: ${formattedResult}`;
    }

    const historyItems = document.querySelectorAll('.history li');
    historyItems.forEach(item => {
        const [expression, result] = item.innerText.split(' = ');
        item.innerText = `${expression} = ${formatNumberWithCommas(result)}`;
    });
});

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        // Submit the form when Enter key is pressed
        document.querySelector('form').submit();
    } else if (key === 'Backspace') {
        backspace();
    }
});
