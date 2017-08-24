const reqURLPokemon = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
// const reqURLMoves = 'https://pokeapi.co/api/v2/move-damage-class/1';
let names = []
const br = document.createElement("br");
const request = new XMLHttpRequest();
request.open('GET', reqURLPokemon);
request.responseType = 'json';
request.send();
request.onload = function () {

    const reqData = request.response;
    const results = reqData['results'];
    let bulbasaur = results[0].name;
  
    results.forEach((a) => {
        names.push(a.name);
    })
    populateNamebox1();
}

function populateNamebox1() {
    document.getElementsByTagName('select')[0].innerHTML = names;
}
