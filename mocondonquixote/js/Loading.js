window.onload=init();
var Loading;
var ClientWidth;
var ClientHeight;
function init(){
    Loading=document.getElementsByClassName("loading");
    var Intval=setInterval("resizeing()",1);
}
function resizeing(){
    ClientHeight=document.body.clientHeight;
    ClientWidth=document.body.clientWidth;
    
    SetLoading();
        
}
function SetLoading(){
    Loading[0].style.width=ClientWidth/100*20+"px";
    Loading[0].style.height=ClientWidth/100*20+"px";
    Loading[0].style.left=ClientWidth/100*50-ClientWidth/100*10+"px";
    Loading[0].style.top=(ClientHeight/100*50-ClientWidth/100*20)+"px";
}