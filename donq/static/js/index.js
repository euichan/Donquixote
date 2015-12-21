var check=true;
var check2=true;
var position = $(window).scrollTop();
var contents_container;
var Contents;
var new_hl;
var pop_hl;
var tru_hl;
var chang_hl;
var Postfile_selected = false;
var Cmtfile_selected = false;

if(navigator.userAgent.match(/Android/i)){
    window.scrollTo(0,1);
}


function init(){
    var postList = new List('test-list', { 
        valueNames: ['post','box_content','comment_content','text_name','text_content','comment_cat'], 
        plugins: [ ListFuzzySearch() ] 
    });
    new_hl = document.getElementsByClassName("sorttype")[0];
    pop_hl = document.getElementsByClassName("sorttype")[1];
    tru_hl = document.getElementsByClassName("sorttype")[2];
    cha_hl = document.getElementsByClassName("sorttype")[3];
    chang_hl = document.getElementById("sidebar_right_chang")
    contents_container=document.getElementsByClassName("contents_container")[0];
    Contents=document.getElementsByClassName("posts_box");
    
     $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            csrftoken = $.cookie('csrftoken');

            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
    function content_post() {
        //폼객체를 불러와서
        //FormData parameter에 담아줌
        var formData = new FormData();
            //첫번째 파일태그
        var text = document.getElementById("post_box");
        var select=document.getElementById("select");

        var x = select.selectedIndex;
        var y = select.options;
        text=text.value;
        formData.append("text",text);
        formData.append("spear",chang);
        formData.append("categori",y[x].text);
        for (var i = 0; i < $("input[name=files]")[0].files.length; i++) {
            //첫번째 파일태그
            formData.append("files", $("input[name=files]")[0].files[i]);
        }


        $.ajax({
            url: '/post/new/',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            success: function (result) {
                alert("업로드 성공!!");
                location.href='/';
            },
            error:function (request,status,error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });
    }
}

function clikedPostButton(obj){
    $("#contents_container").animate({scrollTop:265},500);
    autofocus();
}

function clikedWriteButton(obj){
    $("#contents_container").animate({scrollTop:0},500);
    autofocus();
}

function autofocus() {
    $(this).click(function() {
        $('#autofocus').focus();
    });
}

function ClickedNew(){
    var new1;
    var new2;
    new_hl.style.backgroundColor="rgba(255,255,255,0.1)";
    pop_hl.style.backgroundColor="transparent";
    tru_hl.style.backgroundColor="transparent";
    cha_hl.style.backgroundColor="transparent";
    chang_hl.style.left = 0 + "px";

    for(var j=0;j<Contents.length;j++){
        for(var i=0;i<Contents.length-1;i++){
            new1=parseInt(Contents[i].id.replace('box_',''));
            new2=parseInt(Contents[i+1].id.replace('box_',''));
            if(new1<new2){
                $(function() {
                    swapElements($('.posts_box'), i, i+1);
                });
            }
        }
    }

}

function ClickedPop(){
    var popular;
    var popular2;
    new_hl.style.backgroundColor="transparent"
    pop_hl.style.backgroundColor="rgba(255,255,255,0.1)";
    tru_hl.style.backgroundColor="transparent";
    cha_hl.style.backgroundColor="transparent";
    chang_hl.style.left = 0 + "px";
    for(var j=0;j<Contents.length;j++){
        for(var i=0;i<Contents.length-1;i++){
            popular=parseInt(Contents[i].getAttribute("popular"));
            popular2=parseInt(Contents[i+1].getAttribute("popular"));
            if(popular<popular2){
                $(function() {
                    swapElements($('.posts_box'), i, i+1);
                });
            }
        }
    }
}
var swapElements = function(siblings, subjectIndex, objectIndex) {
    // Get subject jQuery
    var subject = $(siblings.get(subjectIndex));
    // Get object element
    var object = siblings.get(objectIndex);
    // Insert subject after object
    subject.insertAfter(object);
}
function ClickedTru(){
    var trust;
    var trust2;
    new_hl.style.backgroundColor="transparent";
    pop_hl.style.backgroundColor="transparent";
    tru_hl.style.backgroundColor="rgba(255,255,255,0.1)";
    cha_hl.style.backgroundColor="transparent";
    chang_hl.style.left = 0 + "px";

    for(var j=0;j<Contents.length;j++){
        for(var i=0;i<Contents.length-1;i++){
            trust=parseInt(Contents[i].getAttribute("trust"));
            trust2=parseInt(Contents[i+1].getAttribute("trust"));
            if(trust<trust2){
                $(function() {
                    swapElements($('.posts_box'), i, i+1);
                });
            }
        }
    }
}

function ClickedCha(){
    var cat_hl = document.getElementById("sidebar_right");
    new_hl.style.backgroundColor="transparent";
    pop_hl.style.backgroundColor="transparent";
    tru_hl.style.backgroundColor="transparent";
    cha_hl.style.backgroundColor="rgba(255,255,255,0.1)";
    chang_hl.style.left = 255 + "px";
    cat_hl.style.left= 0;

}


function ClickedCat(){
    var cbtn_hl = document.getElementById("f_nav_category");
    var cat_hl = document.getElementById("sidebar_right");
    cha_hl.style.backgroundColor="transparent";
    cbtn_hl.style.backgroundColor="rgba(0,0,0,0.3)";
    cbtn_hl.style.color="white";
    cat_hl.style.left = 240+"px";
    chang_hl.style.left = 0 + "px";
}

function ClickedCat_mypage(){
    var cbtn_hl = document.getElementById("f_nav_category");
    var cat_hl = document.getElementById("sidebar_right");
    cbtn_hl.style.backgroundColor="rgba(0,0,0,0.3)";
    cbtn_hl.style.color="white";
    cat_hl.style.left = 240+"px";
}

//newJS
function mypage_change_pw(){
    var cat_pw = document.getElementsByClassName("category")[0];
    var dim_bg = document.getElementById("dim_sidebar_background");
    var popup1 = document.getElementById("pw_card_container");
    var popup2 = document.getElementById("user_card_container");
    popup1.style.display = "inline-block";
    popup2.style.display = "none";
    dim_bg.style.display = "inline-block";
}
function mypage_userdel(){
    var cat_pw = document.getElementsByClassName("category")[1];
    var dim_bg = document.getElementById("dim_sidebar_background");
    var popup1 = document.getElementById("pw_card_container");
    var popup2 = document.getElementById("user_card_container");
    popup1.style.display = "none";
    popup2.style.display = "inline-block";
    dim_bg.style.display = "inline-block";
}
function mypage_back(){
    var dim_bg = document.getElementById("dim_sidebar_background");
    var cat_hl = document.getElementById("sidebar_right");
    var f_nav = document.getElementById("f_nav_category");
    var popup1 = document.getElementById("pw_card_container");
    var popup2 = document.getElementById("user_card_container");
    popup1.style.display = "none";
    popup2.style.display = "none";
    cat_hl.style.left = 0;
    f_nav.style.backgroundColor = "transparent";
    dim_bg.style.display = "none";
}

function SelectedCat(){
    var cat_hl = document.getElementById("sidebar_right");
    cat_hl.style.left = 0;
}

function ClickedSidebarList(obj){
    console.log(obj.innerHTML);
}

function search(){
    document.getElementById("delete_container").style.opacity = "1";
}

function search_delete(){
    document.form.search.value = "";
    document.getElementById("delete_container").style.opacity = "0";
}



var InputImage_Post = 
    (function loadImageFile() {
        if (window.FileReader) {
            var ImagePre; 
            var ImgReader = new window.FileReader();
            var fileType = /^(?:image\/bmp|image\/gif|image\/jpeg|image\/png|image\/x\-xwindowdump|image\/x\-portable\-bitmap)$/i; 

            ImgReader.onload = function (Event) {
                if (!ImagePre) {
                    var plus = document.getElementById("plus_img_box");
                    var newPreview = document.getElementsByClassName("imagePreview_Post")[0];
                    ImagePre = new Image();
                    ImagePre.style.position = "relative";
                    ImagePre.style.width = "100px";
                    ImagePre.style.height = "100px";
                    newPreview.style.display = "inline-block";
                    newPreview.appendChild(ImagePre);
                    plus.style.display="inline-block";
                }
                ImagePre.src = Event.target.result;

            };

            return function () {

                var img = document.getElementById("Post_file").files;

                if (!fileType.test(img[0].type)) { 
                    alert("이미지 파일을 업로드 하세요"); 
                    return; 
                }

                ImgReader.readAsDataURL(img[0]);
            }

        }

        document.getElementById("imagePreview_Post").src = document.getElementById("Post_file").value;


    })();



var InputImage_Cmt = 
    (function loadImageFile() {
        if (window.FileReader) {
            var ImagePre; 
            var ImgReader = new window.FileReader();
            var fileType = /^(?:image\/bmp|image\/gif|image\/jpeg|image\/png|image\/x\-xwindowdump|image\/x\-portable\-bitmap)$/i; 

            ImgReader.onload = function (Event) {
                if (!ImagePre) {
                    var newPreview = document.getElementById("imagePreview_Cmt");
                    document.getElementById("comment").style.height="180px";
                    ImagePre = new Image();
                    ImagePre.style.position="absolute";
                    ImagePre.style.width = "100px";
                    ImagePre.style.height = "auto";
                    ImagePre.style.maxWidth = "40%";
                    ImagePre.style.maxHeight = "auto";
                    ImagePre.style.marginTop = "-120px";
                    ImagePre.style.marginLeft = "70px";
                    newPreview.appendChild(ImagePre);
                }
                ImagePre.src = Event.target.result;

            };

            return function () {

                var img = document.getElementById("Cmt_file").files;

                if (!fileType.test(img[0].type)) { 
                    alert("이미지 파일을 업로드 하세요"); 
                    return; 
                }

                ImgReader.readAsDataURL(img[0]);
            }

        }

        document.getElementById("imagePreview_Cmt").src = document.getElementById("Cmt_file").value;

    })();

function resize(obj) {
    obj.style.height = "0px";
    if(!Postfile_selected){
        obj.style.height = (obj.scrollHeight)+"px";
    } else {
        obj.style.height = (obj.scrollHeight)+"px";
    }
}

function resize_Cmt(obj) {
    var a =  document.getElementById("comment");
    obj.style.height = "0px";
    a.style.height = "60px";
    console.log(obj.style.height.replace('px',''));
    if(!Cmtfile_selected){
        obj.style.height = (-19+obj.scrollHeight)+"px";
        a.style.height = (8+obj.scrollHeight)+"px";
    } else {
        obj.style.height = (-15+obj.scrollHeight)+"px";
        a.style.height = (151+obj.scrollHeight)+"px";
    }
}
/*
function chooseCat() {
    $(document).ready(function () {
        $('#select').click();
    });
}
*/
function ClickedCat(){
    var cbtn_hl = document.getElementById("f_nav_category");
    var cat_hl = document.getElementById("sidebar_right");
    cha_hl.style.backgroundColor="transparent";
    cbtn_hl.style.backgroundColor="rgba(0,0,0,0.3)";
    cbtn_hl.style.color="white";
    cat_hl.style.left = 240+"px";
    chang_hl.style.left = 0 + "px";
}
function showNoti(event) {
    var a = document.getElementById("noti_container");
    var b = document.getElementsByClassName("focused_noti")[0];
    if(check){
        $(a).fadeIn( 250, function() {
        });
        check=false;
    }
    else{
        $(a).fadeOut( 250, function() {
        });
        check=true;
    }
}

function showPop(event) {
    clearWhiteElement(event.parentNode);
    console.log(event.parentNode.childNodes);

    if(check2){
        $(event.parentNode.childNodes[1]).fadeIn( 250, function() {
        });
        check2=false;
    }
    else{
        $(event.parentNode.childNodes[1]).fadeOut( 250, function() {
        });
        check2=true;
    }
}

var csrftoken;
function clearWhiteElement(elem){
   
        elem = elem || document;

        var childs = elem.childNodes
          , length = childs.length;

        for (var i = 0; i < length; i++){

            var child = childs[i];

            if (child)
            {
                if (child.nodeType === 3 && !/\S/.test(child.nodeValue)){
                    elem.removeChild(child);
                }
                else if(child.nodeType === 1)
                {
                    clearWhiteElement(child);
                }
            }
            else{
                var n = next(elem);
                if (n) clearWhiteElement(n);
            }
        }
    }
    function next(elem){
   
        do{
            elem = elem.nextSibling;
        }
        while(elem && elem.nodeType !== 1)

        return elem;

    }

function content_post() {
    //폼객체를 불러와서
    //FormData parameter에 담아줌
    var formData = new FormData();
        //첫번째 파일태그
    var text = document.getElementById("post_box");
    var select=document.getElementById("select");
    
    var x = select.selectedIndex;
    var y = select.options;
    text=text.value;
    formData.append("text",text);
    formData.append("spear",chang);
    formData.append("categori",y[x].text);
    for (var i = 0; i < $("input[name=files]")[0].files.length; i++) {
        //첫번째 파일태그
        formData.append("files", $("input[name=files]")[0].files[i]);
    }


    $.ajax({
        url: '/post/new/',
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        success: function (result) {
            alert("업로드 성공!!");
            location.href='/';
        },
        error:function (request,status,error){
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
    });
}
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function clickedBtnLove(obj){
    var formData = new FormData();
        //첫번째 파일태그
    var pk=obj.parentNode.parentNode.parentNode.parentNode.getAttribute("pk");
    formData.append("post_id",pk);
    $.ajax({
        url: '/clicked/like',
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        success: function (result) {
            
            location.href='/';
        }
    });    
}