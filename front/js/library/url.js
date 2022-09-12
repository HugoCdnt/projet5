// Fonction permettant d'aller chercher une information dans l'URL d'une page

const getURLParam = (url, param) => {
    const Url = new URL(url)
    const value = Url.searchParams.get(param)
    return value
}