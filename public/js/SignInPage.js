$(function (){
    // get the active language from a cookie
    var loggedUser = check_cookie_name("button1");
    //var loggedUserDecoded = decodeURIComponent(loggedUser);
    //var loggedUserObject = JSON.parse(loggedUserDecoded);
    //var studentID = loggedUserObject['user']['studentID'];


    let Type =  document.getElementById('Type');
    let createAccount = document.getElementById('createAccount');
    let forgotPassword = document.getElementById('forgotPassword');
    let login_button = document.getElementById('SignInButton');


    if(document.title === 'Sign In'){

        let showPswd = document.getElementById('showPswd10');
        let failMessage = document.getElementById('alertpopup');
        let failMessage2 = document.getElementById('alertpopup3');
        if(failMessage){
            if (failMessage.style.display !== 'none') {
                showPswd.style.top = "52%";
                setTimeout(function() {
                    showPswd.style.top = "38%";
                }, 3000);
            }
        }
        if(failMessage2){
            if (failMessage2.style.display !== 'none') {
                showPswd.style.top = "52%";
                setTimeout(function() {
                    showPswd.style.top = "38%";
                }, 3000);
            }
        }




        let password =  document.getElementById('passwordSignIn');
        let email = document.getElementById('emailSignIn');
        let data = {
            en: {
                Type: loggedUser + " Portal",
                createAccount: "Create a new " + loggedUser + " account",
                forgotPassword: "Forgot password",
                documentTitle: "Typwind | Sign In",
                password: "Password",
                email: "Email",
                login_button: "Login"
            },
            nl: {

                Type: loggedUser + " Portaal",
                createAccount: "Maak een nieuw " + loggedUser + " account",
                forgotPassword: "Wachtwoord vergeten",
                documentTitle: "Typwind | Inloggen",
                password: "Wachtwoord",
                email: "E-mailadres",
                login_button: "Aanmelden"
            }
        }

        function updatePageText(language) {
            Type.textContent = data[language].Type;
            createAccount.textContent = data[language].createAccount;
            forgotPassword.textContent = data[language].forgotPassword;
            login_button.textContent = data[language].login_button;
            password.placeholder = data[language].password;
            email.placeholder = data[language].email;
            document.title = data[language].documentTitle;
        }

        updatePageText(getActiveLanguage());

    }




})

function check_cookie_name(name)
{
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    else{
        console.log('--something went wrong---');
    }
}

