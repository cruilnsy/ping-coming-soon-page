let notifyMeButton = document.querySelector(".notify__notify-me");
let notifyEmail = document.querySelector(".notify__email");
let notifyEmailField = document.querySelector(".notify__email-field");

let validateEmail = email => (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);

let clearFields = () => {
    notifyEmail.classList.remove("error");
};

let addErrorsToFields = () => {
    notifyEmail.classList.add("error");
};

notifyMeButton.addEventListener("click", event => {
    event.preventDefault();
    clearFields();
    let email = notifyEmailField.value;
    
    if (validateEmail(email)) {
        // api calls
    } else {
        addErrorsToFields();
    }
});

