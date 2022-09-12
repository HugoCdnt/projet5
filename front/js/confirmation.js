// Une fois la commande validée, récupération de l'orderID directement dans l'URL de la page Confirmation

const showConfirmation = () => {
    const orderIdElement = document.querySelector('#orderId')
    const orderId = getURLParam(window.location.href, 'orderId')

    orderIdElement.innerHTML = orderId;
}

showConfirmation();