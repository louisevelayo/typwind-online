
$(function () {
    let popup = document.getElementById("popup")
    let backgroundpage = document.getElementById("backgroundpage")
    let studentPassword = document.getElementById("studentPassword")
    let popupDeleteStudent = document.getElementById("popupDeleteStudent")
    let popupConfirmChanges = document.getElementById("popupConfirmChanges")
    let subMenuWrap = document.getElementById("subMenuWrap")
    let studentList = document.querySelector("#scrollable1");
    let studentListPopUp = document.querySelector("#scrollable2");

    let emptyState = document.getElementById("emptyState");
    //let handTypeExpand = document.querySelector()



    if (document.title == 'My Students') {


        let search = document.querySelector('.mainPageSearch');
        if (studentList.innerHTML.trim() === '') {
            emptyState.style.display = "block";
            document.getElementById("addstudentbutton").style.visibility = "hidden";
            search.style.visibility = "hidden";
        } else {
            emptyState.style.display = "none";
            document.getElementById("addstudentbutton").style.visibility = "visible";
        }

        let popupSearch = document.querySelector('.searchPopUp');
        let popupSearchIcon = document.querySelector('.searchIconPopUp');

        popupSearchIcon.onclick = function () {
            popupSearch.classList.toggle('active');
            if(popupSearch.classList.value.includes('active'))
            {inputPopUp.removeAttribute('disabled');}
        }

        let searchicon = document.querySelector('.mainPageSearchIcon');

        searchicon.onclick = function () {
            search.classList.toggle('active');
            if(search.classList.value.includes('active'))
            {inputMain.removeAttribute('disabled');}
        }

        // Get the input element and the list of student cards
        const inputMain = document.getElementById('mysearch');
        const inputPopUp = document.getElementById('mysearchpopup');
        const studentCards = document.getElementsByClassName('studentcontainer');
        const studentCardsToAdd = document.getElementsByClassName('containerToAdd');


        let studentListPopUp = document.querySelector("#scrollable2");
        let emptyState3 = document.getElementById("emptyState2");
        if (studentListPopUp.querySelectorAll('.containerToAdd').length === 0 && studentListPopUp.querySelectorAll('.containerToAddSupport').length === 0) {
            emptyState3.style.display = "block";
            document.getElementById("searchcontainer2").style.display = "none";
            document.getElementById("emptystatePopupButtons").style.display = "block";
            document.getElementById("normalPopupButtons1").style.display = "none";
            document.getElementById("normalPopupButtons2").style.display = "none";
            popupSearch.style.display = "none";
            console.log('popup should be empty')
        } else {
            emptyState3.style.display = "none";
            document.getElementById("emptystatePopupButtons").style.display = "none";
            document.getElementById("normalPopupButtons2").style.display = "block";
            document.getElementById("normalPopupButtons1").style.display = "block";
            console.log(emptyState3.style.display)
            console.log(emptyState3)
        }
        // Add an event listener to the input field to listen for changes
        inputMain.addEventListener('input', function () {
            // Get the value of the input field and convert it to lowercase
            const inputValue = this.value.toLowerCase();

            // Loop through the student cards
            for (const studentCard of studentCards) {
                // Get the name element of the student card
                const name = studentCard.getElementsByClassName('studentName')[0];

                // Check if the name element is defined
                if (name) {
                    // Convert the name to lowercase
                    const nameLower = name.innerText.toLowerCase();

                    // Check if the name starts with the input value
                    if (nameLower.includes(inputValue)) {
                        // If it does, show the student card
                        studentCard.style.display = 'block';
                    } else {
                        // If it doesn't, hide the student card
                        studentCard.style.display = 'none';
                    }
                }
            }
        });
        // Add an event listener to the input field to listen for changes
        inputPopUp.addEventListener('input', function () {
            // Get the value of the input field and convert it to lowercase
            const inputValue = this.value.toLowerCase();

            // Loop through the student cards
            for (const studentCard of studentCardsToAdd) {
                // Get the name element of the student card
                const name = studentCard.getElementsByClassName('StudentNamePopUpToAdd')[0];

                // Check if the name element is defined
                if (name) {
                    // Convert the name to lowercase
                    const nameLower = name.innerText.toLowerCase();

                    // Check if the name starts with the input value
                    if (nameLower.includes(inputValue)) {
                        // If it does, show the student card
                        studentCard.style.display = 'block';
                    } else {
                        // If it doesn't, hide the student card
                        studentCard.style.display = 'none';
                    }
                }
            }
        });
        // Add an event listener to the input field to listen for changes

        let clearButtonMain = document.querySelector('.mainPageSearchClear');

        clearButtonMain.addEventListener('click', function () {
            // Clear the search input
            inputMain.value = '';

            // Show all the lessons
            for (let student of studentList.children) {
                student.style.display = 'block';
            }
        });

        let clearButtonPopUp = document.querySelector('.clearPopUp');

        clearButtonPopUp.addEventListener('click', function () {
            // Clear the search input
            inputPopUp.value = '';
            if(studentListPopUp)
            // Show all the lessons
            for (let student of studentListPopUp.children) {
                student.style.display = 'block';
                emptyState3.style.display = 'none';
            }
        });

        let langs = document.querySelector(".langs");
        let link = document.querySelectorAll(".language");
        let editlink = document.querySelector("#editlink");
        let logoutlink = document.querySelector("#logoutlink");
        let myStudentNavigationItem = document.getElementById('My_Students');
        let lessonsNavigationItem = document.getElementById('Lessons');
        let exercisesNavigationItem = document.getElementById('Exercises');
        let emptyStateText1 = document.getElementById("emptyState").getElementsByClassName("emptyStateText1")[0];
        let emptyStateText2 = document.getElementById("emptyState").getElementsByClassName("emptyStateText2")[0];
        let addButtonTextEmptyState = document.getElementById("addstudentbuttonEmptyState");
        let popupHeaderAdd = document.querySelector(".popupHeaderAdd");
        let addstudentbutton_default = document.querySelector("#addstudentbutton");
        //let popupHeaderDelete = document.querySelector(".popupHeaderDelete");
        let passwordDeleteStudentPopUp = document.querySelector(".passwordDeleteStudentPopUp");
        let passwordConfirmDeleteStudentPopUp = document.querySelector(".passwordConfirmDeleteStudentPopUp");
        let expertPassword = document.querySelector("#expertPassword");
        let expertPasswordConfirm = document.querySelector("#expertPasswordConfirm");
        let popupHeaderConfirm = document.querySelector(".popupHeaderConfirm");
        let changesPassword = document.querySelector(".changesPassword");
        let changesPasswordConfirm = document.querySelector(".changesPasswordConfirm");
        let expertPasswordChanges = document.querySelector("#expertPasswordChanges");
        let expertPasswordConfirmChanges = document.querySelector("#expertPasswordChangesConfirm");
        let progressText = document.querySelectorAll('.progress-text');
        let accuracyText = document.querySelectorAll('.accuracy-text');
        let speedText = document.querySelectorAll('.speed-text');
        let levelText = document.querySelectorAll('.level-text');
        let progressTextExp = document.querySelectorAll('.progressTextExp');
        let accuracyTextExp = document.querySelectorAll('.accuracyTextExp');
        let speedTextExp = document.querySelectorAll('.speedTextExp');
        let levelTextExp = document.querySelectorAll('.levelTextExp');
        let progressTextEdit = document.querySelectorAll('.progressTextEdit');
        let accuracyTextEdit = document.querySelectorAll('.accuracyTextEdit');
        let speedTextEdit = document.querySelectorAll('.speedTextEdit');
        let levelTextEdit = document.querySelectorAll('.levelTextEdit');
        let descriptionTypingStyle = document.querySelectorAll('.descriptionTypingStyle');
        let descriptionTypingStyleEdit = document.querySelector('.descriptionTypingStyleEdit');
        let descriptionPasswordEdit = document.querySelector('.descriptionPasswordEdit');
        let descriptionPasswordExpand = document.querySelectorAll('.descriptionPasswordExpand');
        let descriptionStudentNameEdit = document.querySelectorAll('.descriptionStudentNameEdit');
        let descriptionStudentEmailEdit = document.querySelectorAll('.EmailExpEd');
        let buttonSaveEditChanges = document.querySelectorAll('[id^="buttonSaveEditChanges"]');
        let buttonCancelEditChanges = document.querySelectorAll('[id^="buttonCancelEditChanges"]');
        let buttonEditExp = document.querySelectorAll('[id^="buttonEditExp"]');
        let savetextbutton = document.querySelectorAll('[id^="savetextbutton"]');
        let canceltextbutton = document.querySelectorAll('#canceltextbutton');
        let closetextbutton = document.querySelector('#closetextbutton');
        let confirmtextbutton = document.querySelector('#confirmButton');
        let activeStudentOption = document.querySelector("#activeStudentsOption");
        let allStudentOption = document.querySelector("#allStudentsOption");
        let inActiveStudentOption = document.querySelector("#inActiveStudentsOption");
        let lessonOption = document.querySelectorAll('.lessonOption');
        let accesLessonLabel = document.querySelectorAll('[id^="accessLessonLabel"]');
        let handTypeRight = document.querySelectorAll('[id^="handTypeRight"]');
        let handTypeLeft = document.querySelectorAll('[id^="handTypeLeft"]');
        let handTypeBoth = document.querySelectorAll('[id^="handTypeBoth"]');
        let addstudentButton = document.querySelectorAll('[id^="removeStudentButton"]').getAttribute;



        let data = {
            en: {
                editLink: "EDIT YOUR PROFILE",
                logoutlink: "LOG OUT",
                emptyStateText1: "THERE ARE NO STUDENTS YET",
                emptyStateText2: "CLICK ON THE BUTTON TO ADD",
                popupHeaderAdd: "ADD STUDENTS TO YOUR LIST",
                mainSearchPlaceholder: "Search Student",
                buttonAddStudent: "+ ADD STUDENTS",
                //popupHeaderDelete: "ARE YOU SURE YOU WANT TO DELETE THIS STUDENT?",
                passwordText: "Password: ",
                passwordConfirmText: "Confirm Password: ",
                passwordText2: "Password",
                passwordConfirmText2: "Confirm Password",
                popupHeaderConfirm: "CONFIRM CHANGES",
                progressText: "Progress",
                accuracyText: "Accuracy : ",
                speedText: "Speed : ",
                levelText: "Latest lesson :",
                myStudentNavigationItem: "My Students",
                lessonsNavigationItem: "Lessons",
                exercisesNavigationItem: "Exercises",
                descriptionTypingStyle: "Typing Style :",
                studentNameText: "Name Student :",
                studentEmailText: "Email :",
                buttonCancelEditChanges: "CANCEL CHANGES",
                buttonSaveEditChanges: "SAVE CHANGES",
                buttonEditExp: "EDIT",
                savetextbutton: "CONFIRM",
                canceltextbutton: "CANCEL",
                closetextbutton: 'CLOSE',
                documentTitle: "Typwind | My Students",
                activeStudentOption: "Active Students",
                allStudentOption: "All Students",
                inActiveStudentOption: "Inactive Students",
                lessonOption: "Lesson",
                lessonAccesLabel: "Lessons Access",
                leftHanded: "Left Handed",
                rightHanded: "Right Handed",
                bothHanded: "Both Handed",
                MyStudentsTitle: "Go to My Students overview",
                LessonsTitle: "Go to the Lessons",
                ExercisesTitle: "Go to the Exercises"


            },
            nl: {
                editLink: "PAS JE PROFIEL AAN",
                logoutlink: "AFMELDEN",
                emptyStateText1: "JE HEBT NOG GEEN STUDENTEN",
                emptyStateText2: "KLIK OP DE KNOP OM TOE TE VOEGEN",
                popupHeaderAdd: "VOEG EEN  STUDENT TOE AAN JE LIJST",
                mainSearchPlaceholder: "Zoek Student",
                buttonAddStudent: "+ VOEG STUDENTEN TOE",
                //popupHeaderDelete: "WIL JE ZEKER DEZE STUDENT VERWIJDEREN?",
                passwordText: "Wachtwoord : ",
                passwordConfirmText: "Bevestig Wachtwoord : ",
                passwordText2: "Wachtwoord",
                passwordConfirmText2: "Bevestig Wachtwoord",
                popupHeaderConfirm: "BEVESTIG AANPASSINGEN",
                progressText: "Vooruitgang",
                accuracyText: "Nauwkeurigheid : ",
                speedText: "Snelheid : ",
                levelText: "Laatste les : ",
                myStudentNavigationItem: "Mijn Studenten",
                lessonsNavigationItem: "Lessen",
                exercisesNavigationItem: "Oefeningen",
                descriptionTypingStyle: "Typstijl :",
                studentNameText: "Naam Student :",
                studentEmailText: "E-mailadres :",
                buttonCancelEditChanges: "WIJZIGINGEN ANNULEREN",
                buttonSaveEditChanges: "WIJZIGINGEN OPSLAAN",
                buttonEditExp: "WIJZIG",
                savetextbutton: "BEVESTIG",
                canceltextbutton: "ANNULEREN",
                closetextbutton: "SLUIT",
                documentTitle: "Typwind | Mijn Studenten",
                activeStudentOption: "Actieve Studenten",
                allStudentOption: "Alle Studenten",
                inActiveStudentOption: "Inactieve Studenten",
                lessonOption: "Les",
                lessonAccesLabel: "Lessen Toegang",
                leftHanded: "Links Handig",
                rightHanded: "Rechts Handig",
                bothHanded: "Tweehandig",
                MyStudentsTitle: "Ga naar mijn studenten overzicht",
                LessonsTitle: "Bekijk de lessen",
                ExercisesTitle: "Bekijk de oefeningen"

            }
        }


        // update the text of the page elements
        function updatePageText(language) {
            // update the text of each element
            editlink.textContent = data[language].editLink;
            logoutlink.textContent = data[language].logoutlink;
            emptyStateText1.textContent = data[language].emptyStateText1;
            emptyStateText2.textContent = data[language].emptyStateText2;
            addButtonTextEmptyState.textContent = data[language].buttonAddStudent;
            popupHeaderAdd.textContent = data[language].popupHeaderAdd;
            inputMain.placeholder = data[language].mainSearchPlaceholder;
            inputPopUp.placeholder = data[language].mainSearchPlaceholder;
            addstudentbutton_default.textContent = data[language].buttonAddStudent;
            //popupHeaderDelete.textContent = data[language].popupHeaderDelete;
            passwordDeleteStudentPopUp.textContent = data[language].passwordText;
            passwordConfirmDeleteStudentPopUp.textContent = data[language].passwordConfirmText;
            expertPassword.placeholder = data[language].passwordText2;
            expertPasswordConfirm.placeholder = data[language].passwordConfirmText2;
            popupHeaderConfirm.textContent = data[language].popupHeaderConfirm;
            changesPassword.textContent = data[language].passwordText;
            changesPasswordConfirm.textContent = data[language].passwordConfirmText;
            expertPasswordChanges.placeholder = data[language].passwordText2;
            expertPasswordConfirmChanges.placeholder = data[language].passwordConfirmText2;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            myStudentNavigationItem.title = data[language].MyStudentsTitle;
            lessonsNavigationItem.title = data[language].LessonsTitle;
            exercisesNavigationItem.title = data[language].ExercisesTitle;
            progressText.forEach(element => element.textContent = data[language].progressText);
            accuracyText.forEach(element => element.textContent = data[language].accuracyText);
            speedText.forEach(element => element.textContent = data[language].speedText);
            levelText.forEach(element => element.textContent = data[language].levelText);
            progressTextExp.forEach(element => element.textContent = data[language].progressText);
            accuracyTextExp.forEach(element => element.textContent = data[language].accuracyText);
            speedTextExp.forEach(element => element.textContent = data[language].speedText);
            levelTextExp.forEach(element => element.textContent = data[language].levelText);
            progressTextEdit.forEach(element => element.textContent = data[language].progressText);
            accuracyTextEdit.forEach(element => element.textContent = data[language].accuracyText);
            speedTextEdit.forEach(element => element.textContent = data[language].speedText);
            levelTextEdit.forEach(element => element.textContent = data[language].levelText);
            descriptionTypingStyle.forEach(element => element.textContent = data[language].descriptionTypingStyle);
            descriptionTypingStyleEdit.textContent = data[language].descriptionTypingStyle;
            descriptionPasswordExpand.forEach(element => element.textContent = data[language].passwordText);
            descriptionPasswordEdit.textContent = data[language].passwordText;
            descriptionStudentNameEdit.forEach(element => element.textContent = data[language].studentNameText);
            descriptionStudentEmailEdit.forEach(element => element.textContent = data[language].studentEmailText);
            buttonSaveEditChanges.forEach(element => element.textContent = data[language].buttonSaveEditChanges);
            buttonCancelEditChanges.forEach(element => element.textContent = data[language].buttonCancelEditChanges);
            buttonEditExp.forEach(element => element.textContent = data[language].buttonEditExp);
            savetextbutton.forEach(element => element.textContent = data[language].savetextbutton);
            canceltextbutton.forEach(element => element.textContent = data[language].canceltextbutton);
            closetextbutton.textContent = data[language].closetextbutton;
            confirmtextbutton.textContent = data[language].savetextbutton;
            activeStudentOption.textContent = data[language].activeStudentOption;
            inActiveStudentOption.textContent = data[language].inActiveStudentOption;
            allStudentOption.textContent = data[language].allStudentOption;
            lessonOption.forEach(element => {
                // split the text content into two parts: "Lesson" and the lesson number
                let text = element.textContent.split(" ");
                let exercise = text[0];
                let number = text[1];

                // translate the "Lesson" text
                exercise = data[language].lessonOption;

                // concatenate the translated "Lesson" text with the lesson number
                let translatedText = exercise + " " + number;

                // update the text content of the element
                element.textContent = translatedText;

            })
            accesLessonLabel.forEach(element => element.textContent = data[language].lessonAccesLabel);
            handTypeLeft.forEach(element => element.textContent = data[language].leftHanded);
            handTypeRight.forEach(element => element.textContent = data[language].rightHanded);
            handTypeBoth.forEach(element => element.textContent = data[language].bothHanded);
            document.title = data[language].documentTitle;
        }

        updatePageText(getCookie("lang"));

        /*language stuff ends*/
    }
    checkEmptyStatePopUp();

})

