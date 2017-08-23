pointMaker = function (x, y) {
  let pt = {};
  pt.x = x;
  pt.y = y;
  return pt;
};

const start = pointMaker(0, 0);
let count = 0;

const vectorX = [2, 2, -2, -2, 1, 1, -1, -1];
const vectorY = [-1, 1, 1, -1, 2, -2, 2, -2];

var queue = [];

function tour() {
  // let target = pointMaker(Number(document.getElementById('x').value), Number(document.getElementById('y').value));
  let target = pointMaker(3, 4);
  let tmp = target;
  let i = 1;
  console.log("input tmp: " + JSON.stringify(tmp));

  populateQueue(tmp);

  queue.forEach((a) => {
    populateQueue(a).forEach((b) => {
      populateQueue(b)
    })
  })
}

function populateQueue(temp) {
  count++;
  let q2 = [];
  for (let i = 0; i < vectorX.length; i++) {
    let possX = temp.x + vectorX[i];
    let possY = temp.y + vectorY[i];
    let nodeTmp = pointMaker(possX, possY);
    queue.push(nodeTmp);
    q2.push(nodeTmp);

    let booltmp = false;
    for (let entry = 0; entry < queue.length; entry++) {
      if (queue[entry].x === 0 && queue[entry].y === 0) {
        booltmp = true;
      }

      for (let entry = 0; entry < q2.length; entry++) {
        if (q2[entry].x === 0 && q2[entry].y === 0) {
          booltmp = true;
        }
        if (booltmp === true) {
          throw '';
        };

      }
      console.log("q2: " + JSON.stringify(q2))

      return q2;
    }
  }
}
// function arrivedBoolean(queueIn) {
//   let booltmp = false;
//   for (let entry = 0; entry < queueIn.length; entry++) {
//     if (queueIn[entry].x === 0 && queueIn[entry].y === 0) {
//       booltmp = true;
//       console.log(console.log("arrived in " + count))
//       throw "";
//       return booltmp;
//     }
//   }
//   return booltmp;
// }
tour()