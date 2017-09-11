const reqURLPokemon = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
const reqURLBASEPokemon = 'http://pokeapi.co/api/v2/pokemon/';
const imageLoc = 'https://leonselby.github.io/JavaScript%20Exercises/pokeSprites/';
let names = [];
let moves = [];
let types = [];
const br = document.createElement("br");
const request = new XMLHttpRequest();
request.open('GET', reqURLPokemon);
request.responseType = 'json';
request.send();
request.onload = function () {
    const reqData = request.response;
    const results = reqData['results'];
    results.forEach((a) => {
        names.push(a.name);
    })
    populateNameboxes();
}

function populateNameboxes() {
    let box = document.getElementsByTagName('select')[0];
    let box2 = document.getElementsByTagName('select')[1];
    names.forEach((a) => {
        let option = document.createElement('option');
        let option2 = document.createElement('option');
        option.text = a;
        option2.text = a;
        box2.add(option2, box.length)
        box.add(option, box.length)
        option.id = box.length;
        option2.id = box2.length;
    })
}

function getTypes(pokeID, cb) {
    let typenames = [];
    const request2 = new XMLHttpRequest();
    let number = pokeID;
    let reqURLBASEPokemonEdit = reqURLBASEPokemon + number + "\/";
    request2.open('GET', reqURLBASEPokemonEdit)
    request2.responseType = 'json';
    request2.send();
    request2.onload = function () {
        const reqData2 = request2.response;
        let typesResults = reqData2.types;
        typenames = [];
        typenames = typesResults.map((d) => {
            return d.type.name;
        })
    }
}

function getMoves(pokeIDa, cb) {
    const req3 = new XMLHttpRequest();
    let numberPoke = pokeIDa + 1;
    let reqURLMOVEEdit = reqURLBASEPokemon + numberPoke;
    req3.open('GET', reqURLMOVEEdit);
    req3.responseType = 'json';
    req3.send();
    req3.onload = function () {
        const reqData3 = req3.response;
        let movesResult = reqData3['moves'];
        let movesNames = [];
        movesNames = movesResult.map((c) => {
            return c.move.name
        })
        cb(movesNames);
    }
}

function clearBoxes() {
    let movesBox = document.getElementsByTagName('select')[1];
    movesBox.childNodes.forEach(z => {
        movesBox.removeChild(z);
    })
}

function populateMovesBox(pokemonID) {
    let metabox = document.getElementById('formoves');
    let movesBox = document.createElement('select');
    movesBox.id = "movesboxx";
    if (metabox.hasChildNodes()) {
        metabox.removeChild(metabox.childNodes[0]);
    }
    metabox.appendChild(movesBox);
    getMoves(pokemonID, (movesNames) => {
        movesNames.forEach((b) => {
            let moveOption = document.createElement('option');
            moveOption.text = b;
            movesBox.add(moveOption, movesBox.length);
            moveOption.id = movesBox.length;
        })
    });
}

function placeImageAtk(numID) {
    let numberID = numID + 1;
    let imageLocID = imageLoc + numberID + ".png";
    let ele = document.getElementById("attackingpokemon");
    if (ele.hasChildNodes()) {
        ele.removeChild(ele.childNodes[0]);
    }
    let image = document.createElement('img');
    image.id = numberID;
    image.src = imageLocID;
    ele.appendChild(image);
}

function placeImageDef(numID) {
    let numberID = numID + 1;
    let imageLocID = imageLoc + numberID + ".png";
    let el = document.getElementById("defendingpokemon");
    if (el.hasChildNodes()) {
        el.removeChild(el.childNodes[0]);
    }
    let image = document.createElement('img');
    image.id = numberID;
    image.src = imageLocID;
    el.appendChild(image);
}

function selectPokeMethod(numIDatk, numIDdef) {
    placeImages(numIDatk, numIDdef);
    populateMovesBox(numIDatk);
}

function placeImages(numIDatk, numIDdef) {
    placeImageAtk(numIDatk);
    placeImageDef(numIDdef);
}