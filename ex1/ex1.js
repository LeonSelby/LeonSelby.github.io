var rest = "KLMNOPQRSTUVWXYZ".split("");

function A() {
	console.log("A");
	B();
};

function B() {
	console.log("B");
	C();
};

function C() {
	console.log("C");
	D();
}

function D() {
	console.log("D");
	E();
}

function E(f) {
	console.log("E");
	F();
}
function F() {
	console.log("F");
	G();
};

function G() {
	console.log("G");
	H();
}
function H() {
	console.log("H");
	I();
};

function I() {
	console.log("I");
	J();
}

function J() {
	console.log("J");
	K();
};

function K() {
	for (var i = 0; i < rest.length; i++) {
		(function (i) {
			console.log(rest[i])
		})(i);
	}
}

A();