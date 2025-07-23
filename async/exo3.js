// Enchaîne 3 setTimeout pour afficher :
// "Étape 1" après 1s,
// "Étape 2" après 2s,
// "Étape 3" après 3s.

// Utilise des callbacks imbriqués.

console.log("Début");
setTimeout(() => {
    console.log("Etape 1");
    setTimeout(() => {
        console.log("Etape 2");
        setTimeout(() => {
            console.log("Etape 3");
        }, 1000);
    }, 1000);
}, 1000);
console.log("Fin");