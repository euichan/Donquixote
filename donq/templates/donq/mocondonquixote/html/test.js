window.onload=function(){init()};

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

function ClickedNew(){
    var new1;
    var new2;
    new_hl.style.borderBottomColor="#d4c392";
    pop_hl.style.borderBottomColor="transparent";
    tru_hl.style.borderBottomColor="transparent";

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
    new_hl.style.borderBottomColor="transparent";
    pop_hl.style.borderBottomColor="#d4c392";
    tru_hl.style.borderBottomColor="transparent";
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
    new_hl.style.borderBottomColor="transparent";
    pop_hl.style.borderBottomColor="transparent";
    tru_hl.style.borderBottomColor="#d4c392";
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

function Drawer(event)
{
    var a = document.getElementById("sidebar");
    var b = document.getElementById("dim_background");
    a.style.left="0%";
    b.style.zIndex="10";
    b.style.opacity="0.2";
}

function Main(event)
{
    var a = document.getElementById("sidebar");
    var b = document.getElementById("dim_background");
    a.style.left="-80%";
    b.style.zIndex="-10";
    b.style.opacity="0";
}

function comments(event){
    var c = document.getElementById("close_comment");
    a.style.opacity="1";
    b.style.opacity="1";
    b.style.zIndex="2";
    c.style.zIndex="10";
}

function close_comments(event){
    var c = document.getElementById("close_comment");
    a.style.opacity="0";
    b.style.opacity="0";
    b.style.zIndex="-2";
    c.style.zIndex="-10";
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
                    document.getElementById("contents_spacer").style.height= "370px";
                    ImagePre = new Image();
                    ImagePre.style.width = "100px";
                    ImagePre.style.height = "100px";
                    ImagePre.style.paddingTop = "20px";
                    ImagePre.style.paddingLeft = "20px";
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


function resize(obj) {
    var a = document.getElementById("contents_spacer");
    obj.style.height = "0px";
    a.style.height = "0px";
    if(!Postfile_selected){
        obj.style.height = (-4+obj.scrollHeight)+"px";
        a.style.height = (178+obj.scrollHeight)+"px";
    } else {
        obj.style.height = (-4+obj.scrollHeight)+"px";
        a.style.height = (298+obj.scrollHeight)+"px";
    }
}

function resize_Cmt(obj) {
    var a =  document.getElementById("comment");
    obj.style.height = "0px";
    a.style.height = "60px";
    if(!Cmtfile_selected){
        obj.style.height = (-19+obj.scrollHeight)+"px";
        a.style.height = (8+obj.scrollHeight)+"px";
    } else {
        obj.style.height = (-15+obj.scrollHeight)+"px";
        a.style.height = (151+obj.scrollHeight)+"px";
    }

}

