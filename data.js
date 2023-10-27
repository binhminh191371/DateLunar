data = [
  {
    fullName: "Phạm Nguyên Tí",
    birthday: "1990-05-31",
  },
  {
    fullName: "Võ Nguyên Thìn",
    birthday: "2008-02-02",
  },
  {
    fullName: "Phạm Nguyên Phương",
    birthday: "1991-02-15",
  },
  {
    fullName: "Võ Nguyên Tí",
    birthday: "1998-05-28",
  },
  {
    fullName: "Vũ Văn Bình",
    birthday: "1997-05-27",
  },
  {
    fullName: "Vũ Văn Quỳnh",
    birthday: "1994-02-01",
  },
  {
    fullName: "Võ Thị Linh",
    birthday: "2001-07-19",
  },
  {
    fullName: "Bùi Văn Bình",
    birthday: "1997-10-04",
  },
  {
    fullName: "Nguyễn Văn Minh",
    birthday: "1999-01-03",
  },
  {
    fullName: "Võ Nguyên Phương",
    birthday: "2009-06-24",
  },
];


const birthdays = data.map((obj) => obj.birthday.split("-"));


// Hàm chuyển đổi Ngày Dương sang Ngày Âm
function convertToNgayAm(data) {
  const NgayAm = [];

  data.forEach((data) => {
    const year = parseInt(data[0]);
    const month = parseInt(data[1]);
    const day = parseInt(data[2]);

    const ngayDuongFormatted = moment({ year, month: month - 1, day });
    const ngayAmFormatted = ngayDuongFormatted.subtract(1, 'months');

    const lunarYear = ngayAmFormatted.year().toString();
    const lunarMonth = (ngayAmFormatted.month() + 1).toString().padStart(2, '0');
    const lunarDay = ngayAmFormatted.date().toString().padStart(2, '0');

    NgayAm.push([lunarYear, lunarMonth, lunarDay]);
  });

  return NgayAm;
}

const NgayAm = convertToNgayAm(birthdays);
 
const namAm = NgayAm.map((ngay) => ngay[0])
console.log(namAm);
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

const menhArr =  namAm.map((nam) => {
  const menh = tinhMenh(nam);
  return menh
});

data.forEach((obj, index) => {
  obj.menh = menhArr[index];
});

console.log(data);

