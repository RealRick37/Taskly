import api from "../api/axios";

export const register = async (username, email, password) => {
    const response = await api.post("accounts/register/", {
        username, 
        email, 
        password
    });
    return response.data;
};

export const login=async (username, password) => {
    const response=await api.post("accounts/login/", {
        username,
        password,
    });

    return response.data;
};