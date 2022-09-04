const form = document.querySelector('.cart__order__form');

form.email.addEventListener('change', () => {
    validEmail(this);
});

const validEmail = (inputEmail) => {
    // Création de la RegExp pour la validation email
    // let emailRegExp = new RegExp(
    // '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2-10}$', 'g'
    let emailRegExp = /^([a - z\d\.-]+)@([a - z\d\-] +)\.([a - z]{ 2, 8 })(\.[a - z]{ 2, 8 })$/;
    let testEmail = emailRegExp.test(inputEmail.value);
    console.log(testEmail);
};

// /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/