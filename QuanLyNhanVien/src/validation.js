function kiemTraRong(value, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  if (value == "") {
    domSpan.innerHTML = mess;
    return false;
  } else {
    domSpan.innerHTML = "";
    return true;
  }
}
function kiemTraKyTu(value, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  var regexString = /ab+c/;
  var isValid = regexString.test(hoTen);
  if (isValid == true) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
function kiemTraEmail(email, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);

  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isValid = regexEmail.test(email);
  console.log(isValid);
  if (isValid == true) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
