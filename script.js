document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (button.id === 'ans') {
                try {
                    currentInput = eval(currentInput);
                    if (isNaN(currentInput)) {
                        currentInput = 'NaN';
                    }
                } catch (error) {
                    currentInput = 'Error';
                }
            } else if (button.id === 'clr') {
                currentInput = '';
            } else {
                currentInput += buttonText;
            }

            inputField.value = currentInput;
        });
    });
});
