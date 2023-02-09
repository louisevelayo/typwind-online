//const btn = document.getElementById('btn123');
const base_url = window.location.origin;
var buy_avatar_sound = new Audio('../sounds/buy_avatar_cut.mp3');
var equipe_avatar_sound = new Audio('../sounds/equipe_avatar_cut.mp3');

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

function tryBuyingAvatar(itemID){
    var loggedUser = check_cookie_name("LoggedUser");
    var loggedUserDecoded = decodeURIComponent(loggedUser);
    var loggedUserObject = JSON.parse(loggedUserDecoded);
    var studentID = loggedUserObject['user']['studentID'];

    // check if enough balance
    fetch('../TypwindController/check_balance/' + studentID + '/' + itemID)
        .then(resp => resp.json())
        .then(myJson => JSON.parse(myJson))
        .then(myData => buyAvatar(studentID, itemID, myData))
        .catch(a => console.log(a));
}

function buyAvatar(studentID, itemID, canBuyAvatar){
    if(canBuyAvatar === true){

        fetch('../TypwindController/student_buys_avatar/' + studentID +'/' + itemID)
            .then(() => {
                // Wait 0.5 seconds (500 milliseconds) before refreshing the page
                setTimeout(() => {
                    window.location.reload();
                }, 200);
            })     // refresh page so balance and buy button updates
            .catch(a => console.log(a));
        buy_avatar_sound.play();
    } else{
        // show message
        console.log("cannot afford");
    }
}


function equipAvatar(itemID){
    var loggedUser = check_cookie_name("LoggedUser");
    var loggedUserDecoded = decodeURIComponent(loggedUser);
    var loggedUserObject = JSON.parse(loggedUserDecoded);
    var studentID = loggedUserObject['user']['studentID'];
    equipe_avatar_sound.play();
    fetch('../TypwindController/student_equips_avatar/' + studentID + '/' + itemID)
        .then(resp => resp.json())
        .then(myJson => JSON.parse(myJson))
        .then(window.location.reload())
        .catch(a => console.log(a));
}

/*
const btn2 = document.getElementById('btn321');
const button2Text = btn2.textContent;


// Change button text on click
btn.addEventListener('click', function handleClick() {
    btn.innerHTML=`<span style="background-color: #1F96D1">Owned<span>`;
    btn.style.backgroundColor = '#1F96D1';
});


btn2.addEventListener('click', function handleClick(){
    if(button2Text === "Equip"){
        btn2.innerHTML=`<span style="background-color: #154E99">Equiped<span>`;
        btn2.style.backgroundColor = '#154E99';
    }
});
*/

/*
btn.addEventListener('click', function handleClick() {
    var studentID = 4;  // needs to come from cookies
    var itemID = 4;     // need to link right itemID to the right button

    // check if enough balance
    fetch(base_url+"/a22ux04/public/TypwindController/check_balance/" + studentID + "/" + itemID)
        .then(resp => resp.json())
        .then(myJson => JSON.parse(myJson))
        .then(myData => buyAvatar(studentID, itemID, myData))
        .catch(a => console.log(a));
}); */




