// Permet de récupérer un ou plusieurs produits
// grâce à l'URL de l'API

const getRequest = async (url) => {
    try {
        const response = await fetch(url);
        // console.log(response);
        if (response.ok) {
            return await response.json();
        } else {
            alert(`Il semble y avoir une erreur de type ${response.status}, ce produit n'existe pas`);
            window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
        }
    } catch (e) {
        alert(`erreur qui vient du catch ${e}`)
    }
}

// const getRequest = async (url) => {
//     const response = await fetch(url);
//     if (response.ok) {
//         return await response.json();
//     }
//     return -1;
// }
