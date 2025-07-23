// Crée une fonction doAfterDelay(callback, delay) qui exécute le callback après un certain temps.
// doAfterDelay(() => console.log("Fait !"), 3000);

function doAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}

console.log("Début");
doAfterDelay(() => {console.log("Bonjours");}, 2000);
console.log("Fin");