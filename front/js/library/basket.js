


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
    const findProduct = cart.find(p => p.id === product.id && p.color === product.color);
    if (findProduct != undefined) {
        findProduct.quantity = parseInt(findProduct.quantity) + parseInt(quantity);
    } else {
        product.quantity = quantity;
        cart.push(product);
    }
    saveCart(cart);
}

const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// const removeFromCart = (product) => {
//     let cart = getCart();
//     cart = cart.filter(p => p.id != product.id);
//     saveCart(cart);
// }

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