// Récupération de toute la data relative au produit sur lequel l'utilisateur a précédemment cliqué

// const getProductData = async () => {
//     return await getRequest(`http://localhost:3000/api/products/${getURLParam(window.location.href, 'id')}`);
// }


// Fonction permettant de récupérer les éléments HTML essentiels de la page

const getElements = () => {
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const colors = document.getElementById('colors');
}


// Récupération de la data d'un produit et affichage sur la page produit 

const showProduct = async () => {
    // const productData = await getProductData();
    const productData = await getRequest(`http://localhost:3000/api/products/${getURLParam(window.location.href, 'id')}`);

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


// Fonction englobant le processus d'ajout d'un produit au panier

const addToBasket = async () => {
    // let productData = await getProductData();
    let productData = await await getRequest(`http://localhost:3000/api/products/${getURLParam(window.location.href, 'id')}`);
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


