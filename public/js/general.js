$(function (){
    getActiveLanguage();

})

document.addEventListener("mouseup", function(e)
{
    let subMenuWrap = document.getElementById("subMenuWrap")
    if(subMenuWrap){
        var container1 = $("subMenuWrap");

        if (!container1.is(e.target) && container1.has(e.target).length === 0 && subMenuWrap.classList.contains("opensubMenuWrap"))
        {
            closeSideMenu();
            //console.log('0: ' + subMenuWrap.style.display)
        }
        else{
            subMenuWrap.style.display = "none";
        }

    }


});


function openSideMenu() {
    let subMenuWrap = document.getElementById("subMenuWrap")

    if (subMenuWrap.style.display === "none") {
        subMenuWrap.classList.add("opensubMenuWrap")
        subMenuWrap.style.display = "block";
    } else {
        closeSideMenu();
        subMenuWrap.style.display = "none";
    }
    //console.log('1: ' + subMenuWrap.style.display)

}

function closeSideMenu(){
    let subMenuWrap = document.getElementById("subMenuWrap")
    subMenuWrap.classList.remove("opensubMenuWrap")
    //subMenuWrap.style.display = "none";
}

var element;
document.addEventListener("mouseover", function(event) {
    // Get a reference to the element the mouse is on
    element = event.target;
})

function setActiveLanguage(event) {
    let langs = document.querySelector(".langs");
    let link = event.target;
    langs.querySelector(".active").classList.remove("active");
    link.classList.add("active");
    var language = link.getAttribute("lang");
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = "lang=" + language + ";path=/;expires=" + expirationDate.toUTCString();

    location.reload();

}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}



// get the active language from a cookie
function getActiveLanguage() {
    var activeLanguage = getCookie('lang');
    if (!activeLanguage) {
        activeLanguage = 'nl';  // default to English if no language is set
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = "lang=" + activeLanguage + ";path=/;expires=" + expirationDate.toUTCString();
    }

    return activeLanguage;
}


// add a click event listener to each language link
document.addEventListener('DOMContentLoaded', function() {
    let langs = document.querySelector(".langs");
    var languageLinks = document.querySelectorAll('.language');

    // get the active language from the cookie
    var activeLanguage = getActiveLanguage();

    // loop through the language links and set the active language
    languageLinks.forEach(function(link) {
        link.addEventListener('click', setActiveLanguage);
        if (link.getAttribute('lang') == activeLanguage) {
            langs.querySelector(".active").classList.remove("active");
            link.classList.add("active");
        }
    });
});

function togglePassword(passwordInput, invisibleIcon, visibleIcon) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        invisibleIcon.style.display = 'none';
        visibleIcon.style.display  = 'block';
    } else {
        passwordInput.type = "password";
        invisibleIcon.style.display = 'block';
        visibleIcon.style.display  = 'none';
    }
}


