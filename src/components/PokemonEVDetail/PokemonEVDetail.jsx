import { useState } from "react";
import * as UPokemonAPI from '../../utilities/user-pokemon-api'
import './pokemonEV.css'

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
        <div className="EV">
            <span>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeHP(10)}>+10</button>
                        <button onClick={() => changeHP(1)}>+1</button>
                    </div>
                    <span className="EVText">HP: {hpEV}</span>
                    <div>
                        <button onClick={() => changeHP(-1)}>-1</button>
                        <button onClick={() => changeHP(-10)}>-10</button>
                    </div>
                </div>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeAtk(10)}>+10</button>
                        <button onClick={() => changeAtk(1)}>+1</button>
                    </div>
                    <span className="EVText">ATK: {atkEV}</span>
                    <div>
                        <button onClick={() => changeAtk(-1)}>-1</button>
                        <button onClick={() => changeAtk(-10)}>-10</button>
                    </div>
                </div>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeDef(10)}>+10</button>
                        <button onClick={() => changeDef(1)}>+1</button>
                    </div>
                    <span className="EVText">DEF: {defEV}</span>
                    <div>
                        <button onClick={() => changeDef(-1)}>-1</button>
                        <button onClick={() => changeDef(-10)}>-10</button>
                    </div>
                </div>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeSpAtk(10)}>+10</button>
                        <button onClick={() => changeSpAtk(1)}>+1</button>
                    </div>
                    <span className="EVText">Sp.ATK: {spatkEV}</span>
                    <div>
                        <button onClick={() => changeSpAtk(-1)}>-1</button>
                        <button onClick={() => changeSpAtk(-10)}>-10</button>
                    </div>
                </div>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeSpDef(10)}>+10</button>
                        <button onClick={() => changeSpDef(1)}>+1</button>
                    </div>
                    <span className="EVText">Sp.Def: {spdefEV}</span>
                    <div>
                        <button onClick={() => changeSpDef(-1)}>-1</button>
                        <button onClick={() => changeSpDef(-10)}>-10</button>
                    </div>
                </div>
                <div className="EVdiv">
                    <div>
                        <button onClick={() => changeSpd(10)}>+10</button>
                        <button onClick={() => changeSpd(1)}>+1</button>
                    </div>
                    <span className="EVText">SPD: {spdEV}</span>
                    <div>
                        <button onClick={() => changeSpd(-1)}>-1</button>
                        <button onClick={() => changeSpd(-10)}>-10</button>
                    </div>
                </div> 
            </span>
        </div>
    </>
    );
}