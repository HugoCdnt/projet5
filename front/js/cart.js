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



// Autre méthode, avec des méthodes fonctionnant séparément
// Pas dans une classe



// Le JSON.stringify va permettre de transformer un object
// complexe en chaîne de caractères.
// le localStorage ne peut pas de base gérer d'objets complexes

// const saveCart = (cart) => {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// const getCart = () => {
//     let cart = localStorage.getItem("cart");
//     if (cart == null) {
//         return [];
//     } else {
//         return JSON.parse(localStorage.getItem("cart"));
//     }
// }

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

// const removeFromCart = (product) => {
//     let cart = getCart();
//     cart = cart.filter(p => p.id != product.id);
//     saveCart(cart);
// }

// const changeQuantity = (product, quantity) => {
//     let cart = getCart();
//     let findProduct = cart.find(p => p.id == product.id);
//     if (findProduct != undefined) {
//         findProduct.quantity += quantity;
//         if (findProduct.quantity <= 0) {
//             removeFromCart(findProduct);
//         } else {
//             saveCart(cart);
//         }
//     }
// }

// const getNumberProducts = () => {
//     let cart = getCart();
//     let number = 0;
//     for (let product of cart) {
//         number += product.quantity;
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

// /////////////////////////