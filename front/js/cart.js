// Fonction permettant de générer le contenu de la page Panier

const initCart = async () => {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    const listProducts = await getRequest('http://localhost:3000/api/products/');

    const cartItems = document.getElementById('cart__items');
    let cartItemsHTML = "";


    // Récupération des informations de chaque produit pour générer le code HTML de chaque article présent dans le panier

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

    // EventListener contenant une fonction permettant de supprimer 
    // les articles du panier et de modifier le total en temps réel

    document.querySelectorAll('.deleteItem').forEach((button) => {
        button.addEventListener('click', () => {
            const article = button.parentNode.parentNode.parentNode.parentNode;
            const idColorArticle = ((article.dataset.id) + " " + (article.dataset.color));
            const productCart = cart.find(p => p.idColor === idColorArticle);

            totalQuantity -= productCart.quantity;
            document.getElementById('totalQuantity').innerText = totalQuantity;

            totalPrice -= (productCart.quantity * listProducts.find(p => p._id === productCart.id).price);
            document.getElementById('totalPrice').innerText = totalPrice;

            removeFromCart(cart.find(p => p.idColor === idColorArticle));
            button.parentNode.parentNode.parentNode.parentNode.remove();
        });
    });

    // Calcul et affichage du total
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((product) => {
        totalQuantity += parseInt(product.quantity);
        totalPrice += parseInt(product.quantity) * listProducts.find(p => p._id === product.id).price;
        document.getElementById('totalPrice').innerText = totalPrice;
        document.getElementById('totalQuantity').innerText = totalQuantity;


        // Boucle permettant de modifier le prix total et la quantité totale
        // en temps réel en fonction des changements de quantités

        for (let i = 0; i < document.querySelectorAll('.itemQuantity').length; i++) {
            document.querySelectorAll('.itemQuantity')[i].addEventListener('change', (event) => {

                if (event.target.value > 100) {
                    event.target.value = (event.target.value - (event.target.value - 100));
                } else if (event.target.value < 1) {
                    event.target.value = 1;
                }
                totalPrice += ((parseInt(event.target.value) - parseInt(cart[i].quantity)) * listProducts.find(p => p._id === (cart)[i].id).price);
                document.getElementById('totalPrice').innerText = totalPrice;

                totalQuantity = totalQuantity + parseInt(event.target.value) - parseInt(cart[i].quantity);
                cart[i].quantity = parseInt(event.target.value);
                document.getElementById('totalQuantity').innerText = totalQuantity;

                saveCart(cart);
            })
        }
    })


    // Event listener permettant d'envoyer notre requête POST à l'API à la condition que les données du formulaire soient valides

    document.getElementById('order').addEventListener('click', (event) => {
        event.preventDefault();

        if ((regExpName.test(form.firstName.value)) && (regExpName.test(form.lastName.value)) && (regExpAddress.test(form.address.value)) && (regExpCity.test(form.city.value)) && (regExpEmail.test(form.email.value))) {
            const url = "http://localhost:3000/api/products/order";
            const cart = getCart();

            const body = {
                contact: {
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    address: form.address.value,
                    city: form.city.value,
                    email: form.email.value
                },
                products: cart.map(product => product.id)
            };

            const setOrder = async () => {
                const content = await postRequest(url, body);
                alert("Formulaire envoyé !");
                window.location.href = `confirmation.html?orderId=${content.orderId}`;
            }

            setOrder(url);


        };

    });

}

initCart();