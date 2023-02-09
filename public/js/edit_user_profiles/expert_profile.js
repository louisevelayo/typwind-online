
$(function (){
    if(document.title == 'Edit Profile') {


        let popupConfirmChanges2 = document.getElementById("popupConfirmChanges2");
        let inputPopUp20 = document.getElementById("password2");
        if (!popupConfirmChanges2.classList.value.includes('openpopupConfirmChanges2')) {
            inputPopUp20.removeAttribute('disabled');
        }

        let showPswd = document.getElementById('showPswd20');
        let failMessage = document.getElementById('alertpopup');
        let failMessage3 = document.getElementById('alertpopup3');
        if(failMessage || failMessage3){
            if(failMessage){
                if (failMessage.style.display !== 'none') {
                    showPswd.style.top = "16.6em";
                    setTimeout(function() {
                        showPswd.style.top = "13.8em";
                    }, 3000);
                }
            } else if(failMessage3){
                if (failMessage3.style.display !== 'none') {
                    showPswd.style.top = "16.6em";
                    setTimeout(function() {
                        showPswd.style.top = "13.8em";
                    }, 3000);
                }
            }
        }


        // get the active language from a cookie
        let data = {
            en: {
                editlink: "EDIT YOUR PROFILE",
                logoutlink: "LOG OUT",
                myStudentNavigationItem: "My Students",
                lessonsNavigationItem: "Lessons",
                exercisesNavigationItem: "Exercises",
                gamesNavigationItem: "Games",
                titleText: "Edit Profile",
                documentTitle: "Typwind | Edit Profile",
                saveChangesText: "Save",
                firstNamePlaceholder: "First Name",
                lastNamePlaceholder: "Last Name",
                emailPLaceholder: "Email",
                passwordPlaceholder: "Password",
                confirmPasswordPlaceholder: "Password",
                confirmButtonText: "Confirm",
                closetextbutton: "Close",
                exampleModalLabel: "Confirm Changes",
                labelPasswordConfirm: "Password: "

            },
            nl: {
                editlink: "PAS JE PROFIEL AAN",
                logoutlink: "LOG UIT",
                myStudentNavigationItem: "Mijn Studenten",
                lessonsNavigationItem: "Lessen",
                exercisesNavigationItem: "Oefeningen",
                gamesNavigationItem: "Spellen",
                titleText: "Pas Profiel Aan",
                documentTitle: "Typwind | Pas Profiel Aan",
                saveChangesText: "Opslaan",
                firstNamePlaceholder: "Voornaam",
                lastNamePlaceholder: "Achternaam",
                emailPLaceholder: "E-mailadres",
                passwordPlaceholder: "Wachtwoord",
                confirmPasswordPlaceholder: "Wachtwoord",
                confirmButtonText: "Bevestig",
                closetextbutton: "Sluit",
                exampleModalLabel: "Bevestig Aanpassingen",
                labelPasswordConfirm: "Wachtwoord: "

            }
        }
        let editlink = document.querySelector("#editlink");
        let logoutlink = document.querySelector("#logoutlink");
        let myStudentNavigationItem = document.getElementById('My_Students');
        let lessonsNavigationItem = document.getElementById('Lessons');
        let exercisesNavigationItem = document.getElementById('Exercises');
        let typeDescription = document.getElementById('Type');
        let saveChangesText = document.getElementById('save_changes_button');
        let firstNamePlaceholder = document.getElementById('first_name1');
        let lastNamePlaceholder = document.getElementById('last_name1');
        let emailPlaceholder = document.getElementById('email1');
        let passwordPlaceholder = document.getElementById('password1');
        let confirmPasswordPlaceholder = document.getElementById('password2');
        let labelFirstName = document.querySelector("label[for='first_name1']");
        let labelLastName = document.querySelector("label[for='last_name1']");
        let labelEmail = document.querySelector("label[for='email1']");
        let labelPassword = document.querySelector("label[for='password1']")
        let labelPasswordConfirm = document.querySelector("label[for='password2']")
        let exampleModalLabel = document.querySelector("#exampleModalLabel");
        let confirmButtonText = document.querySelector("#confirmChanges");
        let closeButtonText = document.querySelector("#closeChanges");


        function updatePageText(language) {
            editlink.textContent = data[language].editLink;
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            document.title = data[language].documentTitle;
            typeDescription.textContent = data[language].titleText;
            saveChangesText.textContent = data[language].saveChangesText;
            firstNamePlaceholder.placeholder = data[language].firstNamePlaceholder;
            lastNamePlaceholder.placeholder = data[language].lastNamePlaceholder;
            passwordPlaceholder.placeholder = data[language].passwordPlaceholder;
            emailPlaceholder.placeholder = data[language].emailPLaceholder;
            labelFirstName.textContent = data[language].firstNamePlaceholder;
            labelLastName.textContent = data[language].lastNamePlaceholder;
            labelEmail.textContent = data[language].emailPLaceholder;
            labelPassword.textContent = data[language].passwordPlaceholder;
            labelPasswordConfirm.textContent = data[language].labelPasswordConfirm;
            confirmPasswordPlaceholder.placeholder = data[language].confirmPasswordPlaceholder;
            exampleModalLabel.textContent = data[language].exampleModalLabel;
            confirmButtonText.textContent = data[language].confirmButtonText;
            closeButtonText.textContent = data[language].closetextbutton;

        }

        updatePageText(getActiveLanguage());

    }

})


