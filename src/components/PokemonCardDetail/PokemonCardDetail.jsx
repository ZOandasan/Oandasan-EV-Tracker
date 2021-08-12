export default function PokemonCardDetail({pokemon}){
    return (
    <>
        <div>
            <span>
                <button>+10</button> <button>+1</button> HP: {pokemon.hpEV} <button>-1</button> <button>-10</button>
                <br/> 
                <button>+10</button> <button>+1</button> ATK: {pokemon.atkEV} <button>-1</button> <button>-10</button>
                <br/> 
                <button>+10</button> <button>+1</button> DEF: {pokemon.defEV} <button>-1</button> <button>-10</button>
                <br/> 
                <button>+10</button> <button>+1</button> Sp.ATK: {pokemon.spAtkEV} <button>-1</button> <button>-10</button>
                <br/> 
                <button>+10</button> <button>+1</button> Sp.Def: {pokemon.spDefEV} <button>-1</button> <button>-10</button>
                <br/> 
                <button>+10</button> <button>+1</button> SPD: {pokemon.spdEV} <button>-1</button> <button>-10</button>
            </span>
        </div>
    </>
    );
}