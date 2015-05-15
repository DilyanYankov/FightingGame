$(document).ready(function(){
$("#submit").click(function(e){
	e.preventDefault();
var email = $("#email").val();
var password = $("#password").val();
var passRep = $("#password_repeat").val();
var dataString = '&email='+ email + '&password='+ password +'&password_repeat='+passRep;
$.ajax({
type: "POST",
url: 'http://ittalentsapi.bashibozuk.eu/users/change-password?X-GameID=101',
data: dataString,
cache: false,
success: function(result){
	for(k in result.errors){
		$('#'+'error_'+k).html(result.errors[k]);
		console.log(k);
	}
}
});
}
);
});