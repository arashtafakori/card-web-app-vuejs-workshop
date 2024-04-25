import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_MEMORY_SERVICE_URL;

export async function getBooklets() {
    try {
        const url = `/v1.1/booklets?pageNumber=1&pageSize=5&isDeleted=false&searchValue=`;
        const response = await axios.get(baseUrl + url);
        return Array.from(response.data.items);
    } catch (error) {
        throw error;
    }
}

export async function getBooklet(id) {
    try {
        const url = `/v1/booklets/${id}`;
        const response = await axios.get(baseUrl + url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
