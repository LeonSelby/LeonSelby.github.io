let time = 0;
let completedWardens = []
const route1 = [12, 23, 15, 2, 8, 20, 21, 3, 23, 3, 24, 20, 0, 12, 23, 15, 2, 8, 20, 21, 3, 23, 3, 24, 20, 0, 12, 23, 15, 2, 8, 20, 21, 3, 23, 3, 24, 20, 0];
const route2 = [21, 14, 8, 20, 10, 0, 23, 3, 24, 23, 0, 19, 14, 12, 10, 9, 12, 12, 11, 6, 27, 5, 21, 14, 8, 20, 10, 0, 23, 3, 24, 23, 0, 19, 14, 12, 10, 9, 12, 12, 11, 6, 27, 5];
const route3 = [8, 18, 27, 10, 11, 22, 29, 23, 14, 8, 18, 27, 10, 11, 22, 29, 23, 14, 8, 18, 27, 10, 11, 22, 29, 23, 14];
const route4 = [13, 7, 14, 1, 9, 14, 16, 12, 0, 10, 13, 19, 16, 17, 13, 7, 14, 1, 9, 14, 16, 12, 0, 10, 13, 19, 16, 17, 13, 7, 14, 1, 9, 14, 16, 12, 0, 10, 13, 19, 16, 17];
const route5 = [24, 25, 21, 4, 6, 19, 1, 3, 26, 11, 22, 28, 14, 14, 27, 7, 20, 8, 7, 4, 1, 8, 10, 18, 21];
const route6 = [13, 20, 26, 22, 6, 5, 6, 23, 26, 2, 21, 16, 26, 24, 13, 20, 26, 22, 6, 5, 6, 23, 26, 2, 21, 16, 26, 24, 13, 20, 26, 22, 6, 5, 6, 23, 26, 2, 21, 16, 26, 24];
const route7 = [6, 7, 17, 2, 22, 23, 21, 6, 7, 17, 2, 22, 23, 21, 6, 7, 17, 2, 22, 23, 21, 6, 7, 17, 2, 22, 23, 21, 6, 7, 17, 2, 22, 23, 21, 6, 7, 17, 2, 22, 23, 21];
const route8 = [23, 14, 22, 28, 10, 23, 7, 21, 3, 20, 24, 23, 8, 8, 21, 13, 15, 6, 9, 17, 27, 17, 13, 14];
const route9 = [23, 13, 1, 15, 5, 16, 7, 26, 22, 29, 17, 3, 14, 16, 16, 18, 6, 10, 3, 14, 10, 17, 27, 25];
const route10 = [25, 28, 5, 21, 8, 10, 27, 21, 23, 28, 7, 20, 6, 6, 9, 29, 27, 26, 24, 3, 12, 10, 21, 10, 12, 17];
const route11 = [26, 22, 26, 13, 10, 19, 3, 15, 2, 3, 25, 29, 25, 19, 19, 24, 1, 26, 22, 10, 17, 19, 28, 11, 22, 2, 13];
const route12 = [8, 4, 25, 15, 20, 9, 11, 3, 19, 8, 4, 25, 15, 20, 9, 11, 3, 19, 8, 4, 25, 15, 20, 9, 11, 3, 19];
const route13 = [24, 29, 4, 17, 2, 0, 8, 19, 11, 28, 13, 4, 16, 5, 15, 25, 16, 5, 6, 1, 0, 19, 7, 4, 6];
const route14 = [16, 25, 15, 17, 20, 27, 1, 11, 1, 18, 14, 23, 27, 25, 26, 17, 1, 16, 25, 15, 17, 20, 27, 1, 11, 1, 18, 14, 23, 27, 25, 26, 17, 1];

const routes = [route1, route2, route3, route4, route5, route6, route7, route8, route9, route10, route11, route12, route13, route14];

let wardenA = "a";
let wardenB = "b";
let wardenC = "c";
let wardenD = "d";
let wardenE = "e";
let wardenF = "f";
let wardenG = "g";
let wardenH = "h";
let wardenI = "i";
let wardenJ = "j";
let wardenK = "k";
let wardenL = "l";
let wardenM = "m";
let wardenN = "n";

const wardens = [wardenA, wardenB, wardenC, wardenD, wardenE, wardenF, wardenG, wardenH, wardenI, wardenJ, wardenK, wardenL, wardenM, wardenN];

function mergeGossip() {
    do {
        for (let m = 0; m < wardens.length; m++) {
            let wardentest = wardens[m];

            routes.map((ro) => {
                checkOtherRoutesAtIndex(ro, time, wardentest);
            })
            checkLengths();
            checkCompletedArray();
        }
    } while (!checkCompletedArray)
}


function checkLengths() {
    wardens.forEach((warden) => {
        if (warden.length === 14) {
            completedWardens.push(warden);
        }
    })
}

function checkCompletedArray() {
    return completedWardens.length === 14;
}


function checkIdentical(warden1, warden2) {
    return warden1 === warden2;
}

function checkOtherRoutesAtIndex(route, index, warden1) {
    for (let j = 0; j < routes.length; j++) {
        if (route[index] === routes[j][index]) {
            if (!checkIdentical(warden1, wardens[j])) {
                warden1 = warden1 + wardens[j];
                warden1 = sortAlphabetically(warden1);
                warden1 = removeDupes(warden1);
                wardens[j] = warden1;
            }
        }
    }
    checkCompletedArray();
    time++;
    console.log(time)
    console.log(completedWardens)
}

function sortAlphabetically(text) {
    return text.split('').sort().join('');
};

function removeDupes(text) {
    strArray = text.split('');
    for (let z = 0; z < 20; z++) {
        for (let k = 0; k < text.length - 1; k++) {
            if (strArray[k] === strArray[k + 1]) {
                strArray.splice(k, 1);
            }
        }
    }
    let output = strArray.join('');
    return output;
}

//FUNCTION CALLS
// console.log("comp wardens" + completedWardens)
mergeGossip();
console.log("comp wardens END" + completedWardens)
console.log("Time" + time)



