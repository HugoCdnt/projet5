const form = document.querySelector('.cart__order__form');
const regExpName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u;
const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.firstName.addEventListener('change', () => {
    if (regExpName.test(form.firstName.value)) {
    } else {
        alert("Le prénom saisi n'est pas valide");
    }
});

form.lastName.addEventListener('change', () => {
    if (regExpName.test(form.lastName.value)) {
    } else {
        alert("Le nom saisi n'est pas valide");
    }
});

form.email.addEventListener('change', () => {
    if (regExpEmail.test(form.email.value)) {
    } else {
        alert("L'adresse email saisie n'est pas valide");
    }
});

document.getElementById('order').addEventListener('click', (event) => {
    event.preventDefault();

    if ((regExpName.test(form.firstName.value)) && (regExpName.test(form.lastName.value)) && (regExpEmail.test(form.email.value))) {
        addContact({
            "prénom": form.firstName.value,
            "nom": form.lastName.value,
            "adresse": form.address.value,
            "ville": form.city.value,
            "email": form.email.value
        });
        alert("Formulaire envoyé !");
    }
    else {
        alert("Il y a un problème");
    }
});


// form.email.addEventListener('change', () => {
//     const emailControl = () => {
//         let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         if (regExpEmail.test(form.email.value)) {
//             // return true;
//         } else {
//             alert("L'adresse email saisie n'est pas valide");
//         }
//     };
//     emailControl();
// });


// form.firstName.addEventListener('change', () => {
//     const firstNameControl = () => {
//         let regExpFirstName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u;
//         if (regExpFirstName.test(form.firstName.value)) {
//         } else {
//             alert("Le prénom saisi n'est pas valide");
//         }
//     }
//     firstNameControl();
// });
