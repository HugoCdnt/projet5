const initCart = async () => {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    const productsUrl = 'http://localhost:3000/api/products/';
    const listProducts = await getRequest(productsUrl);

    const cartItems = document.getElementById('cart__items');
    let cartItemsHTML = "";

    cart.forEach((product) => {
        const findProduct = listProducts.find(p => p.id = product.id);

        cartItemsHTML += `
        <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
            <div class="cart__item__img">
                <img src="${product.img}" alt="${product.altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${product.color}</p>
                    <p>${findProduct.price} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div> 
                </div>
            </div>
      </article>`;
    });

    cartItems.innerHTML = cartItemsHTML;

}

initCart();




const testDelete = async () => {
    let cart = await getCart();
    await initCart();
    const deleteButton = document.querySelectorAll('.deleteItem');
    console.log(deleteButton);

    for (let l = 0; l < deleteButton.length; l++) {
        deleteButton[l].addEventListener('click', (event) => {
            event.preventDefault();

            // let idSelectedDelet = productSaveInLocalStorage[l].idSelectedProduct;
            // let idSelectedDelet = cart[l].id + cart[l].color;
            let idSelectedDelet = cart[l].id;
            let findProduct = cart.find(p => p.id = idSelectedDelet)

            console.log(idSelectedDelet);
            console.log(findProduct);


            removeFromCart(findProduct);
        })
    }
}

testDelete();
//////////////// TEST /////////////

// Sélection des "boutons" supprimer
// const deleteButton = document.querySelectorAll('deleteItem');
// console.log(deleteButton);

// Ajouter un eventListener sur le deleteButton
// Lui dire de sélectionner l'article parent au clic
// Ca permet d'avoir idSelectedProduct

// Possible ensuite de lier cet idSelectedProduct avec
// Le local storage. Puis supprimer le produit avec cet ID  


// for (let l = 0; l < deleteButton.length; l++) {
//     deleteButton[l].addEventListener('click', (event) => {
//         event.preventDefault();

//         // let idSelectedDelet = productSaveInLocalStorage[l].idSelectedProduct;
//         let idSelectedDelet = cart[l];
//         console.log(idSelectedDelet);

//         let cart = getCart();
//         cart = cart.filter(el => el.idSelectedProduct != idSelectedDelet);
//     })
// }



///////////////// FIN TEST /////////////////


// const deleteItemFromCart = () => {

//     const removeFromCart = async () => {
//         let cart = await getCart();
//         await initCart();
//         const items = document.querySelectorAll('.cart__item');
//         // const deleteItem = document.querySelector('.deleteItem');
//         const deleteItem = document.querySelectorAll('.deleteItem');

//         items.forEach((product) => {
//             deleteItem.forEach((deleteItem) => {
//                 addEventListener('click', () => {
//                     deleteItem.addEventListener('click', () => {
//                         console.log(product.dataset.id + " " + product.dataset.color);
//                         console.log(product);
//                         // console.log(cart);

//                         // cart = cart.filter(p => p.id != product.id);
//                         // saveCart(cart);
//                     })
//                 })

//             })

//         });
//     }
//     removeFromCart();

// }
// deleteItemFromCart();



//     // cart = cart.filter(p => p.id != product.id);
//     // saveCart(cart);