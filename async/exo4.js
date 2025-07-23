// Crée une fonction wait(ms) qui retourne une Promise qui se résout après ms millisecondes.
// wait(2000).then(() => console.log("2 secondes plus tard..."));

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log() }, ms);
    })
}

console.log("Début");
wait(3000);
console.log("Fin");