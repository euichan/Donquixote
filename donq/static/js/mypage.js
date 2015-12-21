window.onload= function(){ 
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            csrftoken = $.cookie('csrftoken');
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
    
}
function profile_post() {
        
        for (var i = 0; i < $("input[name=files]")[0].files.length; i++) {
            //첫번째 파일태그
            formData.append("files", $("input[name=files]")[0].files[i]);
        }


        $.ajax({
            url: '/profileupload',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            success: function (result) {
                location.href="{% url 'mypage' %}";
            },
            error:function (request,status,error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });
    }