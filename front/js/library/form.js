// RegExp permettant de contrôler les champs du formulaire de la page panier

const form = document.querySelector('.cart__order__form');
const regExpName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u;
const regExpAddress = /^\s*\S+(?:\s+\S+){2}$/;
const regExpCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


// Ajout de conditions sur chaque input du formulaire avec les RegExp paramétrées plus haut

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