function addStudent(studentID) {

    document.getElementById("emptyState").style.display = "none";

    document.getElementById("addstudentbutton").style.visibility = "visible";
    var search = document.querySelector('.mainPageSearch');
    search.style.visibility = "visible";

    ajaxRequest(studentID, 'add');
}

let studentID = '';

function updateStudent(){
    // Get the form data
    console.log(studentID);

    var form = $('#student-form-' + studentID);
    var firstName = form.find('input[name="editStudentFirstName_' + studentID + '"]').val();
    var lastName = form.find('input[name="editStudentLastName_' + studentID + '"]').val();
    var email = form.find('input[name="emailStudentEdit_' + studentID + '"]').val();
    var password = form.find('input[name="studentPasswordEdit_' + studentID +'"]').val();
    var handtype = form.find('select[name="typingstyle_' + studentID +'"]').val();

    var typingStyle = '';

    if(handtype === 'bothHanded') {
        typingStyle = 0;
    }else if(handtype === 'rightHanded'){
        typingStyle = 1;
    }else if(handtype === 'leftHanded'){
        typingStyle = 2;

    }

    var lessonSelected = form.find('select[name="accessLesson_' + studentID +'"]').val();
    var lessonAccess = lessonSelected.replace('lesson', '');

    //console.log(lessonSelected);
    ajaxRequest(studentID, 'update', firstName, lastName, email, password, typingStyle, lessonAccess);

    location.reload();



}
function ajaxRequest2(studentID, isActive) {
    var data = {
        studentID: studentID,
        isActive: isActive
    };

    $.ajax({
        url: "../TypwindController/support",
        type: "POST",
        data: data,
        dataType: 'json',
        success: function(response){
            $('.result').html(response);
        }
    });
}

