


// Le JSON.stringify va permettre de transformer un object
// complexe en chaîne de caractères.
// le localStorage ne peut pas de base gérer d'objets complexes
const getCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("cart"));
    }
}

const addCart = (product, quantity) => {
    const cart = getCart();
    const findProduct = cart.find(p => p.idColor === product.idColor);

    if (findProduct != undefined && (parseInt(quantity) + parseInt(findProduct.quantity) > 100)) {
        alert("La quantité d'un produit ne peut excéder 100");
    } else if (findProduct != undefined) {
        findProduct.quantity = parseInt(findProduct.quantity) + parseInt(quantity);
        alert("Votre produit a bien été ajouté au panier")
    } else {
        product.quantity = quantity;
        cart.push(product);
        alert("Votre produit a bien été ajouté au panier")
    }
    saveCart(cart);
}

const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const removeFromCart = (product) => {
    let cart = getCart();
    cart = cart.filter(p => p.idColor != product.idColor);
    saveCart(cart);
}

// const getNumberProducts = () => {
//     let cart = getCart();
//     let number = 0;
//     for (let product of cart) {
//         number += `${product.quantity}`;
//     }
//     return number;
// }

// const getTotalPrice = () => {
//     let cart = getCart();
//     let total = 0;
//     for (let product of cart) {
//         total += product.quantity * product.price;
//     }
//     return total;
// }

// const getTotal = async () => {
//     const cart = await getCart();
//     await initCart();

//     let totalQuantityElement = document.getElementById('totalQuantity');
//     let totalPriceElement = document.getElementById('totalPrice');

    // const getTotalQuantity = () => {
    //     let totalQuantity = 0;
    //     cart.forEach((product) => {
    //         totalQuantity += parseInt(product.quantity);
    //     });
    //     totalQuantityElement.innerText = totalQuantity;
    // }

    // getTotalQuantity();

    // const getTotalPrice = async () => {
    //     const productsUrl = 'http://localhost:3000/api/products/';
    //     const listProducts = await getRequest(productsUrl);
    //     let totalPrice = 0;

    //     cart.forEach((product) => {
    //         const findProduct = listProducts.find(p => p._id === product.id);
    //         totalPrice += parseInt(product.quantity) * findProduct.price;
    //     });
    //     totalPriceElement.innerText = totalPrice;
    // }

    // getTotalPrice();
// }

