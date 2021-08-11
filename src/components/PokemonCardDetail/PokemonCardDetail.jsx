export default function PokemonCardDetail({pokemon}){
    return (
    <>
        <div>
            <span>HP: {pokemon.hpEV} | ATK: {pokemon.atkEV} | DEF: {pokemon.defEV} | Sp.ATK: {pokemon.spAtkEV} | Sp.Def: {pokemon.spDefEV} | SPD: {pokemon.spdEV} </span>
        </div>
    </>
    );
}