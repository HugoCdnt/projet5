// Récupérer les infos de Contact sur le local storage
// Une fois la commande validée, faire une redirection
// vers la page Confirmation

// 

document.addEventListener('DOMContentLoaded', async () => {
    const getURLParam = (url, param) => {
        const Url = new URL(url)
        const value = Url.searchParams.get(param)
        return value
    }

    const orderIdElement = document.querySelector('#orderId')
    const orderId = getURLParam(window.location.href, 'orderId')

    orderIdElement.innerHTML = orderId;
})