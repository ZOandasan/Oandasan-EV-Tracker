import sendRequest from "./send-request";

const BASE_URL = '/api/saveFiles';

export async function createSave(data) {
    return sendRequest(`${BASE_URL}/create`, 'POST',  data);
}

export async function getAll() {
    return sendRequest(`${BASE_URL}/history`, 'POST')
}

export async function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST')
}

export async function deleteOne(id) {
    return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE')
}