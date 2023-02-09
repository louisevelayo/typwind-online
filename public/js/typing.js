var lessonContentPlaceholder;
var validCharacters;
var correctKeys = {};
var totalKeys = {};
var wordsFromDb;
var wordsCount;
var randomGenWords = [];
var words;
var timer = 0;
var currentWordIndex;
var toLoad;
var speechBubble = document.getElementById('progress-speech-div');
var zero = 0;
var quarter = 0;
var half = 0;
var threeQuarters = 0;
var hideImageFlag = 0;
var hideHandFlag = 0;
var volumeOffFlag = 0;
var cookieName;
const specialCharCodeArray = [38, 8220, 8221, 8216, 8217];
var correctSound = new Audio('../sounds/correct_cut2.mp3');
correctSound.playbackRate=1.25;
var incorrectSound = new Audio('../sounds/wrong_cut2.mp3');
correctSound.playbackRate=1.5;

// INITIALIZING LETTER IMAGE MAP
const letterImageMap = new Map();
letterImageMap.set('a', "../icons/letter_images/a.jpg");
letterImageMap.set('z', "../icons/letter_images/z.jpg");
letterImageMap.set('e', "../icons/letter_images/e.jpg");
letterImageMap.set('r', "../icons/letter_images/r.jpg");
letterImageMap.set('t', "../icons/letter_images/t.jpg");
letterImageMap.set('y', "../icons/letter_images/y.jpg");
letterImageMap.set('u', "../icons/letter_images/u.jpg");
letterImageMap.set('i', "../icons/letter_images/i.jpg");
letterImageMap.set('o', "../icons/letter_images/o.jpg");
letterImageMap.set('p', "../icons/letter_images/p.jpg");
letterImageMap.set('q', "../icons/letter_images/q.jpg");
letterImageMap.set('s', "../icons/letter_images/s.jpg");
letterImageMap.set('d', "../icons/letter_images/d.jpg");
letterImageMap.set('f', "../icons/letter_images/f.jpg");
letterImageMap.set('g', "../icons/letter_images/g.jpg");
letterImageMap.set('h', "../icons/letter_images/h.jpg");
letterImageMap.set('j', "../icons/letter_images/j.jpg");
letterImageMap.set('k', "../icons/letter_images/k.jpg");
letterImageMap.set('l', "../icons/letter_images/l.jpg");
letterImageMap.set('m', "../icons/letter_images/m.jpg");
letterImageMap.set('w', "../icons/letter_images/w.jpg");
letterImageMap.set('x', "../icons/letter_images/x.jpg");
letterImageMap.set('c', "../icons/letter_images/c.jpg");
letterImageMap.set('v', "../icons/letter_images/v.jpg");
letterImageMap.set('b', "../icons/letter_images/b.jpg");
letterImageMap.set('n', "../icons/letter_images/n.jpg");
letterImageMap.set(',', "../icons/letter_images/comma.jpg");
letterImageMap.set(';', "../icons/letter_images/;.jpg");
letterImageMap.set(':', "../icons/letter_images/colon.jpg");
letterImageMap.set('=', "../icons/letter_images/=.jpg");
letterImageMap.set('&', "../icons/letter_images/&.jpg");
letterImageMap.set('é', "../icons/letter_images/é.jpg");
letterImageMap.set('"', '../icons/letter_images/double_quote.jpg');
letterImageMap.set("'", "../icons/letter_images/single_quote.jpg");
letterImageMap.set('(', "../icons/letter_images/open_bracket.jpg");
letterImageMap.set('§', "../icons/letter_images/§.jpg");
letterImageMap.set('è', "../icons/letter_images/è.jpg");
letterImageMap.set('!', "../icons/letter_images/!.jpg");
letterImageMap.set('ç', "../icons/letter_images/ç.jpg");
letterImageMap.set('à', "../icons/letter_images/à.jpg");
letterImageMap.set(')', "../icons/letter_images/).jpg");

