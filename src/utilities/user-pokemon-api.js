import sendRequest from "./send-request";

const BASE_URL = '/api/saveFiles'

export async function createPokemon(data, saveId) {
    return sendRequest(`${BASE_URL}/${saveId}/pokemon/create`, 'POST',  data);
}

export async function deletePokemon(saveId, pokeId) {
    return sendRequest(`${BASE_URL}/${saveId}/pokemon/delete/${pokeId}`, 'DELETE');
}

export async function updatePokemonEV(saveId, pokeId, value, stat){
    return sendRequest(`${BASE_URL}/${saveId}/pokemon/update/${pokeId}/${stat}/${value}`, 'PUT');
}