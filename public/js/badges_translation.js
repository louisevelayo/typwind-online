$(function (){
    // get the active language from a cookie

    let data = {

        en: {
            lessonDone1: "1 lesson done",
            exerciseMade1: "1 exercise made",
            hourTrained1: "1 hour trained",
            pointsEarned10: "10 points earned",
            avatarBought1: "1 avatar bought",
            lessonsDone3: "3 lessonsdone",
            exercisesMade10: "10 exercises made",
            hoursTrained3: "3 hours trained",
            pointsEarned100: "100 points earned",
            avatarsBought3: "3 avatars bought",
            doneLessonsAll: "all lessons done",
            exercisesMade100: "100 exercises made",
            hoursTrained10: "10 hours trained",
            pointsEarned999: "points earned 999",
            avatarsBoughtAll: "all avatars bought"


        },
        nl: {

            lessonDone1: "1 les volbracht",
            exerciseMade1: "1 oefening gemaakt",
            hourTrained1: "1 uur geoefend",
            pointsEarned10: "10 punten behaald",
            avatarBought1: "1 avatar gekocht",
            lessonsDone3: "3 lessen volbracht",
            exercisesMade10: "10 oefeningen gemaakt",
            hoursTrained3: "3 uur geoefend",
            pointsEarned100: "100 punten behaald",
            avatarsBought3: "3 avatars gekocht",
            doneLessonsAll: "alle lessen volbracht",
            exercisesMade100: "100 oefeningen gemaakt",
            hoursTrained10: "10 uur geoefend",
            pointsEarned999: "999 punten behaald",
            avatarsBoughtAll: "alle avatars gekocht"

        }
    }


    let lessonDone1 = document.getElementById("31");
    let exerciseMade1 = document.getElementById("32");
    let hourTrained1 = document.getElementById("33");
    let pointsEarned10 = document.getElementById("34");
    let avatarBought1 = document.getElementById("35");
    let lessonsDone3 = document.getElementById("36");
    let exercisesMade10 = document.getElementById("37");
    let hoursTrained3 = document.getElementById("38");
    let pointsEarned100 = document.getElementById("39");
    let avatarsBought3 = document.getElementById("40");
    let doneLessonsAll = document.getElementById("41");
    let exercisesMade100 = document.getElementById("42");
    let hoursTrained10 = document.getElementById("43");
    let pointsEarned999 = document.getElementById("44");
    let avatarsBoughtAll = document.getElementById("45");


    function updatePageText(language) {
        lessonDone1.textContent = data[language].lessonDone1;
        exerciseMade1.textContent = data[language].exerciseMade1;
        hourTrained1.textContent = data[language].hourTrained1;
        pointsEarned10.textContent = data[language].pointsEarned10;
        avatarBought1.textContent = data[language].avatarBought1;
        lessonsDone3.textContent = data[language].lessonsDone3;
        exercisesMade10.textContent = data[language].exercisesMade10;
        hoursTrained3.textContent = data[language].hoursTrained3;
        pointsEarned100.textContent = data[language].pointsEarned100;
        avatarsBought3.textContent = data[language].avatarsBought3;
        doneLessonsAll.textContent = data[language].doneLessonsAll;
        exercisesMade100.textContent = data[language].exercisesMade100;
        hoursTrained10.textContent = data[language].hoursTrained10;
        pointsEarned999.textContent = data[language].pointsEarned999;
        avatarsBoughtAll.textContent = data[language].avatarsBoughtAll;
    }

    updatePageText(getActiveLanguage());


})