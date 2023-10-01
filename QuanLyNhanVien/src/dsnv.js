function DanhSachNhanVien() {
  this.arr = [];
  this._themNV = function (nv) {
    this.arr.push(nv);
  };
  this.timViTriNV = function (tk) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      if (tk === nv.tk) {
        index = i;
        break;
      }
    }
    return index;
  };
  this._xoaNV = function (tk) {
    var index = this.timViTriNV(tk);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this._layThongTinNVTheoTk = function (tk) {
    var index = this.timViTriNV(tk);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };
  this._capNhatNV = function (nv) {
    var index = this.timViTriNV(nv.tk);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };
  this._timKiemNV = function () {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];

      var keywordLowerCase = keyword.toLowerCase();

      var xepLoaiLowerCase = nv.xepLoai.toLowerCase();
      if (xepLoaiLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    }
    return mangTimKiem;
  };
}