function ajaxRequest(studentID, action, firstName, lastName, email, password, typingStyle, lesson, activeState) {
    var data = {
        studentID: studentID,
        action: action
    };
    if (action === 'update') {
        data.firstName = firstName;
        data.lastName = lastName;
        data.email = email;
        data.password = password;
        data.typingStyle = typingStyle;
        data.lesson = lesson;
    }
    else if (action === 'delete'){
        data.activeState = activeState;
    }

    $.ajax({
        url: "../TypwindController/myStudents",
        type: "POST",
        data: data,
        dataType: 'json',
        success: function(response){
            $('.result').html(response);
        }
    });
}

function removeStudent(studentId) {

    studentID = studentId;
    console.log(studentId);

    // Remove the student element from the UI
    const studentList = document.querySelector("#scrollable1");

    // Show the empty state message if the list is empty
    if (studentList.innerHTML.trim() === '') {
        document.getElementById("emptyState").style.display = "block";
        document.getElementById("addstudentbutton").style.visibility = "hidden";
    } else {
        console.log('The div is not empty');
    }

    // Call the ajaxRequest function to remove the student
    ajaxRequest(studentID, 'remove');
    setTimeout(function() {
        location.reload();
    }, 500);

}


function checkConfirmation(){
    let loggedUser = getCookie('LoggedUser');
    if (loggedUser) {
        let loggedUserObject = JSON.parse(decodeURIComponent(loggedUser));
        let password = loggedUserObject.user.password;
        // use the password in your code
        //console.log(password);
        // passwords do not match
        toastr.success("Your passwords do not match", 'Success', {
            timeOut: 5000, // display the toast message for 5 seconds
            positionClass: 'toast-bottom-right', // position the toast message at the bottom right of the screen
            preventDuplicates: true // prevent multiple toast messages from being displayed at the same time
        });

        if (password === $('#expertPasswordChanges').val() && $('#expertPasswordChanges').val() === $('#expertPasswordChangesConfirm').val()) {
            // passwords match
            updateStudent();

        } else {
            alert('You filled in the wrong password in one of the fields')
        }


    }

}

