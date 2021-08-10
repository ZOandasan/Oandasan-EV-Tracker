import GameTableItemCard from '../GameTableItemCard/GameTableItemCard'

export default function GameTableItem({ saveFile, selected, changeSelected }){
    if(selected === saveFile._Id) {
        return (
            <div
            className="GameTableItem" 
            style={{border:" 1px solid black"}}
            onClick={() => changeSelected(saveFile._Id)}>
                <GameTableItemCard region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    } else {
        return (
            <div
            className="GameTableItem" 
            onClick={() => changeSelected(saveFile._Id)}>
                <GameTableItemCard region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    }
}