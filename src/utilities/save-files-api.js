import sendRequest from "./send-request";

const BASE_URL = '/api/saveFiles';

export async function createSave(data) {
    return sendRequest(`${BASE_URL}/saveFile/create`, 'POST',  data);
}