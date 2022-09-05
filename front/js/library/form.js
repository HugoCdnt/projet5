const form = document.querySelector('.cart__order__form');


form.email.addEventListener('change', () => {
    const emailControl = () => {
        let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regExpEmail.test(form.email.value)) {
            // return true;
        } else {
            alert("L'adresse email saisie n'est pas valide");
        }
    };
    emailControl();
});

form.firstName.addEventListener('change', () => {
    const firstNameControl = () => {
        let regExpFirstName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u;
        if (regExpFirstName.test(form.firstName.value)) {
        } else {
            alert("Le prénom saisi n'est pas valide");
        }
    }
    firstNameControl();
});

const getContact = () => {
    const contact = localStorage.getItem("contact");
    if (contact === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("contact"));
    }
}

const saveContact = (contact) => {
    localStorage.setItem("contact", JSON.stringify(contact));
}

const addContact = (infos) => {
    const contact = getContact();
    contact.push(infos);

    saveContact(contact);
}

document.getElementById('order').addEventListener('click', (event) => {
    event.preventDefault();
    alert("Formulaire envoyé !");

    addContact({
        "prénom": form.firstName.value,
        "nom": form.lastName.value,
        "adresse": form.address.value,
        "ville": form.city.value,
        "email": form.email.value
    });
});
