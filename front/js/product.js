// Permet d'afficher l'ensemble des informations d'un produit
// sur sa page

// Permet de récupérer l'ID d'un produit à partir de l'URL
// de sa page

const getProductData = async () => {

    // Sortir le getId afin de trouver erreur
    // puis tester si response -1

    return await getRequest(`http://localhost:3000/api/products/${getURLParam(window.location.href, 'id')}`);

    // if (productUrl === 404 || productUrl === undefined) {
    //     console.log("Oups, il y a une erreur");
    // }
    // return await getRequest(productUrl);

    // if (productUrl !== 404 || productUrl !== undefined) {
    //     return await getRequest(productUrl);
    // } else {
    //     console.log("Oups, il y a une erreur");
    // }

    // const productData = await getRequest(productUrl);
    // if (productData.ok) {
    //     return productData;
    // } else {
    //     console.log("Oups, il y a une erreur !");
    // }
    // window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
}

const getElements = () => {
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const colors = document.getElementById('colors');
}

const addToBasket = async () => {
    let productData = await getProductData();
    const button = document.getElementById('addToCart');
    let quantity = document.getElementById('quantity');

    let colors = document.getElementById('colors');
    colors.addEventListener('change', (event) => {
        colors.value = event.target.value;
    })

    quantity.addEventListener('change', (event) => {
        quantity.value = event.target.value;
    })

    button.addEventListener('click', async () => {
        // let cart = await getCart();
        // const findProduct = cart.find(p => p.idColor === product.idColor);
        if (quantity.value <= 0 || quantity.value > 100) {
            alert("La quantité renseignée n'est pas valide. Veuillez renseigner un nombre entre 1 et 100 pour continuer.");
        } else {
            addCart({
                id: `${getURLParam(window.location.href, 'id')}`,
                idColor: `${getURLParam(window.location.href, 'id')}` + " " + colors.value,
                "name": `${productData.name}`,
                color: colors.value,
                "img": `${productData.imageUrl}`,
                "altTxt": `${productData.altTxt}`
            }, quantity.value)
        }
    })
}

const showProduct = async () => {
    const productData = await getProductData();

    // if (productData === 404 || productData === undefined) {
    //     console.log("Oups, il y a une erreur");
    // }
    getElements();
    const img = document.querySelector('.item__img');

    onload = window.parent.document.title = `${productData.name}`;

    title.innerHTML = `<h1 id = "title" > ${productData.name}</h1> `;
    price.innerHTML = `<span id = "price" > ${productData.price}</span> `;
    img.innerHTML = `<img src = "${productData.imageUrl}" alt = ${productData.altTxt}> `;
    description.innerHTML = `<p id = "description" > ${productData.description}</p> `;

    let colorOptions = [productData.colors];
    productData.colors.forEach((color) => {
        colorOptions += `
            <option value = "${color}" > ${color}</option>`
    });
    colors.innerHTML = colorOptions;

    addToBasket();
}

showProduct();
////////////// TEST PANIER ///////





// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// L'objectif va être de faire en sorte qu'en appelant une key
// L'ensemble des données d'un produit puisse remonter