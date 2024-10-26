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


export const enterRoom = async (roomId, password, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    try {
        const response = await API.post(`/rooms/enter`, {
            roomId: roomId,
            password: password
        }, {headers});

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

export const leaveRoom = async (roomId, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    console.log(roomId)
    try {
        const response = await API.post(`/rooms/leave`, {
            roomId: roomId,
        }, {headers});

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

export const reportPost = async (postId) => {
    const token = localStorage.getItem('accessToken');
    const tokenParts = token.split('.');
    const decodedPayload = JSON.parse(atob(tokenParts[1]));
    const userId = decodedPayload.id;
    try {
        const response = await API.post(`/reports`, {
            data: {
                user: userId,
                post: postId
            }
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

export const votePost = async (approved,reportId) => {


    const token = localStorage.getItem('accessToken');
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    try {
        const response = await API.post(`/votes`, {
            approved: approved,
            reportId: reportId
        }, {headers});

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