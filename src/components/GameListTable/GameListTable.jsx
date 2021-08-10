import GameTableItem from '../GameTableItem/GameTableItem';

export default function GameListTable({saveFiles, selected, changeSelected}){
    const gameTableItem = saveFiles.map((s, idx) => <GameTableItem  saveFile={s} key={idx} selected={selected} changeSelected={changeSelected}/>)

    return (
        <>
        <h3>GAME LIST TABLE</h3>
        <div className="TableItem">
            {gameTableItem}
        </div>
        </>
    );
}