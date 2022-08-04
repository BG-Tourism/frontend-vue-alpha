function axiosHeaders() {
    const language = localStorage.getItem('locale') || import.meta.env.VITE_APP_I18N_LOCALE

    return {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Accept-Language': language
    }
}

export default axiosHeaders
