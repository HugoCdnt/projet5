const initCart = async () => {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    const listProducts = await getRequest('http://localhost:3000/api/products/');
    const cartItems = document.getElementById('cart__items');
    let cartItemsHTML = "";


    cart.forEach((product) => {

        const findProduct = listProducts.find(p => p._id === product.id);
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

    // Boucle permettant de supprimer un produit
    for (let i = 0; i < document.querySelectorAll('.deleteItem').length; i++) {
        document.querySelectorAll('.deleteItem')[i].addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelectorAll('article')[i].remove();
            removeFromCart(cart.find(p => p.idColor = cart[i].idColor));
        })
    }

    // Calcul du total
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((product) => {
        totalQuantity += parseInt(product.quantity);
        totalPrice += parseInt(product.quantity) * listProducts.find(p => p._id === product.id).price;
        document.getElementById('totalPrice').innerText = totalPrice;
        document.getElementById('totalQuantity').innerText = totalQuantity;

        // Boucle permettant de modifier le prix total
        // Et la quantité totale
        // en temps réel en fonction des changements de quantités

        for (let i = 0; i < document.querySelectorAll('.itemQuantity').length; i++) {
            document.querySelectorAll('.itemQuantity')[i].addEventListener('change', (event) => {
                totalPrice += ((parseInt(event.target.value) - parseInt(cart[i].quantity)) * listProducts.find(p => p._id === (cart)[i].id).price);
                document.getElementById('totalPrice').innerText = totalPrice;

                totalQuantity = totalQuantity + parseInt(event.target.value) - parseInt(cart[i].quantity);
                cart[i].quantity = parseInt(event.target.value);
                document.getElementById('totalQuantity').innerText = totalQuantity;

                saveCart(cart);
            })
        }
    })
}
initCart();


// for (let i = 0; i < document.querySelectorAll('.itemQuantity').length; i++) {
//     document.querySelectorAll('.itemQuantity')[i].addEventListener('change', (event) => {
//         totalQuantity = totalQuantity + parseInt(event.target.value) - parseInt(cart[i].quantity);
//         cart[i].quantity = parseInt(event.target.value);
//         document.getElementById('totalQuantity').innerText = totalQuantity;
//         saveCart(cart);
//     });
// }


// for (let i = 0; i < document.querySelectorAll('.itemQuantity').length; i++) {
//     document.querySelectorAll('.itemQuantity')[i].addEventListener('change', (event) => {
//         totalQuantity = totalQuantity + parseInt(event.target.value) - parseInt(cart[i].quantity);
//         cart[i].quantity = parseInt(event.target.value);
//         document.getElementById('totalQuantity').innerText = totalQuantity;
//         saveCart(cart);
//     });
// }


// Boucle permettant de modifier les quantités d'un produit
// for (let i = 0; i < document.querySelectorAll('.itemQuantity').length; i++) {
//     document.querySelectorAll('.itemQuantity')[i].addEventListener('change', (event) => {
//         totalQuantity = totalQuantity + parseInt(event.target.value) - parseInt(cart[i].quantity);
//         cart[i].quantity = parseInt(event.target.value);
//         document.getElementById('totalQuantity').innerText = totalQuantity;
//         saveCart(cart);
//     })
// }


/////////// DELETE AVEC FOREACH ////////////////////

// for (let i = 0; i < document.querySelectorAll('.deleteItem').length; i++) {}
// document.querySelectorAll('.deleteItem').forEach((deleteItem) => {
//     deleteItem.addEventListener('click', (event) => {
//         console.log("Delete", event);
//         document.querySelector('article').remove();
//         removeFromCart(cart.product);
//     })
// })

///////////////////////////////////////////////////

//////// TOTAL AND QUANTITIES SETTING ////////



// document.querySelectorAll('.itemQuantity').forEach((quantityInput) => {
//     quantityInput.addEventListener('change', (event) => {
//         console.log("Change", event);
//     })
// })

// getTotal();


    /////////////////////////////////////////////////

    // const deleteProduct = async () => {
    //     const cart = await getCart();
    //     await initCart();
    //     const deleteButton = document.querySelectorAll('.deleteItem');
    //     const article = document.querySelectorAll('article');

    //     for (let l = 0; l < deleteButton.length; l++) {
    //         deleteButton[l].addEventListener('click', (event) => {
    //             event.preventDefault();

    //             let idSelectedProduct = cart[l].idColor;
    //             let findProduct = cart.find(p => p.idColor = idSelectedProduct);
    //             let articleSelected = article[l];

    //             articleSelected.remove();
    //             removeFromCart(findProduct);
    //         })
    //     }
    // }
