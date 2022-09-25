// Permet d'afficher certaines informations des produits sur la page d'accueil : photo, nom, début de description

const showProducts = async () => {
    const productsUrl = 'http://localhost:3000/api/products/';
    const items = document.getElementById("items");
    const listProducts = await getRequest(productsUrl);
    let cardsHTML = "";

    // listProducts.forEach((product) => {
    //     cardsHTML += `
    //     <a href="./product.html?id=${product._id}">
    //         <article>
    //             <img src="${product.imageUrl}" alt=${product.altTxt}>
    //                 <h3 class="productName">${product.name}</h3>
    //                 <p class="productDescription">${product.description}</p>
    //         </article>
    //     </a>`;
    // });
    // items.innerHTML = cardsHTML;


    const addElements = () => {
        listProducts.forEach((product) => {
            const items = document.getElementById('items');
            const newLink = document.createElement('a');
            newLink.setAttribute('href', `./product.html?id=${product._id}`);

            const newArticle = document.createElement('article');
            const newContent = newArticle.innerHTML;

            newArticle.innerHTML =
                `<img src = "${product.imageUrl}" alt = ${product.altTxt}>
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>`;

            newLink.appendChild(newArticle);
            items.appendChild(newLink);
        });
    };

    addElements();
}

showProducts()

