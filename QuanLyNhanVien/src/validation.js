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
function kiemTraDoDaiKyTu(value, min, max, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);

  if (value.length < min || value.length > max) {
    domSpan.innerHTML = mess;
    return false;
  } else {
    domSpan.innerHTML = "";
    return true;
  }
}

function kiemTraKyTu(value, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  var regexString = /^[a-zA-Z ]+$/;
  var isValid = regexString.test(value);
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

  if (isValid == true) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
function kiemTraPass(pass, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  var regexPass =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,10}$/;

  var isValid = regexPass.test(pass);
  if (isValid == true) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
function kiemLuong(value, min, max, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  if (value < min || value > max) {
    // sai
    domSpan.innerHTML = mess;
    return false;
  } else {
    domSpan.innerHTML = "";
    return true;
  }
}
function kiemTraChucVu(idSelect, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  var domSelect = document.getElementById(idSelect).selectedIndex;
  if (domSelect == 0) {
    domSpan.innerHTML = mess;
    return false;
  } else {
    domSpan.innerHTML = "";
    return true;
  }
}
function kiemGioLam(value, min, max, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  if (value < min || value > max) {
    domSpan.innerHTML = mess;
    return false;
  } else {
    domSpan.innerHTML = "";
    return true;
  }
}
function dinhDangNgay(value, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);
  var regexDate =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  var isValid = regexDate.test(value);
  if (isValid == true) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
function kiemTraSo(value, idCanhBao, mess) {
  var domSpan = document.getElementById(idCanhBao);

  var regexNumber = /^\d+$/;

  var isValid = regexNumber.test(value);
  console.log(isValid);
  if (isValid) {
    domSpan.innerHTML = "";
    return true;
  } else {
    domSpan.innerHTML = mess;
    return false;
  }
}
