<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>ARMs</title>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
	<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="js/rollups/aes.js"></script>
        <script src="js/main.js"></script>
	
    </head>
    <body>
        <div id="header">
            vesh's sooper sekrit decrypto thingy!!!
        </div>
        <div class="frmSubmit">
        <form action="#" method="post" name="frmMessage" id="message" class="frmClass">
            <textarea id="txtMessage" cols="40" rows="10"></textarea></br>
            <input type="text" id="txtOtp" maxlength="10"></br>
            <input type="button" id="btnProcess" value="Decrypt Message" onclick="decrypt(txtMessage.value,txtOtp.value)"></br>
        </form>
        </div>
    </body>
</html>

