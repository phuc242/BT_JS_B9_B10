var dsnv = new DanhSachNhanVien();

function getele(id) {
  return document.getElementById(id);
}
function layThongTinNhanVien() {
  var _tk = getele("tknv");
  var _hoTen = getele("name");
  var _email = getele("email");
  var _mk = getele("password");
  var _ngaySinh = getele("datepicker");
  var _luong = getele("luongCB");
  var _gioLam = getele("gioLam");
}

var nv = new NhanVien(_tk, _hoTen, _email, _mk, _ngaySinh);
