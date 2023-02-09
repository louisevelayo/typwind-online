
$(function (){
    // get the active language from a cookie

    let data = {
        en: {
            editlink: "EDIT YOUR PROFILE",
            logoutlink: "LOG OUT",
            myStudentNavigationItem: "Home",
            lessonsNavigationItem: "Lessons",
            exercisesNavigationItem: "Exercises",
            gamesNavigationItem: "Games",
            newGameBtn: "Save",
            documentTitleExercise: "Typwind | Exercise",
            documentTitleLessons: "Typwind | Lesson"
        },
        nl: {
            editlink: "PAS JE PROFIEL AAN",
            logoutlink: "AFMELDEN",
            myStudentNavigationItem: "Thuis",
            lessonsNavigationItem: "Lessen",
            exercisesNavigationItem: "Oefeningen",
            gamesNavigationItem: "Spellen",
            newGameBtn: "Opslaan",
            documentTitleExercise: "Typwind | Oefening",
            documentTitleLessons: "Typwind | Les"
        }
    }

    let lessonID = getCookie('lessonButton');
    let lessonNumber = "";
    if(lessonID == 0 || lessonID == 1 || lessonID == 2 || lessonID == 100){
        lessonNumber = 1;
    }else if(lessonID == 3 || lessonID == 4 || lessonID == 5){
        lessonNumber = 2;
    }else if(lessonID == 6 || lessonID == 7 || lessonID == 8){
        lessonNumber = 3;
    }else if(lessonID == 9 || lessonID == 10 || lessonID == 11){
        lessonNumber = 4;
    }
    let exerciseID = getCookie('exerciseButton');
    let exerciseNumber = "";
    if(exerciseID == 1 || exerciseID == 2 || exerciseID == 11){
        exerciseNumber = 1;
    }else if(exerciseID == 3 || exerciseID == 4 || exerciseID == 5){
        exerciseNumber = 2;
    }else if(exerciseID == 6 || exerciseID == 7 || exerciseID == 8){
        exerciseNumber = 3;
    }else if(exerciseID == 9 || exerciseID == 10){
        exerciseNumber = 4;
    }

    let logoutlink = document.querySelector("#logoutlink");
    let myStudentNavigationItem = document.getElementById('Home');
    let lessonsNavigationItem = document.getElementById('Lessons');
    let exercisesNavigationItem = document.getElementById('Exercises');
    let gamesNavigationItem = document.getElementById('Games');
    let newGameBtn = document.getElementById('newGameBtn');

    if(document.title == 'Exercise'){
        function updatePageText(language) {
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            gamesNavigationItem.textContent = data[language].gamesNavigationItem;
            newGameBtn.textContent = data[language].newGameBtn;

            if(lessonsNavigationItem.classList.value == 'active')
            document.title = data[language].documentTitleLessons + lessonNumber;
            if(exercisesNavigationItem.classList.value == 'active')
            document.title = data[language].documentTitleExercise + exerciseNumber;

        }

        updatePageText(getActiveLanguage());
    }


})