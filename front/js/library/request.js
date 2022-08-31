// Permet de récupérer un ou plusieurs produits
// grâce à l'URL de l'API
const getRequest = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    return -1;
}