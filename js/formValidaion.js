$(document).ready(() => {
        let firstName = $('input[name=first-name]');
        let lastName = $('input[name=last-name]');
        let email = $('input[name=email]');
        let emailMessage = $('textarea[name=message]');

        $('#formSubmit').click(() => {

            if(firstName.val() && lastName.val() && email.val() && emailMessage.val()) {
                $.ajax({
                    type: "post",
                    url: "send-email.php",
                    data:
                      "first_name=" +
                      firstName.val() +
                      "&lastName=" +
                      lastName.val() +
                      "&email=" +
                      email.val() +
                      "&message=" +
                      emailMessage.val(),
                    success: () => {
                      $('.form-modal-content .content-wrapper').hide();
                      $('.form-modal-title').htnl('Thanks for contacting me! <br> I will be in touch with you shortly!')
                    },
                    error: () => {
                      alert(
                        "Email service is not working."
                      );
                    },
                  });

            } else {
                if(!firstName.val()) {
                    firstName.addClass('error-true');
                    firstName.next().next().addClass('error-true');
                } else {
                    firstName.removeClass('error-true');
                    firstName.next().next().removeClass('error-true');
                }
                if(!lastName.val()) {
                    lastName.addClass('error-true');
                    lastName.next().next().addClass('error-true');
                } else {
                    lastName.removeClass('error-true');
                    lastName.next().next().removeClass('error-true');
                }
                if(!email.val()) {
                    email.addClass('error-true');
                    email.next().next().addClass('error-true');
                } else {
                    email.removeClass('error-true');
                    email.next().next().removeClass('error-true');
                }
                if(!emailMessage.val()) {
                    emailMessage.addClass('error-true');
                    emailMessage.next().next().addClass('error-true');
                } else {
                    emailMessage.removeClass('error-true');
                    emailMessage.next().next().removeClass('error-true');
                }
                
            }
        })
});