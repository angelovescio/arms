<?php 
session_start();
$errors = '';

if(isset($_POST['submit']))
{
	///------------Do Validations-------------
	if(empty($_SESSION['6_letters_code'] ) ||
	  strcasecmp($_SESSION['6_letters_code'], $_POST['6_letters_code']) != 0)
	{
	//Note: the captcha code is compared case insensitively.
	//if you want case sensitive match, update the check above to
	// strcmp()
		$errors .= "\n The captcha code does not match!";
	}

	if(empty($errors))
	{
		//send the email
	}
}
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>ARMs</title>
        <meta name="description" content="">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="js/rollups/aes.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
                <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="header">
            vesh's sooper sekrit crypto thingy!!!
        </div>
        <div class="frmSubmit">
        <form action="#" method="post" name="frmMessage" id="message" class="frmClass">
            <textarea id="txtMessage" onblur="fillTxtArea(this,'Input message text here...')" onfocus="clearBox(this,'Input message text here...')" cols="40" rows="10">Input message text here...</textarea></br>
            <input type="file" value="File to Upload" id="upFile"></br>
            <input type="text" contenteditable="false" readonly="true" id="txtOtp" maxlength="10"></br>
            <label>Message Destination: </label> <input type="text" onfocus="clearBox(this,'email@example.com')"
                                                        onblur="checkEmail(this,this.value,'email@example.com')" id="txtEmail" value="email@example.com" maxlength="50"></br>
            <label>OTP Destination: </label> <input type="text" onfocus="clearBox(this,'(555) 867-5309 or email@notExample.com')"
                                                    onblur="checkOtp(this,this.value,'(555) 867-5309 or email@notExample.com')" id="txtOtpSend"
                                                    value="(555) 867-5309 or email@notExample.com" maxlength="50"></br>
		<img src="captcha.php?rand=<?php echo rand(); ?>" id="captchaimg" ></br>
		<label for="message">Enter the code above here :</label>
		<input id="6_letters_code" name="6_letters_code" type="text"></br>
		<label for="apikey">Enter your mandrill API key here:</label>
		<input id="apikey" name="apikey" type="text"></br>
		<small>Can't read the image? click <a href='javascript: refreshCaptcha();'>here</a> to refresh</small></br>
		<input type="button" id="btnProcess" value="Send Message" onclick="process(apikey.value)"></br>
        </form>
        </div>
        <div class="otpLabels">
        <label id="lbl0">
        </label></br>
        <label id="lbl1">
        </label></br>
        <label id="lbl2">
        </label></br>
        <label id="lbl3">
        </label></br>
        <label id="lbl4">
        </label></br>
        <label id="lbl5">
        </label></br>
        <label id="lbl6">
        </label></br>
        <label id="lbl7">
        </label></br>
        <label id="lbl8">
        </label></br>
        <label id="lbl9">
        </label>
	</div>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-{{JQUERY_VERSION}}.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
