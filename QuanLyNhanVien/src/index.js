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
  var isValid = true;
  // kiểm tra ngày
  isValid &=
    kiemTraRong(_ngayLam, "tbNgay", "Vui lòng không để trống") &&
    dinhDangNgay(_ngayLam, "tbNgay", "Vui lòng nhập đúng định dạng dd/mm/yyyy");

  // Kiểm tra tài khoản
  isValid &=
    kiemTraRong(_tk, "tbTKNV", "Vui lòng không để trống") &&
    kiemTraDoDaiKyTu(_tk, 4, 6, "tbTKNV", "Vui lòng nhập từ 4 đến 6 ký tự ");
  // kiểm tra tên
  isValid &=
    kiemTraRong(_hoTen, "tbTen", "Vui lòng không để trống") &&
    kiemTraKyTu(_hoTen, "tbTen", "Vui lòng không nhập số");
  // kiểm tra email
  isValid &=
    kiemTraRong(_email, "tbEmail", "Vui lòng không để trống") &&
    kiemTraEmail(_email, "tbEmail", "Vui lòng nhập đúng Email");
  // kiểm tra mật khẩu
  isValid &=
    kiemTraRong(_mk, "tbMatKhau", "Vui lòng không để trống") &&
    kiemTraDoDaiKyTu(
      _mk,
      6,
      10,
      "tbMatKhau",
      "Vui lòng nhập từ 6 đến 10 ký tự"
    ) &&
    kiemTraPass(
      _mk,
      "tbMatKhau",
      "Vui lòng nhập có chứa ít nhất 1 số , 1 ký tự in hoa , 1 ký tự đặc biệt"
    );
  // kiểm tra lương
  isValid &=
    kiemTraRong(_luong, "tbLuongCB", "Vui lòng không để trống") &&
    kiemTraSo(_luong, "tbLuongCB", "Vui lòng nhập số") &&
    kiemLuong(_luong, 1000000, 20000000, "tbLuongCB", "Nhập từ 1tr đến 20tr");
  // kiểm tra chức vụ
  isValid &= kiemTraChucVu("chucvu", "tbChucVu", "Vui lòng chọn chức vụ");
  // kiểm tra giờ làm
  isValid &= kiemGioLam(
    _gioLam,
    80,
    200,
    "tbGiolam",
    "Nhập từ 80 đến 200 tiếng"
  );

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
  if (nv) {
    dsnv._themNV(nv);
    renderListNV(dsnv.arr);
  }
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
