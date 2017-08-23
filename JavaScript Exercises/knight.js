pointMaker = function (x, y) {
  let pt = {};
  pt.x = x;
  pt.y = y;
  return pt;
};

const start = pointMaker(0, 0);
let count = 0;
let finished = false;
const vectorX = [2, 2, -2, -2, 1, 1, -1, -1];
const vectorY = [-1, 1, 1, -1, 2, -2, 2, -2];
var queue = [];

function arrivedBoolean(queueIn) {
  for (let entry = 0; entry < queueIn.length; entry++) {
    if (queueIn[entry].x === 0 && queueIn[entry].y === 0) {
      finished = true;
      return true;
    }else {
      return false;
    }
  }
}

function populateQueue(startingPoint) {
  for (let i = 0; i < vectorX.length; i++) {
    let possX = startingPoint.x + vectorX[i];
    let possY = startingPoint.y + vectorY[i];
    let nodeTmp = pointMaker(possX, possY);
    queue.push(nodeTmp);
      if(arrivedBoolean(queue)){
      break;
    }
  }
}

function popTmpQueue(tempo) {
  let q2 = [];
  for (let i = 0; i < vectorX.length; i++) {
    let possX = tempo.x + vectorX[i];
    let possY = tempo.y + vectorY[i];
    let nodeTmp = pointMaker(possX, possY);
    q2.push(nodeTmp);
    if(arrivedBoolean(q2)){
      break;
    }
    return q2;
  }
}

function tour() {
  // let target = pointMaker(Number(document.getElementById('x').value), Number(document.getElementById('y').value));
  let target = pointMaker(3, 4);
  let startingPoint = target;
  console.log("input tmp: " + JSON.stringify(startingPoint));
  populateQueue(startingPoint);
  while (!finished) {
    queue.forEach((a) => {
      popTmpQueue(a).forEach((b) => {
        popTmpQueue(b)
      })
    })
  }
}
tour()