function NhanVien(
  _tk,
  _hoTen,
  _email,
  _mk,
  _ngayLam,
  _luong,
  _chucVu,
  _gioLam
) {
  this.tk = _tk;
  this.hoTen = _hoTen;
  this.email = _email;
  this.mk = _mk;
  this.ngayLam = _ngayLam;
  this.luong = _luong;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.xepLoai = "";
  this.tongLuong = 0;

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
  this.tinhLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = this.luong * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luong * 2;
    } else {
      this.tongLuong = this.luong;
    }
  };
}
