export const selectAuthRequestData = store => {
    const {loading, error, success} = store.auth;
    return {
        loading,
        error,
        success,
    }
}