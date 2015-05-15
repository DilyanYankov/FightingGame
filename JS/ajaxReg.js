$(document).ready(function(){
$("#submit").click(function(e){
	e.preventDefault();
var name = $("#username").val();
var email = $("#email").val();
var password = $("#password").val();
var avatar = $("#avatar").val();
var passRep = $("#password_repeat").val();
var dataString = 'username='+ name + '&email='+ email + '&password='+ password + '&avatar='+ avatar +'&password_repeat='+passRep;
$.ajax({
type: "POST",
url: 'http://ittalentsapi.bashibozuk.eu/users/register/?X-GameID=101',
data: dataString,
cache: false,
success: function(result){
	for(k in result.errors){
		$('#'+'error_'+k).html(result.errors[k]);
		console.log(k);
	}
	if(!result.errors){
		window.location.href = 'form-login.html'
	}
}
});
}
);
});