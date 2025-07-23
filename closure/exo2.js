// Écris une fonction secret(code) qui prend un mot secret en paramètre,
// et retourne une fonction verifie(test) qui retourne true si test === code, sinon false.

function secret(code) {
    code = "Hadrien";
    return (test) => {
        if (test === code) {
            return true;
        }
        else {
            return false;
        }
    }
}

verif = secret("Hadrien");

console.log(verif("Hadrien"));
