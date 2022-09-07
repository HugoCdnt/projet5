// Permet de récupérer un ou plusieurs produits
// grâce à l'URL de l'API

const getRequest = async (url) => {
    try {
        const response = await fetch(url);
        // console.log( response);
        if (response.ok) {
            return await response.json();
        } else {
            alert(`Il semble y avoir une erreur de type ${response.status}, ce produit n'existe pas`);
            window.location.href = `index.html`;
            // return -1;
        }
    } catch (error) {
        alert(`erreur qui vient du catch ${error}`)
        // return -1;
    }
}

// const getRequest = async (url) => {
//     const response = await fetch(url);
//     if (response.ok) {
//         return await response.json();
//     }
//     return -1;
// }
