import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const PlayersCard = ({ player }) => {

    const { name, image, country, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='w-[350px] h-[250px] object-cover'
                        src={image}
                        alt="player image" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        <FaUser className='text-lg' />
                        <h2 className="card-title">{name}</h2>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 text-gray-500'>
                            <FaFlag />
                            <span>{country}</span>
                        </p>
                        <button className='btn btn-sm'>{role}</button>
                    </div>

                    <div className='my-2'>
                        <h2 className='text-lg font-bold mb-2'>Rating</h2>
                        <div className='flex items-center justify-between text-gray-500'>
                            <p>{battingType}</p>
                            <p>{bowlingType}</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-lg font-bold'>Price: {biddingPrice}</p>
                        <button className='btn'>Choose Player</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlayersCard;