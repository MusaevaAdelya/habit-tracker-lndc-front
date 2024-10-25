import API from "../api";


export const login = async (email, password) => {
    try {
        const response = await API.post(`/auth/local`, {
            identifier: email,
            password: password
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 403) {
                return {error: error.response.data.error.message};
            } else if (error.response.status >= 400 && error.response.status < 500) {
                return {error: error.response.data.error.message};
            } else {
                return {error: error.response.data.error.message};
            }
        } else {
            return {error: error.response.data.error.message};
        }
    }
};