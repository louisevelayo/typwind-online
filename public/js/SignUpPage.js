$(function (){
    // get the active language from a cookie
    var loggedUser = check_cookie_name("button1");
    //var loggedUserDecoded = decodeURIComponent(loggedUser);
    //var loggedUserObject = JSON.parse(loggedUserDecoded);
    //var studentID = loggedUserObject['user']['studentID'];


    let Type =  document.getElementById('Type');
    let first_name =  document.getElementById('first_name');
    let last_name =  document.getElementById('last_name');
    let bothHanded = document.getElementById('bothHanded');
    let rightHanded = document.getElementById('rightHanded');
    let leftHanded = document.getElementById('leftHanded');
    let password =  document.getElementById('password');
    let email = document.getElementById("email");
    let confirm_password =  document.getElementById('confirm_password');
    let create_account_button = document.getElementById('create_account_button');
    let have_an_account = document.getElementById('have_an_account');
    let sign_in_now = document.getElementById('sign_in_now');

    if(document.title == 'Sign Up'){

        let showPswd = document.getElementById('showPswd11');
        let showPswd2 = document.getElementById('showPswd12');
        let failMessage = document.getElementById('alertpopup');
        if(failMessage){
            if (failMessage.style.display !== 'none') {
                showPswd.style.top = "11em";
                showPswd2.style.top = "13.4em";
                setTimeout(function() {
                    showPswd.style.top = "8.6em";
                    showPswd2.style.top = "11em";
                }, 3000);
            }
        }

        let data = {
            en: {
                Type: "Create a new " + loggedUser + " account",
                first_name: "First Name",
                last_name: "Last Name",
                bothHanded: "Both Handed",
                rightHanded: "Right Handed",
                leftHanded: "Left Handed",
                password: "Password",
                email: "Email",
                confirm_password: "Confirm Password",
                create_account_button: "Create Account",
                have_an_account: "Have an account?",
                sign_in_now: "Sign in now",
                documentTitle: "Typwind | Sign Up"
            },
            nl: {
                Type: "Maak een nieuw " + loggedUser + " account",
                first_name: "Voornaam",
                last_name: "Achternaam",
                bothHanded: "Tweehandig",
                rightHanded: "Rechtshandig",
                leftHanded: "Linkshandig",
                password: "Wachtwoord",
                email: "E-mailadres",
                confirm_password: "Bevestig Wachtwoord",
                create_account_button: "Maak Account",
                have_an_account: "Heb je een account?",
                sign_in_now: "Meld u nu aan",
                documentTitle: "Typwind | Registratie"
            }
        }

        function updatePageText(language) {
            Type.textContent = data[language].Type;
            first_name.placeholder = data[language].first_name;
            last_name.placeholder = data[language].last_name;
            if(bothHanded && rightHanded && leftHanded)
            {
                bothHanded.textContent= data[language].bothHanded;
                rightHanded.textContent= data[language].rightHanded;
                leftHanded.textContent= data[language].leftHanded;
            }
            password.placeholder = data[language].password;
            email.placeholder = data[language].email;
            confirm_password.placeholder = data[language].confirm_password;
            create_account_button.textContent = data[language].create_account_button;
            have_an_account.textContent = data[language].have_an_account;
            sign_in_now.textContent = data[language].sign_in_now;
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

