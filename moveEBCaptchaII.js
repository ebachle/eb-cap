$(document).ready(function(){
	
	var insertedCaptcha = $('#captcha_image').parent().html();	//get the html for the captcha area
	$('#captcha_image').parent().parent().hide();				//hide the original captcha row

	insertedCaptcha = "<div id=\"insertedCaptcha\" style=\"margin-bottom: 7px;\">" + insertedCaptcha + "</div>";	//wrap the inserted section (just to make my life a little easier)

	$('input.button').eq(0).before(insertedCaptcha);			//insert the new captcha
	
	$('#insertedCaptcha input[name="security_code"]').on('keyup', function(){	//on keyup in the captcha input
		var captchaCode = $('#insertedCaptcha input.inputbox').val();			//get the value from the inserted captcha
		$('input[name="security_code"]').eq(1).val(captchaCode);				//insert the captcha
	});

	$('input.button').eq(3).parent().parent().hide();			//hide the original button row
	$('#captcha_image').css({'padding-top': '7px'});			//pad the captcha image

	$('#insertedCaptcha .inputbox').attr("placeholder", "Type Validation Code Here");

});
