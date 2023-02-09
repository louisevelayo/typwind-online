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
            title: "Lesson",
            title2: "Exercise",
            handTypeRight: "Right handed",
            handTypeLeft: "Left handed",
            handTypeBoth: "Both handed",
            rowType120: "base + upper row",
            rowType112: "base dfghjk + upper row ertyui",
            rowType212: "base qslm + upper row azop",
            rowType30: "lower row",
            rowType312: "lower row wxcvbn,;:=",
            rowType412: "letters and symbols numbersrow",
            documentTitleLessons: "Typwind | Lessons",
            documentTitleExercise: "Typwind | Exercises"

        },
        nl: {
            editlink: "PAS JE PROFIEL AAN",
            logoutlink: "AFMELDEN",
            myStudentNavigationItem: "Home",
            lessonsNavigationItem: "Lessen",
            exercisesNavigationItem: "Oefeningen",
            gamesNavigationItem: "Spellen",
            title: "Les",
            title2: "Oefening",
            handTypeRight: "Rechtshandig",
            handTypeLeft: "Linkshandig",
            handTypeBoth: "Tweehandig",
            rowType120: "basisrij + bovenste rij",
            rowType112: "basisrij dfghjk + bovenste rij ertyui",
            rowType212: "basisrij qslm + bovenste rij azop",
            rowType30: "onderste rij",
            rowType312: "onderste rij wxcvbn,;:=",
            rowType412: "letters en tekens cijferrij",
            documentTitleLessons: "Typwind | Lessen",
            documentTitleExercise: "Typwind | Oefeningen"

        }
    }

    let langs = document.querySelector(".langs");
    let link = document.querySelectorAll(".language");
    let title = document.querySelectorAll('.lessonNumber');
    let title2 = document.querySelectorAll('.exerciseNumber');
    let handTypeRight = document.querySelectorAll('.handType1');
    let handTypeLeft = document.querySelectorAll('.handType0');
    let handTypeBoth = document.querySelectorAll('.handType2');
    let rowType10 = document.querySelectorAll('.rowType10');
    let rowType11 = document.querySelectorAll('.rowType11');
    let rowType12 = document.querySelectorAll('.rowType12');
    let rowType20 = document.querySelectorAll('.rowType20');
    let rowType21 = document.querySelectorAll('.rowType21');
    let rowType22 = document.querySelectorAll('.rowType22');
    let rowType30 = document.querySelectorAll('.rowType30');
    let rowType31 = document.querySelectorAll('.rowType31');
    let rowType32 = document.querySelectorAll('.rowType32');
    let rowType41 = document.querySelectorAll('.rowType41');
    let rowType42 = document.querySelectorAll('.rowType42');

    if(document.title == 'Lessons' || document.title == 'Exercises'){
        let logoutlink = document.querySelector("#logoutlink");
        let myStudentNavigationItem = document.getElementById('Home');
        let lessonsNavigationItem = document.getElementById('Lessons');
        let exercisesNavigationItem = document.getElementById('Exercises');
        let gamesNavigationItem = document.getElementById('Games');
        function updatePageText(language) {
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            gamesNavigationItem.textContent = data[language].gamesNavigationItem;
            if(document.title == 'Lessons'){
                title.forEach(element => {
                    // split the text content into two parts: "Lesson" and the lesson number
                    let text = element.textContent.split(" ");
                    let lesson = text[0];
                    let number = text[1];

                    // translate the "Lesson" text
                    lesson = data[language].title;

                    // concatenate the translated "Lesson" text with the lesson number
                    let translatedText = lesson + " " + number;

                    // update the text content of the element
                    element.textContent = translatedText;
                })
            }
            if(document.title == 'Exercises'){
                title2.forEach(element => {
                    // split the text content into two parts: "Lesson" and the lesson number
                    let text = element.textContent.split(" ");
                    let exercise = text[0];
                    let number = text[1];

                    // translate the "Lesson" text
                    exercise = data[language].title2;

                    // concatenate the translated "Lesson" text with the lesson number
                    let translatedText = exercise + " " + number;

                    // update the text content of the element
                    element.textContent = translatedText;
                })
            }

            handTypeRight.forEach(element => {
                element.textContent = data[language].handTypeRight;
            })
            handTypeLeft.forEach(element => {
                element.textContent = data[language].handTypeLeft;
            })
            handTypeBoth.forEach(element => {
                element.textContent = data[language].handTypeBoth;
            })

            if(rowType10)
                rowType10.forEach(element => {
                    element.textContent = data[language].rowType120;
                })
            if(rowType20)
                rowType20.forEach(element => {
                    element.textContent = data[language].rowType120;
                })
            if(rowType11)
            rowType11.forEach(element => {
                element.textContent = data[language].rowType112;
            })
            if(rowType12)
                rowType12.forEach(element => {
                    element.textContent = data[language].rowType112;
                })
            if(rowType21)
                rowType21.forEach(element => {
                    element.textContent = data[language].rowType212;
                })
            if(rowType22)
                rowType22.forEach(element => {
                    element.textContent = data[language].rowType212;
                })
            if(rowType30)
                rowType30.forEach(element => {
                    element.textContent = data[language].rowType30;
                })
            if(rowType31)
                rowType31.forEach(element => {
                    element.textContent = data[language].rowType312;
                })
            if(rowType32)
                rowType32.forEach(element => {
                    element.textContent = data[language].rowType312;
                })
            if(rowType41)
                rowType41.forEach(element => {
                    element.textContent = data[language].rowType412;
                })
            if(rowType42)
                rowType42.forEach(element => {
                    element.textContent = data[language].rowType412;
                })
            if(document.title == 'Lessons')
                document.title = data[language].documentTitleLessons;
            if(document.title == 'Exercises')
                document.title = data[language].documentTitleExercise;

        }

        updatePageText(getActiveLanguage());
    }


})