function checkConfirmationDelete(){
    let loggedUser = getCookie('LoggedUser');
    if (loggedUser) {
        let loggedUserObject = JSON.parse(decodeURIComponent(loggedUser));
        let password = loggedUserObject.user.password;
        // use the password in your code
        //console.log(password);
        // passwords do not match
        toastr.success("Your passwords do not match", 'Success', {
            timeOut: 5000, // display the toast message for 5 seconds
            positionClass: 'toast-bottom-right', // position the toast message at the bottom right of the screen
            preventDuplicates: true // prevent multiple toast messages from being displayed at the same time
        });

        if (password === $('#expertPassword').val() && $('#expertPasswordConfirm').val() === $('#expertPassword').val()) {
            // passwords match
            //console.log(studentID);
            ajaxRequest(studentID, 'delete', '', '', '', '', '', '', '0');
            ajaxRequest(studentID, 'remove');
            setTimeout(function() {
                location.reload();
            }, 500);
        } else {
            alert('You filled in the wrong password in one of the fields')
            console.log(password);
        }


    }

}



function openAddStudentPopUp() {
    popup.classList.add("openpopup")
    backgroundpage.classList.add("backgroundpageblurred")
}

function openAddStudentPopUp2() {
    popup.classList.add("openpopup2")
    backgroundpage.classList.add("backgroundpageblurred")
}

