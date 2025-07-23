function faireEtapeUnSync(init) {
    return init + 1;
}

function faireEtapeDeuxSync(init) {
    return init + 2;
}

function faireEtapeTroisSync(init) {
    return init + 3;
}

function faireOperationSync() {
    let result = 0;
    result = faireEtapeUnSync(result);
    result = faireEtapeDeuxSync(result);
    result = faireEtapeTroisSync(result);
    console.log(`Le resultat est ${result}`);
}

console.log("Debut");
faireOperationSync();
console.log("Fin");

function faireEtapeUnAsync(init, callback) {
    callback(init + 1);
}

function faireEtapeDeuxAsync(init, callback) {
    callback(init + 2);
}

function faireEtapeTroisAsync(init, callback) {
    callback(init + 3);
}

function faireOperationAsync() {
    let final = 0;
    faireEtapeUnAsync(final, (result1) => {
        faireEtapeDeuxAsync(result1, (result2) => {
            faireEtapeTroisAsync(result2, (result3) => { final = result3} );
        });
    });
    console.log(`Le resultat est ${final}`);
}

console.log("Debut");
faireOperationAsync();
console.log("Fin");