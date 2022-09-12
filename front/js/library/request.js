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
            return -1;
        }
    } catch (error) {
        // alert(`erreur qui vient du catch ${error}`)
        // return -1;
    }
}

const postRequest = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            return response.json();
        } else {
            console.log(error);
        }
    } catch (error) {
        alert(`erreur qui vient du catch ${error}`)
    }
}

