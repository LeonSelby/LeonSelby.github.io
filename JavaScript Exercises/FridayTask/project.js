
const bodyEle = document.getElementById('body')
const formEle = document.getElementById('wrapperDiv')
const formEle2 = document.getElementsByName('wrapperDiv')
const image = document.getElementById('picture')
const para = document.createElement('p')

let counter = 0;
let example = "please please"
let example2 = "work"

function test() {
    let form = document.getElementById("formID");
    return image != null
}

console.log(image!=null)
console.log(formEle!=null)
console.log(formEle2!=null)
console.log(bodyEle!=null)


function testAppend(){
// bodyEle.appendChild(para);
// formEle.appendChild(para);
// image.appendChild(para);
}

testAppend();
