var dsnv = new DanhSachNhanVien();

function getele(id) {
  return document.getElementById(id);
}
function layThongTinNhanVien() {
  var _tk = getele("tknv").value;
  var _hoTen = getele("name").value;
  var _email = getele("email").value;
  var _mk = getele("password").value;
  var _ngayLam = getele("datepicker").value;
  var _luong = getele("luongCB").value * 1;
  var _chucVu = getele("chucvu").value;
  var _gioLam = getele("gioLam").value * 1;
  // Validation

  var nv = new NhanVien(
    _tk,
    _hoTen,
    _email,
    _mk,
    _ngayLam,
    _luong,
    _chucVu,
    _gioLam
  );
  nv.xepLoai();
  nv.tinhLuong();
  return nv;
}
function themNhanVien() {
  var nv = layThongTinNhanVien();
  dsnv._themNV(nv);
  renderListNV(dsnv.arr);
}

function renderListNV(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `
    <tr>
    <td>${nv.tk}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoai}</td>
    </tr>
    `;
  }
  getele("tableDanhSach").innerHTML = content;
}
