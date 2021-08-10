import GameTableItem from '../GameTableItem/GameTableItem';

export default function GameListTable({saveFiles, selected, changeSelected}){
    const gameTableItem = saveFiles.map((s, idx) => <GameTableItem  index={idx+1} saveFile={s} key={idx} selected={selected} changeSelected={changeSelected}/>)

    return (
        <>
        <h3>GAME LIST TABLE</h3>
        <div className="TableItem">
            {gameTableItem}
        </div>
        </>
    );
}