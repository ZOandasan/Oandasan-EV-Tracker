import GameTableItemCard from '../GameTableItemCard/GameTableItemCard'
import './GameTableItem.css';

export default function GameTableItem({ saveFile, selected, changeSelected, index }){
    if(selected === index) {
        return (
            <div
            className="GameTableItem" 
            style={{border:" 3px solid white"}}
            onClick={() => changeSelected(index)}>
                <GameTableItemCard saveFile={saveFile} region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    } else {
        return (
            <div
            className="GameTableItem"
            onClick={() => changeSelected(index)}>
                <GameTableItemCard saveFile={saveFile} region={saveFile.region} generation={saveFile.generation} nuzlock={saveFile.isNuzlock}/>
            </div>
        );
    }
}