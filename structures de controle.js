// Ecris une boucle qui affiche les nombres de 1 à 10.
for (let i = 1; i < 11; i++) {
    console.log(i);
}
// Utilise un if pour afficher "adulte" si l’âge est supérieur ou égal à 18, "mineur" sinon.
const age = 12;
if (age < 18) {
    console.log("Vous êtes mineur");
}
else {
    console.log("Vous êtes majeur");
}
// Utilise un switch pour afficher un message différent selon la couleur stockée dans une variable.
const couleur = "rouge";
switch (couleur) {
    default:
        console.log("Je ne reconnais pas cette couleur");
    case "jaune":
        console.log("C'est jaune !");
    case "bleu":
        console.log("C'est bleu");
    case "rouge":
        console.log("C'est rouge");
}