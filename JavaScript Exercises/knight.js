pointMaker = function (x, y) {
  let pt = {};
  pt.x = x;
  pt.y = y;
  return pt;
}

// const v1 = pointMaker(1, 2);
// const v2 = pointMaker(1, -2);
// const v3 = pointMaker(-1, -2);
// const v4 = pointMaker(-1, 2);
// const v5 = pointMaker(-2, -1);
// const v6 = pointMaker(-2, 1);
// const v7 = pointMaker(2, 1);
// const v8 = pointMaker(2, -1);

//EXPECT 5 ""
// const start = pointMaker(0, 0);

function tour() {
  let target = pointMaker(Number(document.getElementById('x').value), Number(document.getElementById('y').value));
  let count = 0;
  let tmp = target;
  console.log(JSON.stringify(tmp));
  do {
    if (tmp.x >= 2 && tmp.y >= 1 && tmp.x > tmp.y) { // BOTH POS
      tmp.x -= 2;
      tmp.y -= 1;
      count++;
      console.log("1st " + count);
    } else if (tmp.x >= 1 && tmp.y >= 2 && tmp.x < tmp.y) { // BOTH POS
      tmp.x -= 1;
      tmp.y -= 2;
      count++;
      console.log("2nd " + count);
    } else if (tmp.x <= -1 && tmp.y <= -2 && tmp.x > tmp.y) { // BOTH NEG
      tmp.x += 1;
      tmp.y += 2;
      count++;
      console.log("3rd " + count);
    } else if (tmp.x <= -2 && tmp.y <= -1 && tmp.x < tmp.y) { // BOTH NEG
      tmp.x += 2;
      tmp.y += 1;
      count++;
      console.log("4th " + count);
    } else if (tmp.x <= -1 && tmp.y >= 2 && tmp.x < tmp.y) { //X is NEG
      tmp.x += 1;
      tmp.y -= 2;
      count++;
      console.log("5th " + count);

    } else if (tmp.x <= -2 && tmp.y >= 1 && tmp.x < tmp.y) { //X is NEG
      tmp.x += 2;
      tmp.y -= 1;
      count++;
      console.log("6th " + count);
    } else if (tmp.x >= 1 && tmp.y <= -2 && tmp.x > tmp.y) { //Y is NEG
      tmp.x -= 1;
      tmp.y += 2;
      count++;
      console.log("7th " + count);
    } else if (tmp.x >= 2 && tmp.y >= -1 && tmp.x > tmp.y) { //Y is NEG
      tmp.x -= 2;
      tmp.y += 1;
      count++;
      console.log("8th " + count);
    } else if (tmp.x === tmp.y && tmp.x !== 0) {
      tmp.x -= 2;
      tmp.y -= 1;
      count++;
      console.log("end " + count);
    }
  }
  while (tmp.x !== 0 && tmp.y !== 0);
  alert("Solution: " + count);
}