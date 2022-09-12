// Fonction permettant soit d'accéder au "panier" s'il existe, soit de le créer s'il n'existe pas encore
// Le JSON.stringify va permettre de transformer un object complexe en chaîne de caractères.
// Le localStorage ne peut pas de base gérer d'objets complexes
const getCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("cart"));
    }
}


// Fonction permettant d'ajouter un produit au panier, prenant en arguments le produit en question
// et les quantités à ajouter

const addCart = (product, quantity) => {
    const cart = getCart();
    const findProduct = cart.find(p => p.idColor === product.idColor);

    if (findProduct != undefined && (parseInt(quantity) + parseInt(findProduct.quantity) > 100)) {
        alert("La quantité d'un produit ne peut excéder 100");
    } else if (findProduct != undefined) {
        findProduct.quantity = parseInt(findProduct.quantity) + parseInt(quantity);
        alert("Votre produit a bien été ajouté au panier")
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/cart.html`;
    } else {
        product.quantity = quantity;
        cart.push(product);
        alert("Votre produit a bien été ajouté au panier")
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/cart.html`;
    }
    saveCart(cart);
}

// Fonction permettant de sauvegarder le panier

const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// Fonction permettant de supprimer un article du panier

const removeFromCart = (product) => {
    let cart = getCart();
    cart = cart.filter(p => p.idColor != product.idColor);
    saveCart(cart);
}

