import GameTableItemCard from '../GameTableItemCard/GameTableItemCard'
import './GameTableItem.css';

export default function GameTableItem({ saveFile, selected, changeSelected }){
    if(selected === saveFile._id) {
        return (
            <div
            className="GameTableItem" 
            style={{border:" 1vmin solid rgb(120, 0, 0)"}}
            onClick={() => changeSelected(saveFile._id)}>
                <GameTableItemCard saveFile={saveFile} region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    } else {
        return (
            <div
            className="GameTableItem"
            onClick={() => changeSelected(saveFile._id)}>
                <GameTableItemCard saveFile={saveFile} region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    }
}