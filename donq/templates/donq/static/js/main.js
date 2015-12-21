window.onload=function(){init()};

var ClientWidth;
var ClientHeight;
var NavigationBar;
var Home;
var SearchBox;
var Fragment;
var Box;
var Info;
var Pannel;
var Content;
var isFragmentActive;
var tempBoolean;
var Contents;
var ContentsArea;
var Edit;

function init(){
    NavigationBar=document.getElementsByClassName("NavigationBar")[0];
    Home=document.getElementsByClassName("Home")[0];
    SearchBox=document.getElementsByClassName("SearchBox")[0];
    Fragment=document.getElementsByClassName("Fragment")[0];
    //Fragment.style.display="none";
    isFragmentActive=false;
    tempBoolean=false;
    Info=document.getElementsByClassName("Info")[0];
    Pannel=document.getElementsByClassName("Pannel")[0];
    Content=document.getElementsByClassName("Content")[0];
    Contents=document.getElementsByClassName("Contents");
    ContentsArea=document.getElementsByClassName("ContentArea")[0];
    Edit=document.getElementsByClassName("Edit")[0];
    
    ClickedNew();
   // var Intval=setInterval("resizeing()",1);
}
function resizeing(){
    ClientHeight=document.body.clientHeight;
    ClientWidth=document.body.clientWidth;
    
    //SetNavigationBar();
    //SetHome();
    //SetSearchBox();
    //SetFragment();
    //SetInfo();
    //SetPannel();
    SetContent();
    SetContents();
    SetContentsArea();
}
function SetNavigationBar(){
    NavigationBar.style.width=ClientWidth+"px";
    NavigationBar.style.height=(ClientHeight*7/100)+"px";
    NavigationBar.style.position="absolute";
    NavigationBar.style.left=0;
    NavigationBar.style.top=0;
}
function SetHome(){
    Home.style.width=(ClientHeight*5/100)+"px";
    Home.style.height=(ClientHeight*5/100)+"px";
    Home.style.position="absolute";
    Home.style.margin=(ClientHeight*7/100)/2-(ClientHeight*5/100)/2+"px"
}
function SetSearchBox(){
    SearchBox.style.width=(ClientWidth*17/100)+"px"
    SearchBox.style.height=(ClientHeight*5/100)+"px"
    SearchBox.style.top=(ClientHeight*7/100)/2-(ClientHeight*5/100)/2+"px";
    SearchBox.style.left=(ClientHeight*5/100)+((ClientHeight*7/100)-(ClientHeight*5/100))+"px";
    SearchBox.style.position="absolute";
    
}
function SetFragment(){
    Fragment.style.width=(ClientHeight*5/100)+((ClientHeight*7/100)-(ClientHeight*5/100))+(ClientWidth*17/100)+"px"
    Fragment.style.height=(ClientHeight*93/100)+"px";
    Fragment.style.top=(ClientHeight*7/100)+"px";
    Fragment.style.position="absolute";
}
function SetInfo(){
    Info.style.width=(ClientWidth*20/100)+"px"
    Info.style.height=(ClientHeight*5/100)+"px"
    Info.style.top=(ClientHeight*7/100)/2-(ClientHeight*5/100)/2+"px";
    Info.style.left=ClientWidth-((ClientHeight*7/100)/2-(ClientHeight*5/100)/2)- (ClientWidth*20/100)+"px";
    Info.style.position="absolute";
    
}
function SetPannel(){
    Pannel.style.width=(ClientWidth*23/100)+"px";
    Pannel.style.height=(ClientHeight*5/100)+"px";
    Pannel.style.top=(ClientHeight*7/100)+"px";
    Pannel.style.left=ClientWidth-((ClientWidth/100)+(ClientWidth*23/100))+"px";
    Pannel.style.position="absolute";
}
function SetContent(){
    Content.style.width=(ClientWidth*98/100)-(Fragment.style.width.replace('px','')*isFragmentActive)+"px";
    Content.style.height=(ClientHeight*88/100)+"px";
    Content.style.top=(ClientHeight*12/100)+"px";
    Content.style.left=ClientWidth/100+(Fragment.style.width.replace('px','')*isFragmentActive)+"px";
    Content.style.position="absolute";
    if(isFragmentActive){
        Content.classList.remove('wobble','animated');
        Content.classList.add('bounceInLeft','animated');
    }
    else if(isFragmentActive==false && tempBoolean==true){
        Content.classList.remove('bounceInLeft','animated');
        Content.classList.add('wobble','animated');
    }
}
function SetContentsArea(){
    ContentsArea.style.height=(Content.style.height.replace('px','')-$('.Edit').height()+"px");
}
function SetContents(){
}
function ClickedContent(obj){
    console.log(obj.innerHTML);    
}
function focusInSearchBox(){
    Fragment.style.display="block";
    Fragment.classList.remove('bounceOutLeft');
    Fragment.classList.add('bounceInLeft','animated');
    isFragmentActive=true;
    tempBoolean=true;
}
function focusOutSearchBox(){
    Fragment.classList.remove('bounceInLeft');
    Fragment.classList.add('bounceOutLeft','animated');
    isFragmentActive=false;
}
function ClickedHome(){
    location.reload();
}
function resize(obj) {
    obj.style.height = "18px";
    obj.style.height = (18+obj.scrollHeight)+"px";
}

var swapElements = function(siblings, subjectIndex, objectIndex) {
    // Get subject jQuery
    var subject = $(siblings.get(subjectIndex));
    // Get object element
    var object = siblings.get(objectIndex);
    // Insert subject after object
    subject.insertAfter(object);
}

require.config({
	baseUrl: "../dist",
	paths: {
		'skrollr' : "skrollr.min"
	},
	waitSeconds: 15
});

require(['skrollr'], function(skrollr){
	var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});
});