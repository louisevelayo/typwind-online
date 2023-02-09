$(function (){
    // get the active language from a cookie

    let data = {

        en: {

            Type: "Forgot Password",
            Type2: "Please, enter your email so we can send you a new password",
            Email: "Email",
            sendEmail: "Send Email",
            titlePage: "Typwind | Recover Password"

        },
        nl: {

            Type: "Wachtwoord vergeten",
            Type2: "Vul je email in zodat we je een nieuw wachtwoord kunnen sturen",
            Email: "E-mailadres",
            sendEmail: "Stuur Email",
            titlePage: "Typwind | Wachtwoord Herstel"

        }
    }


    let Type = document.getElementById('Type')
    let Type2 = document.getElementById('Type2')
    let email = document.getElementById('email')
    let sendEmail = document.getElementById('sendEmail');


    function updatePageText(language) {
        Type.textContent = data[language].Type;
        Type2.textContent = data[language].Type2;
        email.placeholder = data[language].Email;
        sendEmail.textContent = data[language].sendEmail;
        document.title = data[language].titlePage;

    }

    updatePageText(getActiveLanguage());


})