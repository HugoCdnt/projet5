// Permet d'afficher l'ensemble des informations d'un produit
// sur sa page
const showProduct = async () => {
    const productUrl = `http://localhost:3000/api/products/${getId()}`;
    const productData = await getRequest(productUrl);
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const img = document.querySelector('.item__img');
    const description = document.getElementById('description');
    const colors = document.getElementById('colors');
    let colorOption = "";

    title.innerHTML = `<h1 id="title">${productData.name}</h1>`;
    price.innerHTML = `<span id="price">${productData.price}</span>`;
    img.innerHTML = `<img src="${productData.imageUrl}" alt = ${productData.altTxt}>`
    description.innerHTML = `<p id="description">${productData.description}</p>`;


    productData.colors.forEach((color) => {
        colorOption += `
            <option value="${color}">${color}</option>`
    });
    colors.innerHTML = colorOption;
}

showProduct()