// ajouter un eventListener sur ma page produit ?
// Le mettre sur le bouton "ajouter au panier"

// Nécessaire d'utiliser localStorage. sessionStorage
// ne sera pas suffisant    

// const addToCart = () => {
//     const button = document.getElementById("addToCart");
//     console.log(button);
//     // button.addEventListener('click', () => {
//     // })
// }

// addToCart()


// Le JSON.stringify va permettre de transformer un object
// complexe en chaîne de caractères.
// le localStorage ne peut pas de base gérer d'objets complexes
const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const getCart = () => {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("cart"));
    }
}

const addCart = (product) => {
    let cart = getCart();
    let findProduct = cart.find(p => p.id == product.id);
    if (findProduct != undefined) {
        findProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    saveCart(cart);
}

const removeFromCart = (product) => {
    let cart = getCart();
    cart = cart.filter(p => p.id != product.id);
    saveCart(cart);
}

const changeQuantity = (product, quantity) => {
    let cart = getCart();
    let findProduct = cart.find(p => p.id == product.id);
    if (findProduct != undefined) {
        findProduct.quantity += quantity;
        if (findProduct.quantity <= 0) {
            removeFromCart(findProduct);
        } else {
            saveCart(cart);
        }
    }
}

const getNumberProducts = () => {
    let cart = getCart();
    let number = 0;
    for (let product of cart) {
        number += product.quantity;
    }
    return number;
}

const getTotalPrice = () => {
    let cart = getCart();
    let total = 0;
    for (let product of cart) {
        total += product.quantity * product.price;
    }
    return total;
}