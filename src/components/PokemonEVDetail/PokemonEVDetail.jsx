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

    function changeHP(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (hpEV + val > -1 && hpEV + val < 253){
                setTotalEVs(totalEVs + val);
                setHPEV(hpEV + val);
                updateEVTotal(hpEV, 'hpEV');
            }
        }
    }
    function changeAtk(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (atkEV + val > -1 && atkEV + val < 253){
                setTotalEVs(totalEVs + val);
                setAtkEV(atkEV + val)
                updateEVTotal(atkEV, 'atkEV');
            }
        }
    }
    function changeDef(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (defEV + val > -1 && defEV + val < 253){
                setTotalEVs(totalEVs + val);
                setDefEV(defEV + val)
                updateEVTotal(defEV, 'defEV');
            }
        }
    }
    function changeSpAtk(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (spatkEV + val > -1 && spatkEV + val < 253){
                setTotalEVs(totalEVs + val);
                setSpAtkEV(spatkEV + val)
                updateEVTotal(spatkEV, 'spAtkEV');
            }
        }
    }
    function changeSpDef(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (spdefEV + val > -1 && spdefEV + val < 253){
                setTotalEVs(totalEVs + val);
                setSpDefEV(spdefEV + val)
                updateEVTotal(spdefEV, 'spDefEV');
            }
        }
    }
    function changeSpd(val){
        if (totalEVs + val > -1 && totalEVs + val < 511){
            if (spdEV + val > -1 && spdEV + val < 253){
                setTotalEVs(totalEVs + val);
                setSpdEV(spdEV + val)
                updateEVTotal(spdEV, 'spdEV');
            }
        }
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