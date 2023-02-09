// local host
const base_url = window.location.origin;
// studev
// const base_url = window.location.origin

// This method works in passing a JS variable to the controller but fails as soon as you switch page.

function getLesson(){
    const params = new URLSearchParams();
    params.set("lesson_id", lessonId);
    console.log(params.toString());
    fetch('../TypwindController/getLessonWithId?'+ params.toString())
        // .then(response =>{
        //     response.json();
        //     console.log(response);
        // })
        // .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .catch(error => console.log(error))
}

function ajaxRequest(buttonID){
    $.ajax({
        url:"http://localhost/a22ux04/public/TypwindController/lessonAjax",
        type: "POST",
        data:{
            id: buttonID
        },
        dataType: 'json',
        success: function(response){
            $('.result').html(response);
        }
    });
}

var beginButtons = document.getElementsByClassName("beginButton");

var getButtonId = function(){
    var buttonId = this.id;
    console.log("button pressed - ID :" + buttonId);
    ajaxRequest(buttonId);

}

for (var i = 0; i < beginButtons.length; i++) {
    beginButtons[i].addEventListener('click', getButtonId);
    console.log(beginButtons.length);
}

// const testButton = document.getElementById('beginButton1');
//
// testButton.addEventListener('click', () => {
//     ajaxRequest();
//     console.log("begin button clicked");
// });

ajaxRequest();
