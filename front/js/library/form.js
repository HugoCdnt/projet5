const form = document.querySelector('.cart__order__form');
const regExpName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u;
const regExpAddress = /^\s*\S+(?:\s+\S+){2}$/;
const regExpCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Ajout de conditions sur chaque input du formulaire
// Avec des regExp

form.firstName.addEventListener('change', () => {
    if (regExpName.test(form.firstName.value)) {
        document.getElementById('firstNameErrorMsg').style.display = "none";
    } else {
        document.getElementById('firstNameErrorMsg').style.display = "inline";
        document.getElementById('firstNameErrorMsg').innerText = "Le prénom saisi n'est pas valide";
    }
});

form.lastName.addEventListener('change', () => {
    if (regExpName.test(form.lastName.value)) {
        document.getElementById('lastNameErrorMsg').style.display = "none";
    } else {
        document.getElementById('lastNameErrorMsg').style.display = "inline";
        document.getElementById('lastNameErrorMsg').innerText = "Le nom saisi n'est pas valide";
    }
});

form.address.addEventListener('change', () => {
    if (regExpAddress.test(form.address.value)) {
        document.getElementById('addressErrorMsg').style.display = "none";
    } else {
        document.getElementById('addressErrorMsg').style.display = "inline";
        document.getElementById('addressErrorMsg').innerText = "L'adresse saisie n'est pas valide";
    }
});

form.city.addEventListener('change', () => {
    if (regExpCity.test(form.city.value)) {
        document.getElementById('cityErrorMsg').style.display = "none";
    } else {
        document.getElementById('cityErrorMsg').style.display = "inline";
        document.getElementById('cityErrorMsg').innerText = "La ville saisie n'est pas valide";
    }
});

form.email.addEventListener('change', () => {
    if (regExpEmail.test(form.email.value)) {
        document.getElementById('emailErrorMsg').style.display = "none";
    } else {
        document.getElementById('emailErrorMsg').style.display = "inline";
        document.getElementById('emailErrorMsg').innerText = "L'adresse email saisie n'est pas valide";
    }
});


/////////////////////////////////////////////////////////////

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

        const setOrder = async (url) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    const content = await response.json();
                    alert("Formulaire envoyé !");
                    window.location.href = `confirmation.html?orderId=${content.orderId}`;
                } else {
                    console.log(error);
                }
            } catch (error) {
                alert(`erreur qui vient du catch ${error}`)
            }
        }

        setOrder(url);


    };

});









