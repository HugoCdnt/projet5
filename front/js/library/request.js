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





// Test de classe Cart directement dans les request

// L'utilisation d'une classe Cart permet de gagner en performances
// Il faudra en revanche faire un new Cart() au chargement 
// de la page pour pouvoir utiliser les méthodes de l'objet
// class Cart {
//     constructor() {
//         let cart = localStorage.getItem("cart");
//         if (cart == null) {
//             this.cart = [];
//         } else {
//             this.cart = JSON.parse(localStorage.getItem("cart"));
//         }
//     }

//     save = () => {
//         localStorage.setItem("cart", JSON.stringify(this.cart));
//     }

//     add = (product, quantity) => {
//         let findProduct = this.cart.find(p => p.id == product.id) && this.cart.find(p => p.color == product.color);
//         if (findProduct != undefined) {
//             findProduct.quantity = parseInt(findProduct.quantity) + parseInt(quantity);
//         } else {
//             product.quantity = quantity;
//             this.cart.push(product);
//         }
//         this.save();
//     }

//     //////////

//     get = () => {
//         let storage = localStorage;
//         const obj = JSON.parse(storage);
//         console.log(obj.id);

//         // storage.forEach((product) => {
//         //     console.log(product.id);
//         // })
//     }


//     //////////

//     remove = (product) => {
//         this.cart = this.cart.filter(p => p.id != product.id);
//         this.save();
//     }

//     changeQuantity = (product, quantity) => {
//         let findProduct = this.cart.find(p => p.id == product.id);
//         if (findProduct != undefined) {
//             findProduct.quantity += quantity;
//             if (findProduct.quantity <= 0) {
//                 remove(findProduct);
//             } else {
//                 this.save();
//             }
//         }
//     }

//     getNumberProducts = () => {
//         let number = 0;
//         for (let product of this.cart) {
//             number += product.quantity;
//         }
//         return number;
//     }

//     getTotalPrice = () => {
//         let total = 0;
//         for (let product of this.cart) {
//             total += product.quantity * product.price;
//         }
//         return total;
//     }

//     // Nécessité de mettre en place une fonction permettant
//     // de récupérer les informations de nos produits

// }

// let cart = new Cart();