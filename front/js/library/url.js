const getURLParam = (url, param) => {
    const Url = new URL(url)
    const value = Url.searchParams.get(param)
    return value
}