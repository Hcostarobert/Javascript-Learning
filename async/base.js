function delayedLog() {
    setTimeout(() => {
        console.log("Coucou");
    }, 2000);
}

console.log("Début");
delayedLog();
console.log("Fin");