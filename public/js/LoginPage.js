$(function (){
    // get the active language from a cookie




    let welcome =  document.getElementById('welcome');
    let choose =  document.getElementById('choose');

    if(welcome && choose){
        let data = {
            en: {
                welcome: "Welcome on Typwind",
                choose: "Who are you?",
                documentTitle: "Typwind | Welcome"

            },
            nl: {
                welcome: "Welkom bij Typwind",
                choose: "Wie ben je?",
                documentTitle: "Typwind | Welkom"

            }
        }

        function updatePageText(language) {
            welcome.textContent = data[language].welcome;
            choose.textContent = data[language].choose;
            document.title = data[language].documentTitle;

        }

        updatePageText(getActiveLanguage());
    }




})



