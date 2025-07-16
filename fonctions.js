// Ecris une fonction qui prend deux nombres et retourne leur somme.
function somme(a, b) {
    return a + b;
}
console.log(somme(1,2))
// Déclare cette même fonction en version fléchée.
const somme_fleche = (a, b) => a + b;
console.log(somme_fleche(2,3));
// Crée une fonction qui prend un tableau de nombres et retourne le plus grand.
const tab = [3, 34, 1];
const plus_grand = function (tab) {
    max = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i]
        }
    }
    console.log(max)
}
plus_grand(tab)