// function to check if the form inputs are valid
function validateForm() {

    removeAlert();

    let form = $('#edit_expert_form');
    let firstName = form.find('input[name="name"]').val();
    let lastName = form.find('input[name="surname"]').val();
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;
    //var cpassword = document.getElementById("confirm_password").value;

    let confirmChangesBtn = document.getElementById("confirmChanges");
    confirmChangesBtn.addEventListener("click", function() {
        let password = document.getElementById("password2").value;
        let confirmPassword = document.getElementById("password1").value;
        if (password !== confirmPassword) {
            errorMessage += "<p>Passwords do not match</p>";
            if(getActiveLanguage() == "en")
                document.getElementById("cpassword_error").innerHTML = "Password does not match";
            if(getActiveLanguage() == "nl")
                document.getElementById("cpassword_error").innerHTML = "Wachtwoord komt niet overeen";
            document.getElementById("password2").classList.add("error-input");
            //alert("Passwords do not match.");
        } else {
            document.getElementById("cpassword_error").innerHTML = "";
            document.getElementById("password2").classList.remove("error-input");
            //ajaxRequest3();
            document.getElementById("edit_expert_form").submit();
        }
    });

    let errorMessage = "";
    let error = false;

    if(firstName === ""){
        if(getActiveLanguage() == "en")
            document.getElementById("first_name_error").innerHTML = " Fill in your firstname";
        if(getActiveLanguage() == "nl")
            document.getElementById("first_name_error").innerHTML = " Vul je voornaam in";
        document.getElementById("first_name1").classList.add("error-input");
        error = true;
    }else if(!validateUpperCase(firstName)){
        if(getActiveLanguage() == "en")
            document.getElementById("first_name_error").innerHTML = " First letter should be uppercase";
        if(getActiveLanguage() == "nl")
            document.getElementById("first_name_error").innerHTML = " Eerste letter moet een hoofdletter zijn";
        document.getElementById("first_name1").classList.add("error-input");
        error = true;

    }else if(!validateNames(firstName)){
        if(getActiveLanguage() == "en")
            document.getElementById("first_name_error").innerHTML = " Firstname should be only letters";
        if(getActiveLanguage() == "nl")
            document.getElementById("first_name_error").innerHTML = " Gebruik enkel letters";
        document.getElementById("first_name1").classList.add("error-input");
        error = true;
    }
    else{
        document.getElementById("first_name_error").innerHTML = "";
        document.getElementById("first_name1").classList.remove("error-input")
    }

    if(lastName === ""){
        if(getActiveLanguage() == "en")
            document.getElementById("last_name_error").innerHTML = " Fill in your lastname";
        if(getActiveLanguage() == "nl")
            document.getElementById("last_name_error").innerHTML = " Vul je achternaam in";
        document.getElementById("last_name1").classList.add("error-input");
        error = true;

    }else if(!validateUpperCase(lastName)){
        if(getActiveLanguage() == "en")
            document.getElementById("last_name_error").innerHTML = " First letter should be uppercase";
        if(getActiveLanguage() == "nl")
            document.getElementById("last_name_error").innerHTML = " Eerste letter moet een hoofdletter zijn";
        document.getElementById("last_name1").classList.add("error-input");
        error = true;
    }else if(!validateNames(lastName)){
        if(getActiveLanguage() == "en")
            document.getElementById("last_name_error").innerHTML = " Lastname should be only letters";
        if(getActiveLanguage() == "nl")
            document.getElementById("last_name_error").innerHTML = " Gebruik enkel letters";
        document.getElementById("last_name1").classList.add("error-input");
        error = true;
    }
    else{
        document.getElementById("last_name_error").innerHTML = "";
        document.getElementById("last_name1").classList.remove("error-input")
    }


    if (!validateEmail(email) || email === "" ) {
        if(getActiveLanguage() == "en")
            document.getElementById("email_address_error").innerHTML = " Not a valid email format";
        if(getActiveLanguage() == "nl")
            document.getElementById("email_address_error").innerHTML = " Geen geldig e-mailadres";
        document.getElementById("email1").classList.add("error-input");
        error = true;

    }else{
        document.getElementById("email_address_error").innerHTML = "";
        document.getElementById("email1").classList.remove("error-input")
    }

    if ( !(validatePassword(password)) || password.length<6|| password === "") {
        if(getActiveLanguage() == "en")
            document.getElementById("password_error").innerHTML = "Password needs: 1 lowercase, 1 uppercase, 1 number and 6 characters";
        if(getActiveLanguage() == "nl")
            document.getElementById("password_error").innerHTML = "Gebruik 1 kleine letter, 1 hoofdletter, 1 nummer en 6 karakters";
        document.getElementById("password1").classList.add("error-input");
        error = true;
    }else{
        document.getElementById("password_error").innerHTML = "";
        document.getElementById("password1").classList.remove("error-input");

    }

    if(error===false){
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        modalSHow();

    }
}

