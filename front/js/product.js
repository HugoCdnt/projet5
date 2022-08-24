// Permet d'afficher l'ensemble des informations d'un produit
// sur sa page

const showProduct = async () => {
    let productData = await getProductData();
    getElements();
    const img = document.querySelector('.item__img');
    // let colorOption = "";

    // Moyen de faire les opérations ci-dessous "automatiquement"
    // sur une seule ligne ?
    title.innerHTML = `<h1 id="title">${productData.name}</h1>`;
    price.innerHTML = `<span id="price">${productData.price}</span>`;
    img.innerHTML = `<img src="${productData.imageUrl}" alt = ${productData.altTxt}>`
    description.innerHTML = `<p id="description">${productData.description}</p>`;

    // productData.colors.forEach((color) => {
    //     colorOption += `
    //         <option value="${color}">${color}</option>`
    // });
    // colors.innerHTML = colorOption;

    let colorOptions = [productData.colors];
    productData.colors.forEach((color) => {
        colorOptions += `
            <option value="${color}">${color}</option>`
    });
    colors.innerHTML = colorOptions;
}

showProduct();

////////////// TEST PANIER ///////



const addToCart = async () => {
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
        cart.add({
            id: `${getId()}`,
            "name": `${productData.name}`,
            color: colors.value,
            "price": `${productData.price}`
        }, quantity.value)
    })
}

addToCart();


// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// L'objectif va être de faire en sorte qu'en appelant une key
// L'ensemble des données d'un produit puisse remonter