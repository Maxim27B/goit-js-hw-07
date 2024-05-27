const input = document.querySelector('#name-input');
const output = document.querySelector("#name-output");
output.textContent = 'Anonymus';
input.addEventListener('input', () =>  {
    output.textContent = input.value;
    if (output.textContent.trim() === '') {
        output.textContent = 'Anonymus';
    }
})