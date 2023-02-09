function ajaxRequest(){
    $.ajax({
        url:"http://localhost/a22ux04/public/TypwindController/ajaxreq",
        type: "POST",
        data:{
            name: 'simpletine'
        },
        dataType: 'json',
        success: function(response){
            $('.result').html(response);
        }
    });
}