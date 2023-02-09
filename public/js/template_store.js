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
            shopNavigationItem:"Shop",
            myAvatarsNavigationItem: "My Avatars",
            badgesNavigationItem : "Badges",
            documentTitleShop: "Typwind | Shop",
            documentTitleAvatars: "Typwind | My Avatars",
            documentTitleBadges: "Typwind | Badges",
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
            shopNavigationItem:"Winkel",
            myAvatarsNavigationItem: "Mijn Avatars",
            badgesNavigationItem : "Medailles",
            documentTitleShop: "Typwind | Winkel",
            documentTitleAvatars: "Typwind | Mijn Avatars",
            documentTitleBadges: "Typwind | Medailles",
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
    let shopNavigationItem = document.getElementById('myShop');
    let myAvatarsNavigationItem = document.getElementById('myAvatars');
    let badgesNavigationItem = document.getElementById('myBadges');


    function updatePageText(language) {
        logoutlink.textContent = data[language].logoutlink;
        myStudentNavigationItem.textContent = data[language].myStudentNavigationItem;
        lessonsNavigationItem.textContent = data[language].lessonsNavigationItem;
        exercisesNavigationItem.textContent = data[language].exercisesNavigationItem;
        gamesNavigationItem.textContent = data[language].gamesNavigationItem;
        shopNavigationItem.textContent = data[language].shopNavigationItem;
        myAvatarsNavigationItem.textContent = data[language].myAvatarsNavigationItem;
        badgesNavigationItem.textContent = data[language].badgesNavigationItem;
        myStudentNavigationItem.title = data[language].homeTitle;
        lessonsNavigationItem.title = data[language].lessonsTitle;
        exercisesNavigationItem.title = data[language].exercisesTitle;
        gamesNavigationItem.title = data[language].gamesTitle;
        if(document.title == 'Shop')
            document.title = data[language].documentTitleShop;
        if(document.title == 'My Avatars')
            document.title = data[language].documentTitleAvatars;
        if(document.title == 'Badges')
            document.title = data[language].documentTitleBadges;
    }

    updatePageText(getActiveLanguage());


})


$(document).mouseup(function(e)
{
    let subMenuWrap = document.getElementById("subMenuWrap")
    var container1 = $("subMenuWrap");

    if (!container1.is(e.target) && container1.has(e.target).length === 0 && subMenuWrap.classList.contains("opensubMenuWrap"))
    {
        closeSideMenu();
        //console.log('0: ' + subMenuWrap.style.display)
    }
    else{
        subMenuWrap.style.display = "none";
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








