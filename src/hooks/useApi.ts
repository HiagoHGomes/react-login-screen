import axios from "axios";
import { sign } from "crypto";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async(token: string) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/auth/login/', {email, password});
        return response.data;
    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
})