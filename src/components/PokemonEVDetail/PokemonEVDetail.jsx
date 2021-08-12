import { useState } from "react";

export default function PokemonEVDetail({pokemon}){
    const [hpEV, setHPEV] = useState(pokemon.hpEV);
    const [atkEV, setAtkEV] = useState(pokemon.atkEV);
    const [defEV, setDefEV] = useState(pokemon.defEV);
    const [spatkEV, setSpAtkEV] = useState(pokemon.spAtkEV);
    const [spdefEV, setSpDefEV] = useState(pokemon.spDefEV);
    const [spdEV, setSpdEV] = useState(pokemon.spdEV);

    function changeHP(val){
        setHPEV(hpEV + val)
    }
    function changeAtk(val){
        setAtkEV(atkEV + val)
    }
    function changeDef(val){
        setDefEV(defEV + val)
    }
    function changeSpAtk(val){
        setSpAtkEV(spatkEV + val)
    }
    function changeSpDef(val){
        setSpDefEV(spdefEV + val)
    }
    function changeSpd(val){
        setSpdEV(spdEV + val)
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