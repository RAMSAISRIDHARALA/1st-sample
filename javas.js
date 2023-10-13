const form = document.getElementById("form");
var username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const loginusername =document.getElementById("loginusername");
const loginpassword = document.getElementById("loginpassword");
const form1 =document.getElementById("form1");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    checkinput();
} );
btn1.addEventListener("click",(e) => {
    e.preventDefault();
    checklogininput();
} );
function checklogininput(){
    var loginusernamevalue =loginusername.value.trim();
    var loginpasswordvalue =loginpassword.value.trim();
    document.getElementById("pass2").innerHTML=loginpasswordvalue;
    //document.getElementById("haa").innerHTML=usernamevalue
    //document.getElementById("pass2").innerHTML=usernamevalue



    if(loginusernamevalue ==="avi"){
        setsuccessfor1(loginusername);
    }
    else if(loginusernamevalue === "") {
        seterrorfor1(loginusername,"username cannot be blank");

    } 
    else {
        seterrorfor1(loginusername,"username not matched");
 }

 if(loginpasswordvalue ==="") {
    seterrorfor1(loginpassword,"password cannot be blank");
}
else if(loginpasswordvalue ==="444"){
    setsuccessfor1(loginpassword);

}
else{
    seterrorfor1(loginpassword);
    //document.getElementById("pass1").innerHTML=passwordvalue;
}

}
function checkinput(){
    var usernamevalue=username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue =password.value.trim();
    const password2value = password2.value.trim();
    //document.getElementById("pass1").innerHTML=usernamevalue

    if( usernamevalue === "") {
        seterrorfor(username,"username cannot be blank");
    }
    else{
        setsuccessfor(username);
    }

    if(emailvalue ==="") {
        seterrorfor(email,"email cannot be blank");
    }
    else{
        setsuccessfor(email);
    }

    if(passwordvalue ==="") {
        seterrorfor(password,"password cannot be blank");
    }
    else{
        setsuccessfor(password);
        //document.getElementById("pass1").innerHTML=passwordvalue;
    }

    if(password2value ==="") {
        seterrorfor(password2,"password cannot be blank");
    }
    else if(passwordvalue !== password2value) {
        seterrorfor(password2,"not matched");
    }
    else{
        setsuccessfor(password2);
    }
}
function seterrorfor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");

    small.innerText=message;
    formcontrol.className ='form_control error';
}

function setsuccessfor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form_control success'; 
}


function seterrorfor1(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");

    small.innerText=message;
    formcontrol.className ='user-box error';
}

function setsuccessfor1(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'user-box success'; 
}
