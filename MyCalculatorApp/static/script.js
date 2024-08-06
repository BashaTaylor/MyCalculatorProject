function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to format numbers with commas
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

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

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

