$(function (){

    let data = {

        en: {

            Done: "WELL DONE!",
            earned: "You earned 20",
            next: "NEXT",
            master: "YOU ARE A MASTER AT THESE LETTERS:",
            attention:"THESE LETTERS REQUIRE ATTENTION:",
            myStudentNavigationItem: "Home",
            lessonsNavigationItem: "Lessons",
            exercisesNavigationItem: "Exercises",
            gamesNavigationItem: "Games"

        },
        nl: {

            Done: "GOED GEDAAN!",
            earned: "Je verdient 20",
            next: "VOLGENDE",
            master:"JE BENT ZEER GOED IN DEZE LETTERS:",
            attention:"DEZE LETTERS HEBBEN EXTRA AANDACHT NODIG:",
            myStudentNavigationItem: "Thuis",
            lessonsNavigationItem: "Lessen",
            exercisesNavigationItem: "Oefeningen",
            gamesNavigationItem: "Spellen"

        }
    }


    let myStudentNavigationItem = document.getElementById('Home');
    let lessonsNavigationItem = document.getElementById('Lessons');
    let exercisesNavigationItem = document.getElementById('Exercises');
    let gamesNavigationItem = document.getElementById('Games');
    let Done = document.getElementById('box');
    let earned = document.getElementById('box2');
    let next = document.getElementById("next_text");

    let master = document.getElementById('best_worst_letters_text');
    let attention = document.getElementById('best_worst_letters_text2');



    function updatePageText(language) {
        myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
        lessonsNavigationItem.textContent = data[language].lessonsNavigationItem
        gamesNavigationItem.textContent = data[language].gamesNavigationItem;
        Done.textContent = data[language].Done;
        earned.textContent = data[language].earned;
        next.textContent = data[language].next;
        master.textContent = data[language].master;
        attention.textContent = data[language].attention;


    }

    updatePageText(getActiveLanguage());


})