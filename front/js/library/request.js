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

const getProductData = async () => {
    const productUrl = `http://localhost:3000/api/products/${getId()}`;
    return await getRequest(productUrl);
}