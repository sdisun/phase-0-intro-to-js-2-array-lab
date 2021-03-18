const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    console.log(cats.push ("Ralph"));
}

function destructivelyPrependCat(name) {
    console.log(cats.unshift ("Bob"));
}

function destructivelyRemoveLastCat() {
    console.log(cats.pop());
}

function destructivelyRemoveFirstCat() {
    console.log(cats.shift());
}


function appendCat(name) {
    let newArray = cats.slice();
    newArray.push("Broom");
    return newArray;
}

function prependCat(name) {
    let newArrayTwo = cats.slice();
    newArrayTwo.unshift("Arnold");
    return newArrayTwo;
}

function removeLastCat() {
    let newArrayThree = cats.slice(0,-1);
    return newArrayThree;
}

function removeFirstCat() {
    let newArrayFour = cats.slice(-2);
    return newArrayFour;
}