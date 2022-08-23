// Permet d'afficher l'ensemble des informations d'un produit
// sur sa page

const showProduct = async () => {
    // const productUrl = `http://localhost:3000/api/products/${getId()}`;
    // const productData = await getRequest(productUrl);
    let productData = await getProductData();
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const img = document.querySelector('.item__img');
    const description = document.getElementById('description');
    const colors = document.getElementById('colors');
    let colorOption = "";

    title.innerHTML = `<h1 id="title">${productData.name}</h1>`;
    price.innerHTML = `<span id="price">${productData.price}</span>`;
    img.innerHTML = `<img src="${productData.imageUrl}" alt = ${productData.altTxt}>`
    description.innerHTML = `<p id="description">${productData.description}</p>`;

    productData.colors.forEach((color) => {
        colorOption += `
            <option value="${color}">${color}</option>`
    });
    colors.innerHTML = colorOption;
}

showProduct();

////////////// TEST PANIER ///////



const addToCart = async () => {
    const button = document.getElementById("addToCart");
    let productData = await getProductData();
    let color = document.getElementById('colors');
    let quantity = document.getElementById('quantity');
    quantity.addEventListener('change', (e) => {
        quantity.value = e.target.value;
    })

    button.addEventListener('click', () => {
        cart.add({
            id: `${getId()}`,
            "name": `${productData.name}`,
            "color": color.innerText,
        }, quantity.value)
        console.log(quantity.value);
    })
}

// Pour couleur, même principe avec input change

addToCart();

// const addCart = (product) => {
//     let cart = getCart();
//     let findProduct = cart.find(p => p.id == product.id);
//     if (findProduct != undefined) {
//         findProduct.quantity++;
//     } else {
//         product.quantity = 1;
//         cart.push(product);
//     }
//     saveCart(cart);
// }



// const testPanier = () => {
//     const button = document.getElementById("addToCart");
//     button.addEventListener('click', () => {
//         // localStorage.setItem("title", document.getElementById("title").innerText)
//         // localStorage.setItem(getId(), [
//         //     "Nom : " + document.getElementById("title").value,
//         //     " Prix : " + document.getElementById("price").value
//         // ])

//         localStorage.setItem(getId(), [
//             localStorage.setItem("name", "test"),
//             localStorage.setItem("price", "99€")
//         ])
//     })
// }

// testPanier()

// Pour quantités, utiliser la méthode values() 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// L'objectif va être de faire en sorte qu'en appelant une key
// L'ensemble des données d'un produit puisse remonter