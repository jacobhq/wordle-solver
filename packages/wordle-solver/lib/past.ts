function getDaysArray(start: Date, end: Date) {
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
}

let daylist = getDaysArray(new Date("2018-05-01"), new Date("2018-07-01"));
let map = daylist.map((v) => v.toISOString().slice(0, 10)).join("");
console.log(map);
