fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
fetchPromise.then((response) => {
    console.log(`Status obtenu : ${response.status}`);
    jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(`Contenu de la réponse : ${data[0].name}`);
    });
});