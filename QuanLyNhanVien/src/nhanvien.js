function NhanVien(_tk, _hoTen, _email, _mk, _ngaySinh, _luong, _gioLam) {
  this.tk = _tk;
  this.hoTen = _hoTen;
  this.email = _email;
  this.mk = _mk;
  this.ngaySinh = _ngaySinh;
  this.luong = _luong;
  this.gioLam = _gioLam;
  this.xepLoai = "";

  this.xepLoai = function () {
    if (this.gioLam >= 195) {
      this.xepLoai = "Xuất Sắc";
    } else if (this.giolam >= 176) {
      this.xepLoai = "Giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung bình";
    }
  };
}
