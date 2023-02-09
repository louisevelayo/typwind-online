$(function () {
    if(document.title == 'Sign Up')
    getHandType();

})
function getHandType(){

    var form = $('#SignUp-form');
    var handtype = form.find('select[name=hands_person]').val();

    var inputHandtype = document.getElementById('handtype');

    inputHandtype.value = handtype;

    return inputHandtype.value;

}

function getEmail(){
    let email = document.querySelector("input[name='email']").value;
    console.log(email);
}
