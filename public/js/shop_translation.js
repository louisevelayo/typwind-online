$(function (){

    let data = {

            en: {

                Owned: "Owned",
                Buy: "Buy",
                NBuy: "Buy"

            },
            nl: {

                Owned: "Gekocht",
                Buy: "Koop",
                NBuy: "Koop"

            }
        }


    let Owned = document.querySelectorAll(".button.shop-owned");
    let Buy = document.querySelectorAll(".button.shop-buy");
    let NBuy = document.querySelectorAll(".button.shop-Nbuy");



    function updatePageText(language) {
        Owned.forEach(element => {
            element.textContent = data[language].Owned;
        })
        Buy.forEach(element => {
            element.textContent = data[language].Buy;
        })
        NBuy.forEach(element => {
            element.textContent = data[language].NBuy;
        })

    }

    updatePageText(getActiveLanguage());


})