function modalSHow(){
    document.getElementById("cpassword_error").innerHTML = "";
    document.getElementById("password2").innerHTML = "";
    popupConfirmChanges2.classList.add("openpopupConfirmChanges2");
    backgroundpage.classList.add("backgroundpageblurred");
    //$("#popupConfirmChanges2").modal("show");

}

function removeAlert() {
    let alert = document.getElementById("alertpopup");
    if (alert) {
        alert.remove();
    }
}
function ajaxRequest3(){
    $.ajax({
        url: "../TypwindController/edit_expert_profile",
        type: "POST",
        data:$('#edit_expert_form').serialize(),
        dataType: 'json',
        success: function(response){
            $('.result').html(response);


        }
    });
}


// function to validate email
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function to validate password
function validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return re.test(password);
}


//function to validate firstname and lastname

function validateUpperCase(Name){
    let re = /^[A-Z]/;
    return re.test(Name);
}
function validateNames(Name) {
    let re = /^[A-Z][a-zA-Z\s]*$/;
    return re.test(Name);
}

function closeConfirmChanges2(){
    popupConfirmChanges2.classList.remove("openpopupConfirmChanges2");
    backgroundpage.classList.remove("backgroundpageblurred");
    //$("#popupConfirmChanges2").modal("hide");
}