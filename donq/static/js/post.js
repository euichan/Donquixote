var countNum=0;
var postContentsBox;
var addBox;
window.onload=function(){
    postContentsBox = document.getElementById("post_contents_box");
    addBox = document.getElementById("add_post_box");
    $('.file').preimage();
}
function seungie_post(obj){
    countNum++;
    
    var postBox = document.createElement("div");
    var imgPostBox = document.createElement("div");
    var postNum = document.createElement("div");
    var textPostBox = document.createElement("div");
    var closeButton = document.createElement("input");
    var textArea = document.createElement("textarea");
    var num = document.createTextNode(countNum);
    
    closeButton.setAttribute("onclick","deletePost(this)");
    closeButton.setAttribute("type","image");
    closeButton.setAttribute("class","close_btn");
    closeButton.setAttribute("src","../images/close.png");
    postBox.setAttribute("class","post_box");
    imgPostBox.setAttribute("class", "img_post_box");
    postNum.setAttribute("class","post_num");
    textPostBox.setAttribute("class","text_post_box");
    textArea.setAttribute("rows","5");
    textArea.setAttribute("cols","30");
    
    postNum.appendChild(num);
    imgPostBox.appendChild(postNum);
    textPostBox.appendChild(textArea);
    
    postBox.appendChild(closeButton);
    postBox.appendChild(imgPostBox);
    postBox.appendChild(textPostBox);

    return postBox;
}
function deletePost(obj){
    countNum--;
    var parentNode = obj.parentElement.parentElement;
    var max=obj.parentElement.childNodes[1].childNodes[0].innerHTML;
    parentNode.removeChild(obj.parentElement);
    for (var i=0;i<countNum;i++){
        parentNode.childNodes[5+i].childNodes[1].childNodes[0].innerHTML=i+1;
    }
}
