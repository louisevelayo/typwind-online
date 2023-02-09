$(function (){
    // get the active language from a cookie
    var loggedUser = check_cookie_name("LoggedUser");
    var loggedUserDecoded = decodeURIComponent(loggedUser);
    var loggedUserObject = JSON.parse(loggedUserDecoded);
    var firstName = loggedUserObject['user']['firstName'];

    let data = {
        en: {
            editlink: "EDIT YOUR PROFILE",
            logoutlink: "LOG OUT",
            myStudentNavigationItem: "Home",
            lessonsNavigationItem: "Lessons",
            exercisesNavigationItem: "Exercises",
            gamesNavigationItem: "Games",
            latestLessonButton: "Latest lesson",
            latestExerciseButton: "Latest exercise",
            homepage_accuracy_text: "Your total accuracy is:",
            bubbletext: "Hello " + firstName + ", click on me to go to the shop!",
            documentTitle: "Typwind | Home",
            homeTitle: "Go to Home",
            lessonsTitle:'Study the lessons',
            exercisesTitle:'Practice more with exercises',
            gamesTitle: 'Practice the fun way with games'
        },
        nl: {
            editlink: "PAS JE PROFIEL AAN",
            logoutlink: "AFMELDEN",
            myStudentNavigationItem: "Home",
            lessonsNavigationItem: "Lessen",
            exercisesNavigationItem: "Oefeningen",
            gamesNavigationItem: "Spellen",
            latestLessonButton: "Laatste les",
            latestExerciseButton: "Laatste oefening",
            homepage_accuracy_text: "Jouw algemene nauwkeurigheid is:",
            bubbletext: "Hallo " + firstName + ", klik op mij om naar de shop te gaan!",
            documentTitle: "Typwind | Thuis",
            homeTitle: "Ga naar Home",
            lessonsTitle:'Studeer de lessen',
            exercisesTitle:'Oefen de lessen',
            gamesTitle: 'Oefen op een leuke manier met spellen'
        }
    }

    let logoutlink = document.querySelector("#logoutlink");
    let myStudentNavigationItem = document.getElementById('Home');
    let lessonsNavigationItem = document.getElementById('Lessons');
    let exercisesNavigationItem = document.getElementById('Exercises');
    let gamesNavigationItem = document.getElementById('Games');
    let latestLessonButton = document.getElementById('latestLessonHome');
    let latestExerciseButton = document.getElementById('latestExerciseHome');
    let homepage_accuracy_text = document.getElementById('homepage_accuracy_text');
    let bubbletext = document.getElementById('bubbletext');

    if(document.title == 'Home'){
        function updatePageText(language) {
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            myStudentNavigationItem.title = data[language].homeTitle;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            lessonsNavigationItem.title = data[language].lessonsTitle;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            exercisesNavigationItem.title = data[language].exercisesTitle;
            gamesNavigationItem.textContent = data[language].gamesNavigationItem;
            gamesNavigationItem.title = data[language].gamesTitle;
            latestLessonButton.textContent = data[language].latestLessonButton;
            latestExerciseButton.textContent = data[language].latestExerciseButton;
            homepage_accuracy_text.textContent = data[language].homepage_accuracy_text;
            bubbletext.textContent = data[language].bubbletext;
            document.title = data[language].documentTitle;
        }

        updatePageText(getActiveLanguage());
    }
    else{
        function updatePageText(language) {
            myStudentNavigationItem.title = data[language].homeTitle;
            lessonsNavigationItem.title = data[language].lessonsTitle;
            exercisesNavigationItem.title = data[language].exercisesTitle;
            gamesNavigationItem.title = data[language].gamesTitle;
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