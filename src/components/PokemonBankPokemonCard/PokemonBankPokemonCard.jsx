export default function PokemonBankPokemonCard({pokemon}){
    return ( 
        <div>  
            {pokemon.nickname ? 
                <div>
                    <h4>{pokemon.dexNo}: {pokemon.nickname}</h4>
                    <p>Level: {pokemon.level}</p>
                </div>
            :
                <div>
                    <h4>{pokemon.dexNo}: Pokemon Species</h4>
                    <p>Level: {pokemon.level}</p>
                </div>
            }
        </div>
    );
} 