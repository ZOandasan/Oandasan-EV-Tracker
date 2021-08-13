import { useState } from "react";
import * as UPokemonAPI from '../../utilities/user-pokemon-api'

export default function PokemonEVDetail({pokemon, saveId}){
    const [hpEV, setHPEV] = useState(pokemon.hpEV);
    const [atkEV, setAtkEV] = useState(pokemon.atkEV);
    const [defEV, setDefEV] = useState(pokemon.defEV);
    const [spatkEV, setSpAtkEV] = useState(pokemon.spAtkEV);
    const [spdefEV, setSpDefEV] = useState(pokemon.spDefEV);
    const [spdEV, setSpdEV] = useState(pokemon.spdEV);
    const [totalEVs, setTotalEVs] = useState(hpEV + atkEV + defEV + spatkEV + spdefEV + spdEV)

    function changeEV(val, EV, setEV, EVString){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            helpHandleChangeEV(val, EV, setEV, EVString);
        } else if (val > 0 && 510 - totalEVs) {
            let newVal = 510 - totalEVs;
            helpHandleChangeEV(newVal, EV, setEV, EVString);
        } else if (val < 10) {
            let newVal = -totalEVs;
            helpHandleChangeEV(newVal, EV, setEV, EVString);
        }
    }

    function helpHandleChangeEV(val, EV, setEV, EVString){
        if (EV + val > -1 && EV + val < 253){
            setTotalEVs(totalEVs + val);
            setEV(EV + val);
            let newEV = EV + val;
            updateEVTotal(newEV, EVString);
        } else if( val > 0 ){
            let newVal = 252 - EV;
            setTotalEVs(totalEVs + newVal);
            setEV(252);
            updateEVTotal(252, EVString);
        } else {
            let newVal = (-val) + (EV + val);
            setTotalEVs(totalEVs - newVal);
            setEV(0);
            updateEVTotal(0, EVString);
        }
    }

    function changeHP(val){
        changeEV(val, hpEV, setHPEV, 'hpEV');
    }

    function changeAtk(val){
        changeEV(val, atkEV, setAtkEV, 'atkEV');
    }

    function changeDef(val){
        changeEV(val, defEV, setDefEV, 'defEV');
    }

    function changeSpAtk(val){
        changeEV(val, spatkEV, setSpAtkEV, 'spAtkEV');
    }

    function changeSpDef(val){
        changeEV(val, spdefEV, setSpDefEV, 'spDefEV');
    }

    function changeSpd(val){
        changeEV(val, spdEV, setSpdEV, 'spdEV');
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