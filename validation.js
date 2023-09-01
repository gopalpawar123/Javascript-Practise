var txt_uname = document.querySelector("#uname");
console.log(txt_uname);

// txt_uname.onkeyup= chk_uname;
// txt_uname.onblur= chk_uname;

txt_uname.onkeyup = chk_uname;
txt_uname.onblur = chk_uname;

function chk_uname() {
  var textBoxValue = txt_uname.value;
  console.log(Math.random(), textBoxValue);

  var reg_username = /^[a-zA-z]([a-zA-z ]+)?[a-zA-z]$/;
  var result = reg_username.test(textBoxValue);
  console.log(result);

  if (result) {
    txt_uname.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_uname.nextElementSibling.style.display = "block";
    return false;
  }
}

// ----------------------------------------------------

var txt_umobile = document.querySelector("#umobile");
console.log(txt_umobile);

txt_umobile.onkeyup = chk_umobile;
txt_umobile.onblur = chk_umobile;

function chk_umobile() {
  var textBoxValue = txt_umobile.value;
  // console.log(Math.random(), textBoxValue);

  var reg_mobile = /^[1-9][0-9]{9}$/;
  var result = reg_mobile.test(textBoxValue);
  console.log(result);

  if (result) {
    txt_umobile.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_umobile.nextElementSibling.style.display = "block";
    return false;
  }
}

// ----------------------------------------------------

var txt_uemail = document.querySelector("#uemail");
console.log(txt_uemail);

txt_uemail.onkeyup = chk_uemail;
txt_uemail.onblur = chk_uemail;

function chk_uemail() {
  var textBoxValue = txt_uemail.value;
  // console.log(Math.random(), textBoxValue);

  var reg_email =
    /^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@(([a-zA-Z0-9]([a-zA-z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-z]{2,})(\.[a-zA-Z]{2,})?)$/;
  var result = reg_email.test(textBoxValue);
  console.log(result);

  if (result) {
    txt_uemail.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_uemail.nextElementSibling.style.display = "block";
    return false;
  }
}

// ----------------------------------------------------

var txt_upass = document.querySelector("#upass");
console.log(txt_upass);

txt_upass.onkeyup = chk_upass;
txt_upass.onblur = chk_upass;

function chk_upass(){
  var textBoxValue = txt_upass.value;
  // console.log(Math.random(), textBoxValue);
    var reg_pass = /^[a-zA-Z0-9]{4,12}$/;
  var result = reg_pass.test(textBoxValue);
  console.log(result);

  if (result){
    txt_upass.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_upass.nextElementSibling.style.display = "block";
    return false;
  }
}

// ---------------------------------------------------------------------    


var txt_ucpass = document.querySelector("#ucpass");
console.log(txt_ucpass);

txt_ucpass.onkeyup = chk_ucpass;
txt_ucpass.onblur = chk_ucpass;

function chk_ucpass(){
    var textBoxValue = txt_ucpass.value;
 

  if (textBoxValue==txt_upass.value && textBoxValue!=''){
    txt_ucpass.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_ucpass.nextElementSibling.style.display = "block";
    return false;
  }
}

// -------------------------------------

function captcha(){
    var no1= Math.ceil(10*Math.random());
    var no2= Math.ceil(10*Math.random());
    console.log(no1);
    console.log(no2);

    var msg= `Enter ${no1} + ${no2}`;
    console.log(msg);
    document.getElementById('message').innerHTML=msg;
    return no1+no2;
}

var ans_cap=captcha();
console.log(ans_cap);

// --------------------------------------------
var txt_ucap = document.querySelector("#ucap");
console.log(txt_ucap);

txt_ucap.onkeyup = chk_ucap;
txt_ucap.onblur = chk_ucap;

function chk_ucap(){
  var textBoxValue = txt_ucap.value;
  if (textBoxValue==ans_cap&&textBoxValue!=''){
    txt_ucap.nextElementSibling.style.display = "none";
    return true;
  } else {
    txt_ucap.nextElementSibling.style.display = "block";
    return false;
  }
}

// ----------------------------------------
document.getElementById('btn').onclick=function(){
    console.log(chk_uname());
    console.log(chk_uemail());
    console.log(chk_umobile());
    console.log(chk_upass());
    console.log(chk_ucpass());
    console.log(chk_ucap());

    if(chk_uname()&& chk_uemail() && chk_umobile() && chk_upass() && chk_ucpass()&& chk_ucap()){
        alert("FORM VALIDATION COMPLETED");
    }
}
