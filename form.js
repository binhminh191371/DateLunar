const ngay_sinhInput = document.getElementById("ngay_sinh");
const ngay_am = document.getElementById("ngay_am");
const sinh_menh = document.getElementById("menh");
function validateForm() {
  let hoDem = document.getElementById("ho_dem").value;
  let ten = document.getElementById("ten").value;
  let ngaySinh = document.getElementById("ngay_sinh").value;
  let soDienThoai = document.getElementById("so_dien_thoai").value;
  let email = document.getElementById("email").value;

  if (hoDem.length < 2 || ten.length < 2) {
    alert("Họ đệm và tên phải có ít nhất 2 ký tự.");
    return false;
  }

  let dateRegex = /^\d{4}-\d{2}-\d{2}$/; 
  if (!dateRegex.test(ngaySinh)) {
    alert("Ngày sinh không hợp lệ.");
    return false;
  }

  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(soDienThoai)) {
    alert("Số điện thoại không hợp lệ.");
    return false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ.");
    return false;
  }
  return true;
}

ngay_sinhInput.addEventListener("change", () => {
  var ketQuaNS = ngay_sinhInput.value;
  var ngaysinhArr = ketQuaNS.split("-").map((str) => parseInt(str));
  var moonTimes = moonTime({
    year: ngaysinhArr[0],
    month: ngaysinhArr[1],
    day: ngaysinhArr[2],
  });
  var ketQuaNA = ngay_am.value;
  var ngayamArr = ketQuaNA.split("-").map((str) => parseInt(str));
  ngayamArr[0] = moonTimes.year;
  ngayamArr[1] = moonTimes.month > 9 ? moonTimes.month : "0" + moonTimes.month;
  ngayamArr[2] = moonTimes.day > 9 ? moonTimes.day : "0" + moonTimes.day;
  var ngayamString = [...ngayamArr].map((num) => num.toString());
  var formDate = ngayamString.join("-");
  ngay_am.value = formDate;
 

  function tinhMenh(nam) {
    var canChiNam = tinhCanChiNam(nam);

    var nguHanh = tinhNguHanh(canChiNam);

    var menh = tinhMenhTuNguHanh(nguHanh);

    return menh;
  }

  function tinhCanChiNam(nam) {
    var can = (nam - 4) % 10;
    var chi = (nam - 4) % 12;

    var canArr = [
      "Giáp",
      "Ất",
      "Bính",
      "Đinh",
      "Mậu",
      "Kỷ",
      "Canh",
      "Tân",
      "Nhâm",
      "Quý",
    ];
    var chiArr = [
      "Tý",
      "Sửu",
      "Dần",
      "Mão",
      "Thìn",
      "Tỵ",
      "Ngọ",
      "Mùi",
      "Thân",
      "Dậu",
      "Tuất",
      "Hợi",
    ];

    var canChi = canArr[can] + " " + chiArr[chi];
    return canChi;
  }

  function tinhNguHanh(canChi) {
    var nguHanh = "";

    if (canChi.includes("Giáp") || canChi.includes("Ất")) {
      nguHanh = "Mộc";
    } else if (canChi.includes("Bính") || canChi.includes("Đinh")) {
      nguHanh = "Hoả";
    } else if (canChi.includes("Mậu") || canChi.includes("Kỷ")) {
      nguHanh = "Thổ";
    } else if (canChi.includes("Canh") || canChi.includes("Tân")) {
      nguHanh = "Kim";
    } else if (canChi.includes("Nhâm") || canChi.includes("Quý")) {
      nguHanh = "Thủy";
    }

    return nguHanh;
  }

  function tinhMenhTuNguHanh(nguHanh) {
    var menh = "";

    switch (nguHanh) {
      case "Mộc":
        menh = "Mệnh Mộc";
        break;
      case "Hoả":
        menh = "Mệnh Hoả";
        break;
      case "Thổ":
        menh = "Mệnh Thổ";
        break;
      case "Kim":
        menh = "Mệnh Kim";
        break;
      case "Thủy":
        menh = "Mệnh Thủy";
        break;
      default:
        menh = "Không xác định";
        break;
    }

    return menh;
  }


  var namSinh = ngayamArr[0];

  var menh = tinhMenh(namSinh);
  sinh_menh.value = menh;
});



