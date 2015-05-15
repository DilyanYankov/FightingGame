$(document).ready(function(){
$("#submit").click(function(e){
	e.preventDefault();
	
var name = $("#username").val();
var password = $("#password").val();
var dataString = 'username='+ name +  '&password='+ password;
$.ajax({
type: "POST",
url: 'http://ittalentsapi.bashibozuk.eu/users/login?X-GameID=101',
data: dataString,
cache: false,
success: function(result){
	for(k in result.errors){
		$('#'+'error_'+k).html(result.errors[k]);
		console.log(result.errors);
		
	}
	if(!result.errors){
		$('#login').submit();
		}
	}



});
var form = document.querySelector('form');
form.onsubmit = function() {      
var dataObj = {};       
for (var i=0; i < this.elements.length; i++) {        
 dataObj[this.elements[i].name] = this.elements[i].value;
}
window.sessionStorage.setItem('myData', JSON.stringify(dataObj));
console.log(dataObj);
window.location = 'game-page.html';
return false;
}
}
);
});