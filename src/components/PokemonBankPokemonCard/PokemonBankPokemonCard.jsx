import './PokemonBankPokemonCard.css'
export default function PokemonBankPokemonCard({pokemon}){
    return ( 
        <div className="pokemon-card">  
            {pokemon.nickname ? 
                <div>
                    <p>{pokemon.dexNo}: {pokemon.nickname}</p>
                    <p>Level: {pokemon.level}</p>
                    <span>HP: {pokemon.hpEV} | ATK: {pokemon.atkEV} | DEF: {pokemon.defEV} | Sp.ATK: {pokemon.spAtkEV} | Sp.Def: {pokemon.spDefEV} | SPD: {pokemon.spdEV} </span>
                </div>
            :
                <div>
                    <p>{pokemon.dexNo}: Pokemon Species</p>
                    <p>Level: {pokemon.level}</p>
                    <span>HP: {pokemon.hpEV} | ATK: {pokemon.atkEV} | DEF: {pokemon.defEV} | Sp.ATK: {pokemon.spAtkEV} | Sp.Def: {pokemon.spDefEV} | SPD: {pokemon.spdEV} </span>
                    <span></span>
                </div>
            }
        </div>
    );
} 