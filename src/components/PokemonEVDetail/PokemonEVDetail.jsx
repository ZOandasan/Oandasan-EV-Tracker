import { useState } from "react";
import * as UPokemonAPI from '../../utilities/user-pokemon-api'

export default function PokemonEVDetail({pokemon, saveId}){
    const [hpEV, setHPEV] = useState(pokemon.hpEV);
    const [atkEV, setAtkEV] = useState(pokemon.atkEV);
    const [defEV, setDefEV] = useState(pokemon.defEV);
    const [spatkEV, setSpAtkEV] = useState(pokemon.spAtkEV);
    const [spdefEV, setSpDefEV] = useState(pokemon.spDefEV);
    const [spdEV, setSpdEV] = useState(pokemon.spdEV);

    function changeHP(val){
        setHPEV(hpEV + val)
        updateEVTotal(val, 'hpEV');
    }
    function changeAtk(val){
        setAtkEV(atkEV + val)
        updateEVTotal(val, 'atkEV');
    }
    function changeDef(val){
        setDefEV(defEV + val)
        updateEVTotal(val, 'defEV');
    }
    function changeSpAtk(val){
        setSpAtkEV(spatkEV + val)
        updateEVTotal(val, 'spAtkEV');
    }
    function changeSpDef(val){
        setSpDefEV(spdefEV + val)
        updateEVTotal(val, 'spDefEV');
    }
    function changeSpd(val){
        setSpdEV(spdEV + val)
        updateEVTotal(val, 'spdEV');
    }

    async function updateEVTotal(value, stat){
        const saveData = await UPokemonAPI.updatePokemonEV(saveId, pokemon._id, value, stat);
    }

    return (
    <>
        <div>
            <span>
                <button onClick={() => changeHP(10)}>+10</button>
                <button onClick={() => changeHP(1)}>+1</button>
                HP: {hpEV}
                <button onClick={() => changeHP(-1)}>-1</button>
                <button onClick={() => changeHP(-10)}>-10</button>
            <br/> 
                <button onClick={() => changeAtk(10)}>+10</button>
                <button onClick={() => changeAtk(1)}>+1</button>
                ATK: {atkEV}
                <button onClick={() => changeAtk(-1)}>-1</button>
                <button onClick={() => changeAtk(-10)}>-10</button>
            <br/> 
                <button onClick={() => changeDef(10)}>+10</button>
                <button onClick={() => changeDef(1)}>+1</button>
                DEF: {defEV}
                <button onClick={() => changeDef(-1)}>-1</button>
                <button onClick={() => changeDef(-10)}>-10</button>
            <br/> 
                <button onClick={() => changeSpAtk(10)}>+10</button>
                <button onClick={() => changeSpAtk(1)}>+1</button>
                Sp.ATK: {spatkEV}
                <button onClick={() => changeSpAtk(-1)}>-1</button>
                <button onClick={() => changeSpAtk(-10)}>-10</button>
            <br/> 
                <button onClick={() => changeSpDef(10)}>+10</button>
                <button onClick={() => changeSpDef(1)}>+1</button>
                Sp.Def: {spdefEV}
                <button onClick={() => changeSpDef(-1)}>-1</button>
                <button onClick={() => changeSpDef(-10)}>-10</button>
            <br/> 
                <button onClick={() => changeSpd(10)}>+10</button>
                <button onClick={() => changeSpd(1)}>+1</button>
                SPD: {spdEV}
                <button onClick={() => changeSpd(-1)}>-1</button>
                <button onClick={() => changeSpd(-10)}>-10</button>
            </span>
        </div>
    </>
    );
}