function cancelAddStudentPopUp(){
    if (document.querySelector('.openpopup2')){
        popup.classList.remove("openpopup2")
    }
    if (document.querySelector('.openpopup')){
        popup.classList.remove("openpopup")
    }

    backgroundpage.classList.remove("backgroundpageblurred")
}

function closeAddStudentPopUp(){
    popup.classList.remove("openpopup")
    backgroundpage.classList.remove("backgroundpageblurred")

    for (let i = 0; i < studentsSelected.length; i++) {
        const student = studentsSelected[i];
        console.log(student);
        ajaxRequest2(student, '1');
        addStudent(student);
    }
    setTimeout(function() {
        location.reload();
    }, 500);
}

function openDeleteStudentPopUp(studentId, studentFirstName, studentLastName) {
    var studentName = studentFirstName.toUpperCase() + " " + studentLastName.toUpperCase();
    let popupHeaderDelete = document.querySelector(".popupHeaderDelete");
    if(getActiveLanguage()=='en')
        popupHeaderDelete.textContent = "ARE YOU SURE YOU WANT TO DELETE " + studentName + "?";
    if(getActiveLanguage()=='nl')
        popupHeaderDelete.textContent = "BEN JE ZEKER DAT JE " + studentName + " WIL VERWIJDEREN?";
    studentID = studentId;
    console.log(studentId);
    popupDeleteStudent.classList.add("openpopupDeleteStudent")
    backgroundpage.classList.add("backgroundpageblurred")
}

