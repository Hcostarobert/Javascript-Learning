function doAfterDelay(callback, delay) {
    if (typeof callback !== "function") {
        throw new TypeError("Le callback à exécuté doit être une fonction");
    }
    if (typeof delay !== "number" || delay < 0) {
        throw new TypeError("Le delai imposé doit être un nombre positif");
    }
    
    setTimeout(callback, delay);
}

console.log("Début");
// doAfterDelay(() => { console.log("Coucou"); }, 2000);
doAfterDelay(() => { console.log("Coucou") }, 30);
console.log("Fin");