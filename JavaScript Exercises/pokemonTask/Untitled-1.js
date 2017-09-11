const fetch = require('node-fetch')
const imageLoc = 'https://leonselby.github.io/JavaScript%20Exercises/pokeSprites/';

async function fetchPokemonNames() {
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/?limit=151`);
    const data = await response.json();
    const results = data['results'];
    let names = [];
    results.forEach((a) => {
        names.push(a.name)
    })
    return names;
}

async function fetchPokemonMoves(PokeID) {
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${PokeID}`);
    const data = await response.json();
    let moves = data['moves'];
    moves = moves.map((c) => {
        return c.move.name
    });
    return moves;
}

async function fetchPokemonTypes(PokeID) {
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${PokeID}`);
    const data = await response.json();
    let types = data['types'];
    types = types.map((c) => {
        return c.type.name
    });
    return types;
}

async function fetchMovesTypes(MoveName) {
    const response = await fetch(`http://pokeapi.co/api/v2/move/${MoveName}`);
    const data = await response.json();
    let type = data['type'].name;
    type;
    return type;
}

fetchMovesTypes("razor-wind")

function populateNameboxes() {
    let box = document.getElementsByTagName('select')[0];
    let box2 = document.getElementsByTagName('select')[1];
    let names = fetchPokemonNames();
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
    let moves = fetchPokemonMoves(pokemonID);

    () => {
        moves.forEach((b) => {
            let moveOption = document.createElement('option');
            moveOption.text = b;
            movesBox.add(moveOption, movesBox.length);
            moveOption.id = movesBox.length;
        })
    }
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

