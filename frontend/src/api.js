import axios from 'axios';
import { apiUrl } from '@/env';
function authHeaders(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}
export const api = {
    async logInGetToken(username, password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        return axios.post(`${apiUrl}/api/v1/login/access-token`, params);
    },
    async getMe(token) {
        return axios.get(`${apiUrl}/api/v1/users/me`, authHeaders(token));
    },
    async updateMe(token, data) {
        return axios.put(`${apiUrl}/api/v1/users/me`, data, authHeaders(token));
    },
    async getUsers(token) {
        return axios.get(`${apiUrl}/api/v1/users/`, authHeaders(token));
    },
    async updateUser(token, userId, data) {
        return axios.put(`${apiUrl}/api/v1/users/${userId}`, data, authHeaders(token));
    },
    async createUser(token, data) {
        return axios.post(`${apiUrl}/api/v1/users/`, data, authHeaders(token));
    },
    async passwordRecovery(email) {
        return axios.post(`${apiUrl}/api/v1/password-recovery/${email}`);
    },
    async resetPassword(password, token) {
        return axios.post(`${apiUrl}/api/v1/reset-password/`, {
            new_password: password,
            token,
        });
    },
};
//# sourceMappingURL=api.js.map