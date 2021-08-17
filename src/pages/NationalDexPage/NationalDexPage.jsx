import { set } from 'mongoose';
import { useState } from 'react';
export default function NationalDex() {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);
  
  function changePage(evt){
    setPage(evt.target.value);
    let newStart = (20*(page - 1)) + 1;
    setStart(newStart);
    setEnd(newStart + 19);
  }

  let initSelect = [];
  for (let idx = 1; 42 > idx; ++idx){
    initSelect.push (
      <option value={`${idx}`}>{(20*(idx - 1)) + 1}-{20*(idx)}</option>
    );
  }

  return (
    <div>
      <h1>National Dex</h1>
      <h3>Dex Numbers: {(20*(page - 1)) + 1}-{20*(page)}</h3>
        <select name="page" onChange={changePage}>
          {initSelect.map((o, idx) =>(
            <>{o}</>
          ))}
        </select> 
    </div>
  );
}