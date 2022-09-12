// Permet d'afficher certaines informations des produits sur la page d'accueil : photo, nom, début de description

const showProducts = async () => {
    const productsUrl = 'http://localhost:3000/api/products/';
    const items = document.getElementById("items");
    const listProducts = await getRequest(productsUrl);
    let cardsHTML = "";

    listProducts.forEach((product) => {
        cardsHTML += `
        <a href="./product.html?id=${product._id}">
            <article>
                <img src="${product.imageUrl}" alt=${product.altTxt}>
                    <h3 class="productName">${product.name}</h3>
                    <p class="productDescription">${product.description}</p>
            </article>
        </a>`;
    });
    items.innerHTML = cardsHTML;
}

showProducts()