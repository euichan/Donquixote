window.onload=function(){init()};



if(navigator.userAgent.match(/Android/i)){
    window.scrollTo(0,1);
}

var position = $(window).scrollTop();
var contents_container;
var Contents;
var new_hl;
var pop_hl;
var tru_hl;
var Postfile_selected = false;
var Cmtfile_selected = false;
function init(){

    new_hl = document.getElementsByClassName("category")[0];
    pop_hl = document.getElementsByClassName("category")[1];
    tru_hl = document.getElementsByClassName("category")[2];
    contents_container=document.getElementsByClassName("contents_container")[0];
    Contents=document.getElementsByClassName("posts_box");
}
function clikedWriteButton(obj){
    $("#contents_container").animate({scrollTop:0},500);
}
function ClickedNew(){
    var new1;
    var new2;
    new_hl.style.backgroundColor="rgba(255,255,255,0.3)";
    new_hl.style.color="white";
    pop_hl.style.backgroundColor="transparent";
    pop_hl.style.color="#aeaeae";
    tru_hl.style.backgroundColor="transparent";
    tru_hl.style.color="#aeaeae";

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
    new_hl.style.backgroundColor="transparent";
    new_hl.style.color="#aeaeae";
    pop_hl.style.backgroundColor="rgba(255,255,255,0.3)";
    pop_hl.style.color="white";
    tru_hl.style.backgroundColor="transparent";
    tru_hl.style.color="#aeaeae";
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
    var new_hl = document.getElementsByClassName("category")[0];
    var pop_hl = document.getElementsByClassName("category")[1];
    var tru_hl = document.getElementsByClassName("category")[2];
    new_hl.style.backgroundColor="transparent";
    new_hl.style.color="#aeaeae";
    pop_hl.style.backgroundColor="transparent";
    pop_hl.style.color="#aeaeae";
    tru_hl.style.backgroundColor="rgba(255,255,255,0.3)"
    tru_hl.style.color="white";
    
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
function ClickedContent(obj){
    console.log(obj.innerHTML);
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
                    var newPreview = document.getElementById("imagePreview_Post");
                    document.getElementById("post_btns_container").style.height= "120px";
                    ImagePre = new Image();
                    ImagePre.style.position = "absolute";
                    ImagePre.style.width = "100px";
                    ImagePre.style.height = "100px";
                    ImagePre.style.paddingTop = "20px";
                    ImagePre.style.paddingLeft = "50px";
                    newPreview.appendChild(ImagePre);
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

var InputImage_popCmt = 
    (function loadImageFile() {
        if (window.FileReader) {
            var ImagePre; 
            var ImgReader = new window.FileReader();
            var fileType = /^(?:image\/bmp|image\/gif|image\/jpeg|image\/png|image\/x\-xwindowdump|image\/x\-portable\-bitmap)$/i; 

            ImgReader.onload = function (Event) {
                if (!ImagePre) {
                    var newPreview = document.getElementById("imagePreview_popCmt");
                    document.getElementById("pop_comment").style.height="180px";
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

                var img = document.getElementById("pop_Cmt_file").files;

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
        obj.style.height = (-4+obj.scrollHeight)+"px";
    } else {
        obj.style.height = (-4+obj.scrollHeight)+"px";
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

function resize_popCmt(obj) {
    var a =  document.getElementById("pop_comment");
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
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
         
        // scrolling downwards
    } else {
         
        // scrolling upwards
    }
    position = scroll;
});
*/

function popup_menu_in(event){
    var a = document.getElementById("popup_menu");
    var c = document.getElementById("menu_indicator");
    var b = document.getElementById("popup_dim_background");
    a.style.opacity = "1";
    c.style.opacity = "1";
    b.style.zIndex="20";
    b.style.opacity="0.2";
}

function popup_menu_out(event){
    var a = document.getElementById("popup_menu");
    var c = document.getElementById("menu_indicator");
    var b = document.getElementById("popup_dim_background");
    a.style.opacity = "0";
    c.style.opacity = "0";
    b.style.zIndex="-20";
    b.style.opacity="0";
}
function comments(event){
    var a = document.getElementById("popup_comment_box");
    var b = document.getElementById("dim_background");
    a.style.top="10px";
    b.style.zIndex="10";
    b.style.opacity="0.2";
}

function close_comments(event){
    var a = document.getElementById("popup_comment_box");
    var b = document.getElementById("dim_background");
    a.style.top="110%";
    b.style.zIndex="-10";
    b.style.opacity="0";
}