// INITIALIZING TWO HAND MAP
const twoHandsMap = new Map();
twoHandsMap.set('a', "../icons/hand_images/two_left_pinky.jpg");
twoHandsMap.set('z', "../icons/hand_images/two_left_ring.jpg");
twoHandsMap.set('e', "../icons/hand_images/two_left_middle.jpg");
twoHandsMap.set('r', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('t', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('y', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('u', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('i', "../icons/hand_images/two_right_middle.jpg");
twoHandsMap.set('o', "../icons/hand_images/two_right_ring.jpg");
twoHandsMap.set('p', "../icons/hand_images/two_right_pinky.jpg");
twoHandsMap.set('q', "../icons/hand_images/two_left_pinky.jpg");
twoHandsMap.set('s', "../icons/hand_images/two_left_ring.jpg");
twoHandsMap.set('d', "../icons/hand_images/two_left_middle.jpg");
twoHandsMap.set('f', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('g', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('h', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('j', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('k', "../icons/hand_images/two_left_middle.jpg");
twoHandsMap.set('l', "../icons/hand_images/two_right_ring.jpg");
twoHandsMap.set('m', "../icons/hand_images/two_right_pinky.jpg");
twoHandsMap.set('w', "../icons/hand_images/two_left_pinky.jpg");
twoHandsMap.set('x', "../icons/hand_images/two_left_ring.jpg");
twoHandsMap.set('c', "../icons/hand_images/two_left_middle.jpg");
twoHandsMap.set('v', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('b', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('n', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set(',', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set(';', "../icons/hand_images/two_left_middle.jpg.jpg");
twoHandsMap.set(':', "../icons/hand_images/two_right_ring.jpg");
twoHandsMap.set('=', "../icons/hand_images/two_right_pinky.jpg");
twoHandsMap.set('&', "../icons/hand_images/two_left_pinky.jpg");
twoHandsMap.set('é', "../icons/hand_images/two_left_pinky.jpg");
twoHandsMap.set('"', '../icons/hand_images/two_left_ring.jpg');
twoHandsMap.set("'", "../icons/hand_images/two_left_middle.jpg");
twoHandsMap.set('(', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('§', "../icons/hand_images/two_left_index.jpg");
twoHandsMap.set('è', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('!', "../icons/hand_images/two_right_index.jpg");
twoHandsMap.set('ç', "../icons/hand_images/two_right_middle.jpg");
twoHandsMap.set('à', "../icons/hand_images/two_right_ring.jpg");
twoHandsMap.set(')', "../icons/hand_images/two_right_pinky.jpg");


// INITIALIZING LEFT HAND MAP
const leftHandMap = new Map();
leftHandMap.set('a', "../icons/hand_images/left_pinky_blue.jpg");
leftHandMap.set('z', "../icons/hand_images/left_pinky_yellow.jpg");
leftHandMap.set('e', "../icons/hand_images/left_pinky_green.jpg");
leftHandMap.set('r', "../icons/hand_images/left_pinky_red.jpg");
leftHandMap.set('t', "../icons/hand_images/left_ring_red.jpg");
leftHandMap.set('y', "../icons/hand_images/left_middle_red.jpg");
leftHandMap.set('u', "../icons/hand_images/left_index_red.jpg");
leftHandMap.set('i', "../icons/hand_images/left_index_green.jpg");
leftHandMap.set('o', "../icons/hand_images/left_index_yellow.jpg");
leftHandMap.set('p', "../icons/hand_images/left_index_blue.jpg");
leftHandMap.set('q', "../icons/hand_images/left_pinky_blue.jpg");
leftHandMap.set('s', "../icons/hand_images/left_pinky_yellow.jpg");
leftHandMap.set('d', "../icons/hand_images/left_pinky_green.jpg");
leftHandMap.set('f', "../icons/hand_images/left_pinky_red.jpg");
leftHandMap.set('g', "../icons/hand_images/left_ring_red.jpg");
leftHandMap.set('h', "../icons/hand_images/left_middle_red.jpg");
leftHandMap.set('j', "../icons/hand_images/left_index_red.jpg");
leftHandMap.set('k', "../icons/hand_images/left_index_green.jpg");
leftHandMap.set('l', "../icons/hand_images/left_index_yellow.jpg");
leftHandMap.set('m', "../icons/hand_images/left_index_blue.jpg");
leftHandMap.set('w', "../icons/hand_images/left_pinky_blue.jpg");
leftHandMap.set('x', "../icons/hand_images/left_pinky_yellow.jpg");
leftHandMap.set('c', "../icons/hand_images/left_pinky_green.jpg");
leftHandMap.set('v', "../icons/hand_images/left_pinky_red.jpg");
leftHandMap.set('b', "../icons/hand_images/left_ring_red.jpg");
leftHandMap.set('n', "../icons/hand_images/left_middle_red.jpg");
leftHandMap.set(',', "../icons/hand_images/left_index_red.jpg");
leftHandMap.set(';', "../icons/hand_images/left_index_green.jpg");
leftHandMap.set(':', "../icons/hand_images/left_index_yellow.jpg");
leftHandMap.set('=', "../icons/hand_images/left_index_blue.jpg");
leftHandMap.set('&', "../icons/hand_images/left_pinky_blue.jpg");
leftHandMap.set('é', "../icons/hand_images/left_pinky_blue.jpg");
leftHandMap.set('"', '../icons/hand_images/left_pinky_yellow.jpg');
leftHandMap.set("'", "../icons/hand_images/left_pinky_green.jpg");
leftHandMap.set('(', "../icons/hand_images/left_pinky_red.jpg");
leftHandMap.set('§', "../icons/hand_images/left_ring_red.jpg");
leftHandMap.set('è', "../icons/hand_images/left_middle_red.jpg");
leftHandMap.set('!', "../icons/hand_images/left_index_red.jpg");
leftHandMap.set('ç', "../icons/hand_images/left_index_green.jpg");
leftHandMap.set('à', "../icons/hand_images/left_index_yellow.jpg");
leftHandMap.set(')', "../icons/hand_images/left_index_blue.jpg");

// INITIALIZING RIGHT HAND MAP
const rightHandMap = new Map();
rightHandMap.set('a', "../icons/hand_images/right_index_blue.jpg");
rightHandMap.set('z', "../icons/hand_images/right_index_yellow.jpg");
rightHandMap.set('e', "../icons/hand_images/right_index_green.jpg");
rightHandMap.set('r', "../icons/hand_images/right_index_red.jpg");
rightHandMap.set('t', "../icons/hand_images/right_middle_red.jpg");
rightHandMap.set('y', "../icons/hand_images/right_ring_red.jpg");
rightHandMap.set('u', "../icons/hand_images/right_pinky_red.jpg");
rightHandMap.set('i', "../icons/hand_images/right_pinky_green.jpg");
rightHandMap.set('o', "../icons/hand_images/right_pinky_yellow.jpg");
rightHandMap.set('p', "../icons/hand_images/right_pinky_blue.jpg");
rightHandMap.set('q', "../icons/hand_images/right_index_blue.jpg");
rightHandMap.set('s', "../icons/hand_images/right_index_yellow.jpg");
rightHandMap.set('d', "../icons/hand_images/right_index_green.jpg");
rightHandMap.set('f', "../icons/hand_images/right_index_red.jpg");
rightHandMap.set('g', "../icons/hand_images/right_middle_red.jpg");
rightHandMap.set('h', "../icons/hand_images/right_ring_red.jpg");
rightHandMap.set('j', "../icons/hand_images/right_pinky_red.jpg");
rightHandMap.set('k', "../icons/hand_images/right_pinky_green.jpg");
rightHandMap.set('l', "../icons/hand_images/right_pinky_yellow.jpg");
rightHandMap.set('m', "../icons/hand_images/right_pinky_blue.jpg");
rightHandMap.set('w', "../icons/hand_images/right_index_blue.jpg");
rightHandMap.set('x', "../icons/hand_images/right_index_yellow.jpg");
rightHandMap.set('c', "../icons/hand_images/right_index_green.jpg");
rightHandMap.set('v', "../icons/hand_images/right_index_red.jpg");
rightHandMap.set('b', "../icons/hand_images/right_middle_red.jpg");
rightHandMap.set('n', "../icons/hand_images/right_ring_red.jpg");
rightHandMap.set(',', "../icons/hand_images/right_pinky_red.jpg");
rightHandMap.set(';', "../icons/hand_images/right_pinky_green.jpg");
rightHandMap.set(':', "../icons/hand_images/right_pinky_yellow.jpg");
rightHandMap.set('=', "../icons/hand_images/right_pinky_blue.jpg");
rightHandMap.set('&', "../icons/hand_images/right_index_blue.jpg");
rightHandMap.set('é', "../icons/hand_images/right_index_blue.jpg");
rightHandMap.set('"', '../icons/hand_images/right_index_yellow.jpg');
rightHandMap.set("'", "../icons/hand_images/right_index_green.jpg");
rightHandMap.set('(', "../icons/hand_images/right_index_red.jpg");
rightHandMap.set('§', "../icons/hand_images/right_middle_red.jpg");
rightHandMap.set('è', "../icons/hand_images/right_ring_red.jpg");
rightHandMap.set('!', "../icons/hand_images/right_pinky_red.jpg");
rightHandMap.set('ç', "../icons/hand_images/right_pinky_green.jpg");
rightHandMap.set('à', "../icons/hand_images/right_pinky_yellow.jpg");
rightHandMap.set(')', "../icons/hand_images/right_pinky_blue.jpg");

export function getSiblingLetter(){
    try{
        var nextKey = document.querySelector('.letter.current').nextSibling.innerHTML;
    } catch (e) {
        var nextKey = 'space';
    } finally {
        var charCode = nextKey.charCodeAt(0);
        if(specialCharCodeArray.indexOf(charCode)!==-1){
            nextKey = keyAtCharCode(charCode);
        }
        getLetterImage(nextKey);
        getHandImage(nextKey);
        return nextKey;
    }

}

export function getCurrentLetter(){
    try{
        var currKey = document.querySelector('.letter.current').innerHTML;
    } catch (e) {
        var currKey = 'space';
    } finally {
        var charCode = currKey.charCodeAt(0);
        if(specialCharCodeArray.indexOf(charCode)!==-1){
            currKey = keyAtCharCode(charCode);
        }
        getLetterImage(currKey);
        getHandImage(currKey);
        return currKey;
    }

}

export function getCurrentWordFirstLetter(){
    var currWord = document.querySelector('.word.current');
    var firstLetter = currWord.firstElementChild.innerHTML;
    var charCode = firstLetter.charCodeAt(0);
    if(specialCharCodeArray.indexOf(charCode)!==-1){
        firstLetter = keyAtCharCode(charCode);
    }
    getLetterImage(firstLetter);
    getHandImage(firstLetter);
    return firstLetter;
}

import{setActiveInitial, firstLetterOfWord, keyPressed, keyPressedCode} from './keyboard.js'

var saveButton = document.getElementById("newGameBtn");

saveButton.addEventListener("click", function(){
    saveProgress();
    saveButton.blur();
    goToRewards(false);
});

function keyAtCharCode(charCode){
    switch(charCode){
        case 38:
            return("&");
        case 8220:
            return ('"');
        case 8221:
            return ('"');
        case 8216:
            return ("'");
        case 8217:
            return ("'");
        }
}


function start(){
    toLoad = getLoadForTyping();
    getCharacters();
}

function getLessonContent() {
    fetch("../TypwindController/exercise_typing?data=lc")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => lessonContentArrived(myData))
        .catch(a => console.log(a))
}

function getCharacters(){
    fetch("../TypwindController/exercise_typing?data=char")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => charactersArrived(myData))
        .catch(a => console.log(a))
}

function lessonContentArrived(data){
    wordsFromDb = data;
    wordsFromDb = wordsFromDb.map(word => word.replace(/\./g,'').toLowerCase()); // remove dots and convert to lower case
    wordsCount = wordsFromDb.length;
    newLesson();
    setActiveInitial();

    // function repeats every second
    setInterval(function (){
        timer++;
    },1000);
}

function getExerciseContent() {
    fetch("../TypwindController/exercise_typing?data=ec")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => exerciseContentArrived(myData))
        .catch(a => console.log(a))
}

function exerciseContentArrived(data){
    wordsFromDb = data;
    wordsFromDb = wordsFromDb.map(word => word.replace(/\./g,'').toLowerCase());
    wordsCount = wordsFromDb.length;
    newExercise();
    setActiveInitial();

    // function repeats every second
    setInterval(function (){
        timer++;
    },1000);
}

function charactersArrived(data){
    validCharacters = data;
    // initialise correctKeys and totalKeys array
    for (var character of validCharacters) {
        totalKeys[character] = 0;
    }
    for (var character of validCharacters) {
        correctKeys[character] = 0;
    }

    if(toLoad == 'lesson'){
        getSavedProgress();
        getLessonContent();

    } else{
        getSavedProgress();
        getExerciseContent();
    }

}

function addClass(el,name) {
    el.className += ' '+name;
}
function removeClass(el,name) {
    el.className = el.className.replace(name,'');
}

//To randomize words. Not needed.
function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex - 1];
}

export function isValidKey(key){
    if(validCharacters.includes(key) && key!="Shift"){
        return true;
    }else{
        return false;
    }
}

function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newLesson() {
    document.getElementById('words').innerHTML = ''; //resets the div to an empty div.
    words = wordsFromDb;
    document.getElementById('words').innerHTML = formatWord(words[currentWordIndex]);
    addClass(document.querySelector(".word"), "current");
    addClass(document.querySelector(".letter"), "current");
    const nextLetter = document.querySelector('.letter.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = nextLetter.getBoundingClientRect().top + 6 + 'px';
    cursor.style.left = nextLetter.getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    updateProgressBar(currentWordIndex);
}


function newExercise() {
    document.getElementById('words').innerHTML = ''; //resets the div to an empty div.
    exerciseBuilder();
    words = randomGenWords[0].explode('-',5);
    document.getElementById('words').innerHTML = formatWord(words[currentWordIndex]);
    addClass(document.querySelector(".word"), "current");
    addClass(document.querySelector(".letter"), "current");
    const nextLetter = document.querySelector('.letter.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = nextLetter.getBoundingClientRect().top + 6 + 'px';
    cursor.style.left = nextLetter.getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    updateProgressBar(currentWordIndex);
}

function goToRewards(completed){
    correctKeys = replaceSpace(correctKeys);
    totalKeys = replaceSpace(totalKeys);

    // best and worst letters
    var accuracies = {};
    for (var key in correctKeys) {
        var correct = correctKeys[key];
        var total = totalKeys[key];
        if (total !== 0) {
            accuracies[key] = correct / total;
        }
    }

    // sort accuracies in descending order (best letters)
    var bestKeys = Object.keys(accuracies).sort((a, b) => accuracies[b] - accuracies[a]).slice(0, 3);
    // sort accuracies in ascending order (worst letters)
    var worstKeys = Object.keys(accuracies).filter(key => !bestKeys.includes(key)).sort((a, b) => accuracies[a] - accuracies[b]).slice(0, 3);
    // worstKeys = Object.keys(accuracies).filter(key => accuracies[key] != 1);
    // to uppercase (looks nicer in the buttons)
    bestKeys = bestKeys.map(word => word.toUpperCase());
    worstKeys = worstKeys.map(word => word.toUpperCase());

    var searchParams = "bk1="+bestKeys[0]+"&bk2="+bestKeys[1]+"&bk3="+bestKeys[2]+"&wk1="+worstKeys[0]+"&wk2="+worstKeys[1]+"&wk3="+worstKeys[2];

    // send stats to db
    var correctKeysJSON = encodeURIComponent(JSON.stringify(correctKeys));
    var totalKeysJSON = encodeURIComponent(JSON.stringify(totalKeys));
    fetch('../TypwindController/send_typing_stats/'+Math.ceil(timer/60)+'/'+correctKeysJSON+'/'+totalKeysJSON+'/'+encodeURIComponent(JSON.stringify(completed)))
        .catch(a => console.log(a))
        .finally(()=> {
            if(completed){
                window.location.href = "../TypwindController/reward_page?"+searchParams
            }else{
                window.location.href = "../TypwindController/home";
            }
        });
}

function replaceSpace(data){
    var newData = {};
    Object.keys(data).forEach(char => {
        var newChar = char.replace(' ', 'space');
        newData[newChar] = data[char];
    });
    return newData;
}

function exerciseBuilder(){
    for(let y = 0; y < 5; y++){
        if(y==0){
            var startOfWord = generateRandomWord(wordsFromDb, 5);
            randomGenWords.push(startOfWord);
        } else{
            var startOfNextWord = "-"+generateRandomWord(wordsFromDb, 5);
            randomGenWords[0]+=startOfNextWord;
        }
        for(let i = 0; i < 5; i++){
            let x = Math.floor((Math.random() * 6) + 1);
            randomGenWords[0]+=' '+generateRandomWord(wordsFromDb,x);
        }
    }
}

String.prototype.explode = function (separator, limit)
{
    const array = this.split(separator);
    if (limit !== undefined && array.length >= limit)
    {
        array.push(array.splice(limit - 1).join(separator));
    }
    return array;
};

function generateRandomWord(arr, length) {
    return Array
        .from({ length },() => arr[Math.floor(Math.random() * arr.length)])
        .join("");
}


function getLetterImage(letter){
    if(hideImageFlag==1){
        document.getElementById("image-of-letter").style.visibility =  "hidden";
        return;
    }
    if(letter == " " || letter == null){
        document.getElementById("image-of-letter").style.visibility =  "hidden";
        return;
    }
    document.getElementById("image-of-letter").style.visibility =  "visible";
    document.getElementById("image-of-letter").src = letterImageMap.get(letter);

    const nextLetter = document.querySelector('.letter.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = nextLetter.getBoundingClientRect().top + 6 + 'px';
    cursor.style.left = nextLetter.getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
}

function getHandImage(letter){
    var handMap;
    var handSetting = getHandSetting();

    if(hideHandFlag == 1 || letter == null){
        document.getElementById("hand-image").style.visibility = 'hidden';
        return;
    }

    if(handSetting==0){
        handMap = twoHandsMap;
        getLetterFromMap(letter,handMap);
    }
    if(handSetting==1){
        handMap = rightHandMap;
        getLetterFromMap(letter,handMap);
    }
    if(handSetting==2){
        handMap = leftHandMap;
        getLetterFromMap(letter,handMap);
    } else{
        console.log("No hand setting present");
    }
}

function getLetterFromMap(letter, map){
    if(hideHandFlag == 1){
        document.getElementById("hand-image").style.visibility =  "hidden";
        return;
    }
    if(letter == " "){
        document.getElementById("hand-image").style.visibility =  "hidden";
        return;
    }
    document.getElementById("hand-image").style.visibility =  "visible";
    document.getElementById("hand-image").src = map.get(letter);
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

function getLoadForTyping() {
    var loadForTyping = check_cookie_name("loadForTyping");
    return decodeURIComponent(loadForTyping);
}

function getHandSetting(){
    var loggedUser = check_cookie_name("LoggedUser");
    var loggedUserDecoded = decodeURIComponent(loggedUser);
    var loggedUserObject = JSON.parse(loggedUserDecoded);
    var handSetting = loggedUserObject['user']['handSetting'];

    return handSetting;
}

function getSavedProgress(){
    var contentID = check_cookie_name(toLoad+"Button");
    cookieName = "content"+contentID;
    var savedProgress = check_cookie_name(cookieName);
    if(savedProgress == null){
        console.log("no saved progress");
        return currentWordIndex = 0;
    }
    return currentWordIndex = savedProgress;
}

function deleteCookie(name) {
    if(check_cookie_name(name)==null) {
        console.log("no cookie to delete!");
        return;
    }
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function updateProgressBar(cwi){
    const progress = document.getElementById('prog-completed');
    var percent = ((cwi/(words.length))*100)
    if(percent >= 0 && zero ==0){
        if(getActiveLanguage() == 'en')
        speechBubble.innerHTML = "Let's start!";
        if(getActiveLanguage() == 'nl')
            speechBubble.innerHTML = "Laten we beginnen!";
        setTimeout(()=>{speechBubble.classList.add('m-fadeOut')},2000);
        zero = 1;
    }
    if(percent >= 25 && quarter == 0){
        speechBubble.classList.replace('m-fadeOut', 'm-fadeIn');
        if(getActiveLanguage() == 'en')
        speechBubble.innerHTML = "Nice work 🙌";
        if(getActiveLanguage() == 'nl')
            speechBubble.innerHTML = "Goed bezig 🙌";
        setTimeout(()=>{speechBubble.classList.replace('m-fadeIn', 'm-fadeOut')},2000);
        quarter = 1;
    }
    if(percent >= 50 && half == 0){
        speechBubble.classList.replace('m-fadeOut', 'm-fadeIn');
        if(getActiveLanguage() == 'en')
        speechBubble.innerHTML = "Halfway 👏";
        if(getActiveLanguage() == 'nl')
            speechBubble.innerHTML = "Over de helft 👏";
        setTimeout(()=>{speechBubble.classList.replace('m-fadeIn', 'm-fadeOut')},2000);
        half = 1;
    }
    if(percent >= 75 && threeQuarters == 0){
        speechBubble.classList.replace('m-fadeOut', 'm-fadeIn');
        if(getActiveLanguage() == 'en')
        speechBubble.innerHTML = "Almost there 🏁";
        if(getActiveLanguage() == 'nl')
            speechBubble.innerHTML = "Bijna klaar 🏁";
        setTimeout(()=>{speechBubble.classList.replace('m-fadeIn', 'm-fadeOut')},2000);
        threeQuarters = 1;
    }
    if(percent == 100){
        speechBubble.classList.replace('m-fadeOut', 'm-fadeIn');
        if(getActiveLanguage() == 'en')
        speechBubble.innerHTML = "Hooray 🎉";
        if(getActiveLanguage() == 'nl')
            speechBubble.innerHTML = "Proficiat 🎉";
        setTimeout(()=>{speechBubble.classList.replace('m-fadeIn', 'm-fadeOut')},2000);
    }
    progress.style.width = percent+"%";
}


function toggleImage() {
    var toggleImageBtn = document.getElementById('image-toggle-image');
    var image = document.getElementById('image-of-letter');
    if(image.classList.contains('hidden')){
        image.classList.remove('hidden');
        image.style.visibility = 'visible';
        hideImageFlag = 0;
        toggleImageBtn.src = '../icons/typing_icons/show_image.png';
        toggleImageBtn.title = 'hide image';
    }else {
        image.classList.add('hidden');
        hideImageFlag = 1;
        image.style.visibility = 'hidden';
        toggleImageBtn.src = '../icons/typing_icons/hide_image.png';
        toggleImageBtn.title = 'show image';
    }
}

document.getElementById('toggle-image-button').addEventListener('click', ev => {
    toggleImage();
    document.getElementById('toggle-image-button').blur();
})

function toggleHand() {
    var toggleHandBtn = document.getElementById('hand-toggle-image');
    var image = document.getElementById('hand-image');
    if(image.classList.contains('hidden')){
        image.classList.remove('hidden');
        image.style.visibility = 'visible';
        hideHandFlag = 0;
        toggleHandBtn.src = '../icons/typing_icons/back_hand.png';
        toggleHandBtn.title = 'hide hands'
        image.blur();
    }else {
        image.classList.add('hidden');
        hideHandFlag = 1;
        image.style.visibility = 'hidden';
        toggleHandBtn.title = 'show hands'
        toggleHandBtn.src = '../icons/typing_icons/do_not_touch.png';
        image.blur();
    }

}

document.getElementById('toggle-hands').addEventListener('click', ev => {
    toggleHand();
    document.getElementById('toggle-hands').blur();
})

function toggleSound() {
    var toggleSoundBtn = document.getElementById('sound-toggle-image');

    if(volumeOffFlag==1){
        toggleSoundBtn.src = '../icons/typing_icons/volume_up.png';
        toggleSoundBtn.title = 'sound off';
        console.log("in hidden");
        volumeOffFlag = 0;
    }else {
        toggleSoundBtn.src = '../icons/typing_icons/volume_off.png';
        toggleSoundBtn.title = 'sound on';
        console.log("not hidden");
        volumeOffFlag = 1;
    }
}

document.getElementById('toggle-sound').addEventListener('click', ev => {
    toggleSound();
    document.getElementById('toggle-sound').blur();
})


function saveProgress(){
    var contentID;
    if(toLoad == "lesson"){
        contentID = check_cookie_name("lessonButton");
    } else{
        contentID = check_cookie_name("exerciseButton");
    }
    $.ajax({
        url:"../TypwindController/saveProgress",
        type: "POST",
        data:{
            id: contentID,
            progress: currentWordIndex
        },
        dataType: 'json',
        success: function(response){
            $('.result').html(response);
        }
    });
}



document.addEventListener('keyup', ev => {

    //Make sure that the keydown is the same as the key up in order to advance the cursor.
    if (keyPressed || keyPressedCode!=ev.keyCode){
        console.log("A key is still pressed. Do nothing");
        return;
    }

    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    var currentLetter = document.querySelector('.letter.current');
    var expected = currentLetter?.innerHTML;
    if(specialCharCodeArray.indexOf(expected.charCodeAt(0))!==-1){
        expected = keyAtCharCode(expected.charCodeAt(0));
    }
    const isValidLetter = key.length === 1 && isValidKey(key);
    const isSpace = expected == " ";

    if (document.querySelector('#game.over')) {
        return;
    }

    console.log({key,expected});

    if (isValidLetter) {
        if(key === expected){
            correctKeys[expected]++;
            if(!volumeOffFlag){
                correctSound.play();
            }
            console.log("Correct sound should play");
        } else{
            console.log("Incorrect sound should play");
            if(!volumeOffFlag){
                incorrectSound.play();
            }
        }
        totalKeys[expected]++;

        addClass(currentLetter, key === expected ? 'correct' : 'incorrect');

        if(isSpace && currentLetter.nextSibling.getBoundingClientRect().top == currentLetter.getBoundingClientRect().top){
            currentLetter.innerHTML = "_";
        }

        removeClass(currentLetter, 'current');
        if (currentLetter.nextSibling) {
            addClass(currentLetter.nextSibling, 'current');

        }
        else{ // next word
            if(currentWordIndex == words.length - 1){ // end of lesson
                document.getElementById("image-of-letter").style.visibility =  "hidden";
                document.getElementById("hand-image").style.visibility = 'hidden';
                deleteCookie(cookieName);
                updateProgressBar(currentWordIndex + 1);
                setTimeout(()=>{goToRewards(true)},1000);
            } else{ // next word
                removeClass(currentWord, 'current');
                currentWordIndex++;
                updateProgressBar(currentWordIndex);
                document.getElementById('words').innerHTML = formatWord(words[currentWordIndex]);
                addClass(document.querySelector(".word"), "current");
                addClass(document.querySelector(".letter"), "current");
                firstLetterOfWord();
            }
        }
    }

    // move cursor and go to next line if necessary (skip space character at the end of the line)
    currentLetter = document.querySelector('.letter.current'); // need to refresh in case of a new word
    var nextLetter = document.querySelector('.letter.current');
    var cursor = document.getElementById('cursor');


    if(nextLetter.nextSibling){
        if(nextLetter.nextSibling.getBoundingClientRect().top !== currentLetter.getBoundingClientRect().top) {  // next letter on next line
            removeClass(nextLetter, 'current');
            addClass(nextLetter.nextSibling, 'current');
            nextLetter = document.querySelector('.letter.current');
        }
        cursor.style.top = nextLetter.getBoundingClientRect().top + 6 + 'px';
        cursor.style.left = nextLetter.getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    }

    // move cursor
    nextLetter = document.querySelector('.letter.current'); // need to refresh in case of a new word
    cursor.style.top = nextLetter.getBoundingClientRect().top + 6 + 'px';
    cursor.style.left = nextLetter.getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';

});

start();



