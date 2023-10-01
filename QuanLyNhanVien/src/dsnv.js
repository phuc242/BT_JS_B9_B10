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
  this.capNhatNV = function (params) {};
}
