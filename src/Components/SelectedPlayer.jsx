import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayer = ({ selectedPlayer ,handleDelete}) => {
    // console.log(selectedPlayer)
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-bold mb-10'>Selected Players ({selectedPlayer.length}/6)</h1>

            <div>
                {
                    selectedPlayer.map(player=> <SelectedPlayerCard 
                        key={player.playerId}
                        player={player}
                        handleDelete={handleDelete}
                        ></SelectedPlayerCard>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;