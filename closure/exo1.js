// Écris une fonction compteur() qui retourne une fonction.
// À chaque appel, la fonction retournée doit incrémenter un compteur interne et retourner sa valeur.

function createCompteur() {
    count = 0;
    return () => {
        count++;
        console.log(count);        
    }
}

const compteur = createCompteur();

compteur();
compteur();
compteur();