import React, { useEffect, useState } from 'react';
import PlayersCard from './PlayersCard';

const AvailablePlayes = () => {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-bold'>Available Playes</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                players.map(player=> <PlayersCard key={player.playerId} player={player}></PlayersCard>)
            }
            </div>
        </div>
    );
};

export default AvailablePlayes;