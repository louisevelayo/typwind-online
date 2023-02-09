$(function (){
    // get the active language from a cookie

    let data = {

        en: {

            Equip: "Equip",
            Equipped: "Equipped"

        },
        nl: {

            Equip: "Stel in",
            Equipped: "Ingesteld"

        }
    }


    let Equip = document.querySelectorAll(".button.shop-equipe");
    let Equipped = document.querySelectorAll(".button.shop-equiped");



    function updatePageText(language) {
        Equip.forEach(element => {
            element.textContent = data[language].Equip;
        })
        Equipped.forEach(element => {
            element.textContent = data[language].Equipped;
        })

    }

    updatePageText(getActiveLanguage());


})