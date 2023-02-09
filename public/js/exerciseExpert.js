
$(function () {
    let exerciseSearch = document.querySelector('.exercisePageSearch');
    let exerciseSearchIcon = document.querySelector('.exercisePageSearchIcon');
    let clearButton = document.querySelector('.exercisePageSearchClear');
    // Get the search input and the list of lessons
    const searchInput = document.getElementById('mysearchExercise');
    const exerciseList = document.getElementById('scrollable_expert_overviews');

    if(document.title == 'Exercises') {
        exerciseSearchIcon.onclick = function () {
            exerciseSearch.classList.toggle('active');
        }



// Add an event listener for changes in the search input
        searchInput.addEventListener('input', function () {
            // Get the search query
            const searchQuery = this.value.toLowerCase();

            // Loop through the list of lessons
            for (let exercise of exerciseList.children) {
                // Get the lesson title and description
                const title = exercise.querySelector('.exerciseNumber').textContent;
                const handDescription = exercise.querySelector('[class^=handType]').textContent;
                const rowDescription = exercise.querySelector('[class^=rowType]').textContent;

                var input = title + ' ' + handDescription.replace(':', '') + ' ' + rowDescription;

                // Check if the search query is present in the lesson title or description
                if (input.toLowerCase().includes(searchQuery)) {
                    // If it is, show the lesson
                    exercise.style.display = 'block';
                } else {
                    // If it isn't, hide the lesson
                    exercise.style.display = 'none';
                }
            }
        });

        clearButton.addEventListener('click', function () {
            // Clear the search input
            searchInput.value = '';

            // Show all the lessons
            for (let lesson of exerciseList.children) {
                lesson.style.display = 'block';
            }
        });


        let data = {
            en: {
                editlink: "EDIT YOUR PROFILE",
                logoutlink: "LOG OUT",
                myStudentNavigationItem: "My Students",
                lessonsNavigationItem: "Lessons",
                exercisesNavigationItem: "Exercises",
                title: "Exercise",
                viewButton: "View",
                exerciseSearchPlaceholder: "Search Exercises",
                handTypeRight: "Right handed",
                handTypeLeft: "Left handed",
                handTypeBoth: "Both handed",
                rowType120: "base + upper row",
                rowType112: "base dfghjk + upper row ertyui",
                rowType212: "base qslm + upper row azop",
                rowType30: "lower row",
                rowType312: "lower row wxcvbn,;:=",
                rowType412: "letters and symbols numbersrow",
                contentText: "Content :",
                documentTitle: "Typwind | Exercises",
                MyStudentsTitle: "Go to My Students overview",
                LessonsTitle: "Go to the Lessons",
                ExercisesTitle: "Go to the Exercises"
            },
            nl: {
                editlink: "PAS JE PROFIEL AAN",
                logoutlink: "AFMELDEN",
                myStudentNavigationItem: "Mijn Studenten",
                lessonsNavigationItem: "Lessen",
                exercisesNavigationItem: "Oefeningen",
                title: "Oefening",
                viewButton: "Zien",
                exerciseSearchPlaceholder: "Zoek Oefeningen",
                handTypeRight: "Rechtshandig",
                handTypeLeft: "Linkshandig",
                handTypeBoth: "Tweehandig",
                rowType120: "basisrij + bovenste rij",
                rowType112: "basisrij dfghjk + bovenste rij ertyui",
                rowType212: "basisrij qslm + bovenste rij azop",
                rowType30: "onderste rij",
                rowType312: "onderste rij wxcvbn,;:=",
                rowType412: "letters en tekens cijferrij",
                contentText: "Inhoud :",
                documentTitle: "Typwind | Oefeningen",
                MyStudentsTitle: "Ga naar mijn studenten overzicht",
                LessonsTitle: "Bekijk de lessen",
                ExercisesTitle: "Bekijk de oefeningen"

            }
        }

        let langs = document.querySelector(".langs");
        let link = document.querySelectorAll(".language");
        let editlink = document.querySelector("#editlink");
        let logoutlink = document.querySelector("#logoutlink");
        let myStudentNavigationItem = document.getElementById('My_Students');
        let lessonsNavigationItem = document.getElementById('Lessons');
        let exercisesNavigationItem = document.getElementById('Exercises');
        let title = document.querySelectorAll('.exerciseNumber');
        let inputExercise = document.getElementById('mysearchExercise');
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
        let rowType40 = document.querySelectorAll('.rowType40');
        let rowType41 = document.querySelectorAll('.rowType41');
        let rowType42 = document.querySelectorAll('.rowType42');
        let contentText = document.querySelectorAll('.contentText');


        function updatePageText(language) {

            editlink.textContent = data[language].editlink;
            logoutlink.textContent = data[language].logoutlink;
            myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
            lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
            exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
            myStudentNavigationItem.title = data[language].MyStudentsTitle;
            lessonsNavigationItem.title = data[language].LessonsTitle;
            exercisesNavigationItem.title = data[language].ExercisesTitle;

            title.forEach(element => {
                // split the text content into two parts: "Lesson" and the lesson number
                let text = element.textContent.split(" ");
                let exercise = text[0];
                let number = text[1];

                // translate the "Lesson" text
                exercise = data[language].title;

                // concatenate the translated "Lesson" text with the lesson number
                let translatedText = exercise + " " + number;

                // update the text content of the element
                element.textContent = translatedText;

            })
            inputExercise.placeholder = data[language].exerciseSearchPlaceholder;
            handTypeRight.forEach(element => {
                element.textContent = data[language].handTypeRight;
            })
            handTypeLeft.forEach(element => {
                element.textContent = data[language].handTypeLeft;
            })
            handTypeBoth.forEach(element => {
                element.textContent = data[language].handTypeBoth;
            })
            rowType10.forEach(element => {
                element.textContent = data[language].rowType120;
            })
            rowType20.forEach(element => {
                element.textContent = data[language].rowType120;
            })
            rowType11.forEach(element => {
                element.textContent = data[language].rowType112;
            })
            rowType12.forEach(element => {
                element.textContent = data[language].rowType112;
            })
            rowType21.forEach(element => {
                element.textContent = data[language].rowType212;
            })
            rowType22.forEach(element => {
                element.textContent = data[language].rowType212;
            })
            rowType30.forEach(element => {
                element.textContent = data[language].rowType30;
            })
            rowType31.forEach(element => {
                element.textContent = data[language].rowType312;
            })
            rowType32.forEach(element => {
                element.textContent = data[language].rowType312;
            })
            rowType40.forEach(element => {
                element.textContent = data[language].rowType412;
            })
            rowType41.forEach(element => {
                element.textContent = data[language].rowType412;
            })
            rowType42.forEach(element => {
                element.textContent = data[language].rowType412;
            })
            contentText.forEach(element => {
                element.textContent = data[language].contentText;
            })
            document.title = data[language].documentTitle;
        }

        updatePageText(getActiveLanguage());
    }


})