function closeDeleteStudentPopUp(){
    popupDeleteStudent.classList.remove("openpopupDeleteStudent")
    backgroundpage.classList.remove("backgroundpageblurred")
}

function openConfirmChanges(studentId) {
    studentID = studentId;
    //console.log(studentID);

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    let emailStudents = [];
    let emailElements = document.getElementsByClassName('allStudentEmails');

    for (let i = 0; i < emailElements.length; i++) {
        let e_mail = emailElements[i].innerHTML;
        let student_id = emailElements[i].id;

        // Remove the row with the student ID from the emailStudents array
        if (student_id == studentId) {
            let emailIndex = emailStudents.indexOf(e_mail);
            if (emailIndex > -1) {
                emailStudents.splice(emailIndex, 1);
            }
        } else {
            emailStudents.push(e_mail);
        }
    }

    var form = $('#student-form-' + studentId);
    var email = form.find('input[name="emailStudentEdit_' + studentId + '"]').val();
    var password = form.find('input[name="studentPasswordEdit_' + studentId + '"]').val();

    let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (password.length >= 5 && password.length <= 20 && passwordReg.test(password)) {
        if (!emailRegex.test(email)) {
            if(getActiveLanguage() == 'en')
            alert("The email you provided is invalid. A valid email is for example : 'example@mail.com'.");
            if(getActiveLanguage() == 'nl')
                alert("Het e-mailadres dat je invulde is onjuist. En juist e-mailadres is van deze vorm : 'example@mail.com'.");
        } else if (emailStudents.includes(email)) {
            if(getActiveLanguage() == 'en')
            alert("This email is already in use by another student. Please choose a different email.");
            if(getActiveLanguage() == 'nl')
                alert("Dit e-mailadres is al in gebruik. Gelieve een ander e-mailadres te gebruiken.");
        } else {
            popupConfirmChanges.classList.add("openpopupConfirmChanges")
            backgroundpage.classList.add("backgroundpageblurred")
        }
    } else if (password.length < 6) {
        if(getActiveLanguage() == "en")
        alert("The password you provided has not more than 6 characters. Passwords are longer than 6 and smaller than 20 characters. Please make sure to stay in that range.");
        if(getActiveLanguage() == "nl")
            alert("Het ingevulde wachtwoord is korter dan 6 karakters. Een wachtwoord moet meer dan 6 en minder dan 20 karakters lang zijn. Gelieve dit in orde te brengen.");
    } else if (password.length > 20) {
        if(getActiveLanguage() == "en")
        alert("The password you provided has more than 20 characters. Passwords are longer than 6 and smaller than 20 characters. Please make sure to stay in that range.");
        if(getActiveLanguage() == "nl")
            alert("Het ingevulde wachtwoord is langer dan 20 karakters. Een wachtwoord moet meer dan 6 en minder dan 20 karakters lang zijn. Gelieve dit in orde te brengen.");
    }else if(!passwordReg.test(password)){
        if(getActiveLanguage() =="en")
        alert("Please provide at least one capital, one small and one number to the password.")
        if(getActiveLanguage() =="nl")
            alert("Gelieve het wachtwoord aan te passen zodat het op zijn minst een hoofdletter, een kleine letter en een cijfer bevat.")
    }else{
        alert("something went wrong");
    }
}



