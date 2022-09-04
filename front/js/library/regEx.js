const form = document.querySelector('.cart__order__form');

const validEmail = (inputEmail) => {
    // Création de la RegExp pour la validation email
    // let emailRegExp = new RegExp(
    // '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2-10}$', 'g'
    // let emailRegExp = /^([a - z\d\.-]+)@([a - z\d\-] +)\.([a - z]{ 2, 8 })(\.[a - z]{ 2, 8 })$/;
    // let emailRegExp = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailRegExp = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // let testEmail = emailRegExp.test(inputEmail);
    console.log(emailRegExp.test(inputEmail));
};


// form.email.addEventListener('change', () => {
//     validEmail(this);
// });


const regExEmail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}

const emailControl = () => {
    // let email = form.email.value;
    if (regExEmail(form.email.value)) {
        // return true;
        console.log("c'est bon !");
    } else {
        // return "l'email n'est pas valide";
        console.log("false");
    }
}

form.email.addEventListener('change', () => {
    emailControl();
});

// ça fonctionne. Essayer à présent d'avoir un code + concis