const initCart = () => {
    let cart = getCart();
    if (cart.length === 0) {
        alert("Oups, le panier est vide");
        window.location.href = `file:///Users/hugocadenat/Documents/Formation_de%CC%81v_web/Projet%205/P5%20-%20Kanap/front/html/index.html`;
    }

    // cart.forEach((item) => {
    // })
}

initCart();





// // /////////////////////////