export default function GameTableItemCard({region, generation, nuzlock}){
    return (
        <>
            {nuzlock ? 
                <>
                    <div>Game in {region}, Gen {generation}</div>
                    <div>Nuzlock</div>
                </> 
                :
                <>
                    <div>Game in {region}, Gen {generation}</div>
                </>
            }
        </>
    );
}