function closeConfirmChanges(){
    popupConfirmChanges.classList.remove("openpopupConfirmChanges")
    backgroundpage.classList.remove("backgroundpageblurred")
}

/*
function togglePassword() {
    var expertPswd = document.getElementById('expertPasswordChanges');
    var invisibleIcon = document.getElementById('showPswd1');
    var visibleIcon = document.getElementById('hidePswd1');

    if (expertPswd.type === "password") {
        expertPswd.type = "text";
        invisibleIcon.style.display = 'none';
        visibleIcon.style.display  = 'block';
    } else {
        expertPswd.type = "password";
        invisibleIcon.style.display = 'block';
        visibleIcon.style.display  = 'none';
    }
}

function togglePasswordConfirm() {
    var expertPswdConfirm = document.getElementById('expertPasswordChangesConfirm');
    var invisibleIcon = document.getElementById('showPswd2');
    var visibleIcon = document.getElementById('hidePswd2');

    if (expertPswdConfirm.type === "password") {
        expertPswdConfirm.type = "text";
        invisibleIcon.style.display = 'none';
        visibleIcon.style.display  = 'block';
    } else {
        expertPswdConfirm.type = "password";
        invisibleIcon.style.display = 'block';
        visibleIcon.style.display  = 'none';
    }
}

function togglePasswordDelete() {
    var expertPswdDelete = document.getElementById('expertPassword');
    var invisibleIcon = document.getElementById('showPswd3');
    var visibleIcon = document.getElementById('hidePswd3');

    if (expertPswdDelete.type === "password") {
        expertPswdDelete.type = "text";
        invisibleIcon.style.display = 'none';
        visibleIcon.style.display  = 'block';
    } else {
        expertPswdDelete.type = "password";
        invisibleIcon.style.display = 'block';
        visibleIcon.style.display  = 'none';
    }
}

function togglePasswordDeleteConfirm() {
    var expertPswdConfirmDelete = document.getElementById('expertPasswordConfirm');
    var invisibleIcon = document.getElementById('showPswd4');
    var visibleIcon = document.getElementById('hidePswd4');

    if (expertPswdConfirmDelete.type === "password") {
        expertPswdConfirmDelete.type = "text";
        invisibleIcon.style.display = 'none';
        visibleIcon.style.display  = 'block';
    } else {
        expertPswdConfirmDelete.type = "password";
        invisibleIcon.style.display = 'block';
        visibleIcon.style.display  = 'none';
    }
}

 */




