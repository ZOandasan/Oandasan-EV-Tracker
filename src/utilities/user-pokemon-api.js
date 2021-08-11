import sendRequest from "./send-request";

const BASE_URL = '/api/saveFiles'

export async function createPokemon(data, id) {
    return sendRequest(`${BASE_URL}/${id}/pokemon/create`, 'POST',  data);
}