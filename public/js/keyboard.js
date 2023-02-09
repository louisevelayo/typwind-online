import{getSiblingLetter, getCurrentLetter, getCurrentWordFirstLetter, isValidKey} from './typing.js';

/* KEYBOARD FUNCTIONS */
export function setActiveInitial(){
    let initialLetter = getCurrentLetter().toString();
    console.log("this is the initial letter " + initialLetter);
    console.log("set active inital shows next letter is: " + initialLetter);
    activateLetter(initialLetter);
}

export function firstLetterOfWord(){
    var initialLetterOfWord = getCurrentWordFirstLetter().toString()
    console.log("FIRST LETTER OF NEW WORD: "+initialLetterOfWord)
    activateLetter(initialLetterOfWord);
}

function setActive(){
    var nextLetter = getSiblingLetter().toString();
    console.log("set active shows next letter is: " + nextLetter);
    activateLetter(nextLetter);
}

function deactivate(tKey){
    const current = getCurrentLetter().toString();
    var keyToDeactivate;

    //This is to make sure the keyboard key is deactivated even if the wrong key is pressed.
    if(tKey==current){
        keyToDeactivate = tKey;
    } else{
        keyToDeactivate = current;
    }

    console.log("deactivate() is getting: " + keyToDeactivate);
    if(keyToDeactivate == " "){
        document.getElementById("space").style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }
    else{
        document.getElementById(keyToDeactivate)
        // document.getElementsByClassName("keyboard__key")
            .classList
            .remove("keyboard__key--red--active",
                "keyboard__key--yellow--active",
                "keyboard__key--green--active",
                "keyboard__key--blue--active");
    }
}

function activateLetter(letter){
    const redKey = ["(", "§", "è", "!", "r", "t", "y", "u",
        "d", "f", "g", "h", "j", "v", "b", "n", ","].indexOf(letter) !== -1;
    const blueKey = ["&", "é", "a", "q", "w", "p", "m", "=", ")"].indexOf(letter) !== -1;
    const greenKey = ["'", "e", "d", "c", "i", "k", ";", "ç"].indexOf(letter) !== -1;
    const yellowKey = ['"', "z", "s", "x", "o", "l", ":", "à"].indexOf(letter) !== -1;

    if(letter == " "){
        document.getElementById("space").style.backgroundColor = '#939393';
    }

    if(redKey){
        document.getElementById(letter).classList.add("keyboard__key--red--active");
    }
    if(letter == '&amp'){
        document.getElementById('&').classList.add("keyboard__key--blue--active");
    }
    if(blueKey){
        console.log("in blue");
        document.getElementById(letter).classList.add("keyboard__key--blue--active");
    }
    if(greenKey){
        console.log("in green");
        document.getElementById(letter).classList.add("keyboard__key--green--active");
    }
    if(yellowKey){
        console.log("in red");
        document.getElementById(letter).classList.add("keyboard__key--yellow--active");
    }
}


/* KEYBOARD OBJECT */
const Keyboard = {

    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    //This creates the keyboard: classes and the keys
    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.getElementById("exercise-typing-div").appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("click", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "&", "é", '"', "'", "(", "§", "è", "!", "ç", "à", ")",
            "a", "z", "e", "r", "t", "y", "u", "i", "o", "p",
            "q", "s", "d", "f", "g", "h", "j", "k", "l", "m",
            "w", "x", "c", "v", "b", "n", ",", ";",  ":", "=",
            "space"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            //conditionals - checks if the key is containted in the array and will return the index of it. Otherwise it returns -1
            const insertLineBreak = [")", "p", "m", "="].indexOf(key) !== -1;
            const redKey = ["(", "§", "è", "!", "r", "t", "y", "u", "d", "f", "g", "h", "j", "v", "b", "n", ","].indexOf(key) !== -1;
            const blueKey = ["&", "é", "a", "q", "w", "p", "m", "=", ")"].indexOf(key) !== -1;
            const greenKey = ["'", "e", "d", "c", "i", "k", ";", "ç"].indexOf(key) !== -1;
            const yellowKey = ['"', "z", "s", "x", "o", "l", ":", "à"].indexOf(key) !== -1;
            // Add attributes/classes
            keyElement.setAttribute("type", "button");      //creates the button
            keyElement.setAttribute("id", key)
            keyElement.classList.add("keyboard__key");      //adds class so that CSS can be applied

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }

            if(redKey){
                keyElement.classList.add("keyboard__key--red");
            }

            if(blueKey){
                keyElement.classList.add("keyboard__key--blue");
            }

            if(greenKey){
                keyElement.classList.add("keyboard__key--green");
            }

            if(yellowKey){
                keyElement.classList.add("keyboard__key--yellow");
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    },


};

Keyboard.init();

/* EVENT HANDLERS */

var keyPressed = false;
var keyPressedCode;
export{keyPressed, keyPressedCode};

document.addEventListener('keyup', ev => {
    if(!keyPressed){
        return;
    }
    if(isValidKey(ev.key) && ev.keyCode == keyPressedCode){
        setActive();
        // deactivate();
        keyPressed = false;
    }
});


document.addEventListener('keydown', ev => {
    deactivate(ev.key);
    if(keyPressed){
        console.log("key pressed is true");
        return;
    }
    if(isValidKey(ev.key)){
        keyPressed=true;
        keyPressedCode = ev.keyCode;
        console.log("The key that set the flag is: " + ev.key);
    }
});

function toggleKeyboard() {
    const toggleKeybBtn = document.getElementById('keyboard-toggle-image');
    if(Keyboard.elements.main.classList.contains('keyboard--hidden')){
        Keyboard.elements.main.classList.remove('keyboard--hidden');
        toggleKeybBtn.src = '../icons/typing_icons/keyboard_show.png';
        toggleKeybBtn.title = 'hide keyboard';
    }else {
        Keyboard.elements.main.classList.add('keyboard--hidden');
        toggleKeybBtn.src = '../icons/typing_icons/keyboard_hide.png';
        toggleKeybBtn.title = 'show keyboard';
    }
}

document.getElementById('toggle-keyboard').addEventListener('click', ev=>{
    toggleKeyboard();
    document.getElementById('toggle-keyboard').blur();
})




