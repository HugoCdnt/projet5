const initCart = async () => {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    // const productsUrl = 'http://localhost:3000/api/products/';
    // const listProducts = await getRequest(productsUrl);

    // const productData = await getRequest(productsUrl);
    const productsUrl = 'http://localhost:3000/api/products/';
    const listProducts = await getRequest(productsUrl);


    const cartItems = document.getElementById('cart__items');
    let cartItemsHTML = "";

    cart.forEach((product) => {
        let findProduct = listProducts.find(p => p._id === product.id);

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



//////// TOTAL AND QUANTITIES SETTING ////////

// const changeQuantity = async () => {
//     const cart = await getCart();
//     await initCart();
//     const quantitySetting = document.querySelectorAll('.itemQuantity');
// }

// changeQuantity();

const getTotal = async () => {
    const cart = await getCart();
    await initCart();

    let totalQuantityElement = document.getElementById('totalQuantity');
    let totalPriceElement = document.getElementById('totalPrice');

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((product) => {
            totalQuantity += parseInt(product.quantity);
        });
        totalQuantityElement.innerText = totalQuantity;
    }

    getTotalQuantity();

    const getTotalPrice = async () => {
        const productsUrl = 'http://localhost:3000/api/products/';
        const listProducts = await getRequest(productsUrl);
        let totalPrice = 0;

        cart.forEach((product) => {
            const findProduct = listProducts.find(p => p._id === product.id);
            totalPrice += parseInt(product.quantity) * findProduct.price;
        });
        totalPriceElement.innerText = totalPrice;
    }

    getTotalPrice();
}

getTotal();


/////////////////////////////////////////////////

const deleteProduct = async () => {
    const cart = await getCart();
    await initCart();
    const deleteButton = document.querySelectorAll('.deleteItem');
    const article = document.querySelectorAll('article');

    for (let l = 0; l < deleteButton.length; l++) {
        deleteButton[l].addEventListener('click', (event) => {
            event.preventDefault();

            let idSelectedProduct = cart[l].idColor;
            let findProduct = cart.find(p => p.idColor = idSelectedProduct);
            let articleSelected = article[l];

            articleSelected.remove();
            removeFromCart(findProduct);
        })
    }
}

deleteProduct();

// const listProducts = await getRequest(productsUrl);
// const findProduct = listProducts.find(p => p.id = product.id);

// <p>${findProduct.price} €</p>


// quantity.addEventListener('change', (e) => {
//     quantity.value = e.target.value;
// })

// button.addEventListener('click', () => {
//     if (quantity.value <= 0 || quantity.value > 100) {
//         alert("La quantité renseignée n'est pas valide. Veuillez renseigner un nombre entre 1 et 100 pour continuer.");
//     } else {
//         addCart({
//             id: `${getId()}` + " " + colors.value,
//             "name": `${productData.name}`,
//             color: colors.value,
//             "img": `${productData.imageUrl}`,
//             "altTxt": `${productData.altTxt}`
//         }, quantity.value)