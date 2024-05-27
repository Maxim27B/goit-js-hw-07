const formElem = document.querySelector('.login-form');
const button = document.querySelector('button');
formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        email: formElem.elements.email.value.trim(),
        password: formElem.elements.password.value.trim()
    }
    if (data.email === ''|| data.password === '') {
        return alert('All form fields must be filled in')
    };
    console.log(data)
    formElem.reset()
})
