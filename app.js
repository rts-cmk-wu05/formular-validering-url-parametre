
const submitBtn = document.querySelector('#submit-btn').addEventListener('click', (e) => {

    const allowedUsername = /^[\s\w\-_'.]+$/g; //Self written and simpel regex code
    const allowedName = /^[\sa-zA-Z\-'.]+$/g; //Self written no numbers allowed
    const allowedMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //after many attempts I borrowed a regex code
     
    if (!form.username.value.match(allowedUsername)) {
        highlightError(form.username);
        e.preventDefault();
        return false
    }
    if (!form.name.value.match(allowedName)) {
        highlightError(form.name);
        e.preventDefault();
        return false
    }

    if (!form.email.value.match(allowedMail)) {
        highlightError(form.email);
        e.preventDefault();
        return false
    }
    return true
});

function highlightError(element) {
    element.value = "";
    element.setAttribute('placeholder', "Invalid text, try again...");
    element.classList.add('form__input_error');
    element.focus();
    element.addEventListener('input', () => element.classList.remove('form__input_error')) 
}