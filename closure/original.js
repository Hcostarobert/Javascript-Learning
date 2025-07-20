function createCompteur() {
    let count = 0;
    
    return function () {
        count++;
        console.log(count);
    }
}

compteur = createCompteur();

compteur();
compteur();
compteur();