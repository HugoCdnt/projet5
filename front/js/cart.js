const initCart = async () => {
    let cart = getCart();
    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    const cartItems = document.getElementById('cart__items');
    let cartItemsHTML = "";

    const productsUrl = 'http://localhost:3000/api/products/';
    const listProducts = await getRequest(productsUrl);

    cart.forEach((product) => {
        const findProduct = cart.find(p => p.id === product.id);
        cartItemsHTML += `
        <article class="cart__item" data-id="${product._id}" data-color="${product.color}">
            <div class="cart__item__img" >
                <img src="${product.img}" alt="${product.altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>Vert</p>
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


