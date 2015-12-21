window.onload=function(){
$('#autoLogin').change(function() {
     if(this.checked) {
         this.value="check";
     }
    else{
        this.value="uncheck";
    }
 });
}