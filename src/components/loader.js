
export const loader = (timeLoader, navigate, urlToNavigate, endUrl = '' ) => {
    setTimeout(() => {
        return endUrl != '' ? window.location.href = endUrl : navigate(`/${urlToNavigate}`)
    }, timeLoader);
}
