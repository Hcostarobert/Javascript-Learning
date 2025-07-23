fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`résultat obtenue : ${response.status}`);
})

console.log("requête initié...");