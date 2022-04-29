import axios from "axios";

const apiClient = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_API || '',
    });
}

export const getMethod = async (url) => {
    const res = await apiClient().get(url);
    return res
}
export const postMethod = async (url, object) => {
    const res = await apiClient().post(url, object);
    return res
}