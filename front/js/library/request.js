// Permet de récupérer un ou plusieurs produits
// grâce à l'URL de l'API
const getRequest = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    return -1;
}

// Permet de récupérer l'ID d'un produit à partir de l'URL
// de sa page
const getId = () => {
    const search = "id=";
    const url = document.location.href;
    const idIndex = url.lastIndexOf(search);
    const id = url.substring((idIndex + 3));
    return id
}

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


// Test de classe Cart directement dans les request
class Cart {
    constructor() {
        let cart = localStorage.getItem("cart");
        if (cart == null) {
            this.cart = [];
        } else {
            this.cart = JSON.parse(localStorage.getItem("cart"));
        }
    }

    save = () => {
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    add = (product, quantity) => {
        let findProduct = this.cart.find(p => p.id == product.id) && this.cart.find(p => p.color == product.color);
        if (findProduct != undefined) {
            findProduct.quantity = parseInt(findProduct.quantity) + parseInt(quantity);
        } else {
            product.quantity = quantity;
            this.cart.push(product);
        }
        this.save();
    }

    remove = (product) => {
        this.cart = this.cart.filter(p => p.id != product.id);
        this.save();
    }

    changeQuantity = (product, quantity) => {
        let findProduct = this.cart.find(p => p.id == product.id);
        if (findProduct != undefined) {
            findProduct.quantity += quantity;
            if (findProduct.quantity <= 0) {
                remove(findProduct);
            } else {
                this.save();
            }
        }
    }

    getNumberProducts = () => {
        let number = 0;
        for (let product of this.cart) {
            number += product.quantity;
        }
        return number;
    }

    getTotalPrice = () => {
        let total = 0;
        for (let product of this.cart) {
            total += product.quantity * product.price;
        }
        return total;
    }

    // Nécessité de mettre en place une fonction permettant
    // de récupérer les informations de nos produits
}

let cart = new Cart();
