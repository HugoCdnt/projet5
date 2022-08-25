// Permet d'afficher l'ensemble des informations d'un produit
// sur sa page

const getProductData = async () => {
    const productUrl = `http://localhost:3000/api/products/${getId()}`;
    return await getRequest(productUrl);
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
    colors.addEventListener('change', (e) => {
        colors.value = e.target.value;
    })

    quantity.addEventListener('change', (e) => {
        quantity.value = e.target.value;
    })

    button.addEventListener('click', () => {
        if (quantity.value <= 0 || quantity.value > 100) {
            alert("La quantité renseignée n'est pas valide. Veuillez renseigner un nombre entre 1 et 100 pour continuer.");
        } else {
            addCart({
                id: `${getId()}`,
                "name": `${productData.name}`,
                color: colors.value,
                "price": `${productData.price}`
            }, quantity.value)

            alert("Votre produit a bien été ajouté au panier")
        }
    })
}

const showProduct = async () => {
    const productData = await getProductData();
    getElements();
    const img = document.querySelector('.item__img');

    onload = window.parent.document.title = `${productData.name}`;


    // Moyen de faire les opérations ci-dessous "automatiquement"
    // sur une seule ligne ?
    title.innerHTML = `<h1 id="title">${productData.name}</h1>`;
    price.innerHTML = `<span id="price">${productData.price}</span>`;
    img.innerHTML = `<img src="${productData.imageUrl}" alt = ${productData.altTxt}>`
    description.innerHTML = `<p id="description">${productData.description}</p>`;

    let colorOptions = [productData.colors];
    productData.colors.forEach((color) => {
        colorOptions += `
            <option value="${color}">${color}</option>`
    });
    colors.innerHTML = colorOptions;

    addToBasket();
}

showProduct();
////////////// TEST PANIER ///////





// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// L'objectif va être de faire en sorte qu'en appelant une key
// L'ensemble des données d'un produit puisse remonter