function toggleExpand(studentId){
    studentID = studentId;
    console.log(studentId);

    var nonexpanded = document.getElementById("nonexpand_" + studentID)
    var expanded = document.getElementById("expand_" + studentID)


    if (expanded.style.display === "none") {
        expanded.style.display = "block";
        nonexpanded.style.display = "none";
    } else {
        expanded.style.display = "none";
        nonexpanded.style.display = "block"
    }
}

function toggleEdit(studentId){
    studentID = studentId;
    console.log("studentId:" + studentId);
    console.log("studentID: " + studentID);

    var expanded = document.getElementById("expand_" + studentID);
    var expandedEdit = document.getElementById("expandEdit_" + studentID);

    if (expandedEdit.style.display === "none") {
        expandedEdit.style.display = "block";
        expanded.style.display = "none";
    } else {
        expandedEdit.style.display = "none";
        expanded.style.display = "block";

    }
}

function showStudents() {
    let activeState = document.getElementById('isActive').value;
    let activeStudents = document.querySelectorAll('.containerToAdd');
    let inactiveStudents = document.querySelectorAll('.containerToAddSupport');

    if (activeState === 'active') {
        activeStudents.forEach(student => student.style.display = 'block');
        inactiveStudents.forEach(student => student.style.display = 'none');
    } else if (activeState === 'inactive') {
        activeStudents.forEach(student => student.style.display = 'none');
        inactiveStudents.forEach(student => student.style.display = 'block');
    } else if (activeState === 'all') {
        activeStudents.forEach(student => student.style.display = 'block');
        inactiveStudents.forEach(student => student.style.display = 'block');
    }
}


var studentsSelected = [];
function toggleSelectedStudent(studentId){
    let studentID = studentId;

    var newStudentToSelect = document.getElementById("smalladd_" + studentID);
    var newStudentSelected = document.getElementById("tudentCard_" + studentID);


    if (newStudentSelected.style.display === "none") {
        newStudentSelected.style.display = "block";
        newStudentToSelect.style.display = "none";

        studentsSelected.push(studentID);
        console.log(studentsSelected);

    } else {

        newStudentSelected.style.display = "none";
        newStudentToSelect.style.display = "block";
        let index = studentsSelected.indexOf(studentID);
        if (index > -1) {
            studentsSelected.splice(index, 1);
        }
    }

}

/*
function openSideMenu() {


    if (subMenuWrap.style.display === "none") {
        subMenuWrap.classList.add("opensubMenuWrap")
        subMenuWrap.style.display = "block";
    } else {
        closeSideMenu();
        subMenuWrap.style.display = "none";
    }

}

function closeSideMenu(){
    subMenuWrap.classList.remove("opensubMenuWrap")
}
$(document).mouseup(function(e)
{
    let subMenuWrap = document.getElementById("subMenuWrap")
    var container1 = $("subMenuWrap");

    if (!container1.is(e.target) && container1.has(e.target).length === 0 && subMenuWrap.classList.contains("opensubMenuWrap"))
    {
        closeSideMenu();
        //console.log('0: ' + subMenuWrap.style.display)
    }
    else{
        subMenuWrap.style.display = "none";
    }


});*/

function checkEmptyStatePopUp(){

}