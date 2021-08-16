import sendRequest from "./send-request";
const PokeAPI = 'https://pokeapi.co/api/v2/pokemon-species';

export async function classifyPokemon(dexNo) {
  return sendRequest(`${PokeAPI}/${dexNo}`, 'GET');
}

export {
  PokeAPI
};