$(document).ready(() => {
        
  function validateForm() {
    let firstName = document.querySelector('input[name=first-name]');
    let lastName = document.querySelector('input[name=last-name]');
    let email = document.querySelector('input[name=email]');
    let emailMessage = document.querySelector('textarea[name=message]');

    $('#formSubmit').click(() => {

        if(!firstName.value && !lastName.value && !email.value && !emailMessage.value) {
            if(!firstName.val()) {
                firstName.classList.add('error-true');
                firstName.nextSibling.nextSibling.classList.add('error-true');
            } else {
                firstName.classList.remove('error-true');
                firstName.nextSibling.nextSibling.classList.remove('error-true');
            }
            if(!lastName.val()) {
                lastName.classList.add('error-true');
                lastName.nextSibling.nextSibling.classList.add('error-true');
            } else {
                lastName.classList.remove('error-true');
                lastName.nextSibling.nextSibling.classList.remove('error-true');
            }
            if(!email.val()) {
                email.classList.add('error-true');
                email.nextSibling.nextSibling.classList.add('error-true');
            } else {
                email.classList.remove('error-true');
                email.nextSibling.nextSibling.classList.remove('error-true');
            }
            if(!emailMessage.val()) {
                emailMessage.classList.add('error-true');
                emailMessage.nextSibling.nextSibling.classList.add('error-true');
            } else {
                emailMessage.classList.remove('error-true');
                emailMessage.nextSibling.nextSibling.classList.remove('error-true');
            }            
        }
    })
    }
});