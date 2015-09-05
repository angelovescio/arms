function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
function refreshCaptcha()
{
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
}
var selectedLabel = "";
function getSelected(lblName) {
    var elem = document.getElementById(lblName.target.id);
    selectedLabel = elem.innerHTML;
    var txtBox = document.getElementById('txtOtp');
    txtBox.value=selectedLabel;
};
function decrypt(message,otp){
	var msg = CryptoJS.AES.decrypt(message,otp);
	alert(hex2a(msg));
};
function send(message,email,apikey) {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: JSON.stringify ({
            'key': ''+apikey+'',
            'message': {
                'from_email': 'user@email.org',
                'to': [
                    {
                        'email': ''+email+'',
                        'name': 'SecureSender',
                        'type': 'to'
                    }
                ],
                'subject': 'Your Secure Thing',
                'html': ''+message+''
            }
        }),
        contentType: "application/json; charset=utf-8",
        dataType:"json",
        success: function (result) {

        },
        error: function (err,status,thrown) {
            alert ("this syntax sucks!! " + " ERROR: " + err + " STATUS: " + status + " " + thrown );
        },
        complete: function (xhr,status) {
            console.log('Complete=>  showing status as: '+ status);
        }
    });
}
function process(apikey){
    var otp = document.getElementById('txtOtp').value;
    var msg = document.getElementById('txtMessage').value;
    var dstOtp = document.getElementById('txtOtpSend').value;
    var dstEmail = document.getElementById('txtEmail').value;
    var encrypted = CryptoJS.AES.encrypt(msg,otp);
    console.log("Encrypted blob: "+encrypted);
    console.log("Plaintext blob: "+msg);
    console.log("OTP blob: "+otp);
    console.log("API key: " +apikey);
	send(encrypted,dstEmail,apikey);
}
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkOtp(elem,item,defaultVal){
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = item.replace(/\D/g, "");
    var phone = digits.match(phoneRe);
    if(checkEmail(elem,item,defaultVal) || phone !== null)
    {
        elem.style.border="1px solid black";
        return true;
    }
    elem.style.border = "2px solid red";
    clearBox2(elem,defaultVal);
    return false;
}
function fillTxtArea(elem,defaultVal) {
       if(elem.value == '')
       {
           elem.value = defaultVal;
           elem.style.border = "2px solid red";
       }
       else{
           elem.style.border = "1px solid black";
       }
}
function checkEmail(elem,email,defaultVal) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(re.test(email))
    {
        elem.style.border="1px solid black";
        return true;
    }
    else {
        elem.style.border = "2px solid red";
        clearBox2(elem,defaultVal);
        return false;
    }
}
$(document).ready(function(){
    var array = new Uint32Array(10);
    window.crypto.getRandomValues(array);
    for (var i = 0; i < array.length; i++)
    {
        var elem = document.getElementById("lbl"+(i));
        elem.innerHTML = array[i];
        elem.addEventListener("click", getSelected);
    }
    var labelIndex = getRandomInt(0,9);
    var txtBox = document.getElementById('txtOtp');
    var randElem = document.getElementById("lbl"+labelIndex);
    txtBox.value=randElem.innerHTML;
    var txtMsgDest = document.getElementById('txtEmail');
    var txtOtpDest = document.getElementById('txtOtpSend');
    var txtArea = document.getElementById('txtMessage');
    txtMsgDest.addEventListener('onfocus', clearBox);
    txtOtpDest.addEventListener('onfocus', clearBox);
    txtArea.addEventListener('onfocus', clearBox);
});
function clearBox2(sender,defaultVal){
    if(sender.value == '')
    {
        sender.value = defaultVal;
    }
}
function clearBox(sender,defaultVal){
    if(sender.value == '')
    {
        sender.value = defaultVal;
    }
    else if(sender.value == defaultVal){
        sender.value = '';
    }
};
function getFromRandomOrg(){
    $.ajax({
        url: 'https://api.random.org/json-rpc/1/invoke',
        data: JSON.stringify ({"jsonrpc": "2.0","method": "generateStrings","params": {"apiKey": "dddddddd-dddd-dddd-dddd-dddddddddddd", "n": 8,"length": 10,"characters": "abcdefghijklmnopqrstuvwxyz","replacement": true},"id":getRandomInt(1,65535) }),  // id is needed !!
        type:"POST",
        contentType: "application/json; charset=utf-8",
        dataType:"json",
        success: function (result) {
            document.writeln(result.result.random.data);
        },
        error: function (err,status,thrown) {
            alert ("this syntax sucks!! " + " ERROR: " + err + " STATUS: " + status + " " + thrown );
        },
        complete: function (xhr,status) {
            console.log('Complete=>  showing status as: '+ status);
        }
    });
}
