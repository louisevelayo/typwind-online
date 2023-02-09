$(function (){
    // get the active language from a cookie



    let langs = document.querySelector(".langs");
    let link = document.querySelectorAll(".language");
    let logoutlink = document.querySelector("#logoutlink");
    let myStudentNavigationItem = document.getElementById('Home');
    let lessonsNavigationItem = document.getElementById('Lessons');
    let exercisesNavigationItem = document.getElementById('Exercises');
    let gamesNavigationItem = document.getElementById('Games');
    let descriptionGame1 = document.querySelector("#gameDescription1");
    let descriptionGame2 = document.querySelector("#gameDescription2");
    let descriptionGame3 = document.querySelector("#gameDescription3");
    let descriptionGame4 = document.querySelector("#gameDescription4");
    let descriptionDifficulty1 = document.querySelector("#gameDifficulty1");
    let descriptionDifficulty2 = document.querySelector("#gameDifficulty2");
    let descriptionDifficulty3 = document.querySelector("#gameDifficulty3");
    let descriptionDifficulty4 = document.querySelector("#gameDifficulty4");

    if(document.title == 'Games'){
        let data = {
            en: {
                editlink: "EDIT YOUR PROFILE",
                logoutlink: "LOG OUT",
                myStudentNavigationItem: "Home",
                lessonsNavigationItem: "Lessons",
                exercisesNavigationItem: "Exercises",
                gamesNavigationItem: "Games",
                descriptionGame1: "Jump your way up by typing!",
                descriptionGame3: "Slice the fruit like a real keyboard warrior!",
                descriptionGame2: "Shoot the balloons with your keyboard skills!",
                descriptionGame4: "Type along on the fair!",
                gameDifficultyMedium: "Difficulty: Medium",
                gameDifficultyHard: "Difficulty: Hard",
                documentTitle: "Typwind | Games"
            },
            nl: {
                editlink: "PAS JE PROFIEL AAN",
                logoutlink: "AFMELDEN",
                myStudentNavigationItem: "Home",
                lessonsNavigationItem: "Lessen",
                exercisesNavigationItem: "Oefeningen",
                gamesNavigationItem: "Spellen",
                descriptionGame1: "Spring naar boven door correct te typen!",
                descriptionGame3: "Snij fruit als een echte toetsenbord ninja!",
                descriptionGame2: "Schiet de ballonnen met je type skills!",
                descriptionGame4: "Typen op de kermis!",
                gameDifficultyMedium: "Moeilijkheid: Gemiddeld",
                gameDifficultyHard: "Moeilijkheid: Moeilijk",
                documentTitle: "Typwind | Spellen"

            }
        }

        function updatePageText(language) {
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            gamesNavigationItem.textContent = data[language].gamesNavigationItem;
            descriptionGame1.textContent = data[language].descriptionGame1;
            descriptionGame2.textContent = data[language].descriptionGame2;
            descriptionGame3.textContent = data[language].descriptionGame3;
            descriptionGame4.textContent = data[language].descriptionGame4;
            descriptionDifficulty1.textContent = data[language].gameDifficultyMedium;
            descriptionDifficulty2.textContent = data[language].gameDifficultyMedium;
            descriptionDifficulty3.textContent = data[language].gameDifficultyHard;
            descriptionDifficulty4.textContent = data[language].gameDifficultyHard;
            document.title = data[language].documentTitle;


        }

        updatePageText(getActiveLanguage());
    }

})