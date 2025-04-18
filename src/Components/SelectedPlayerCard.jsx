import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";

const SelectedPlayerCard = ({ player,handleDelete }) => {
    const { playerId,image, name, battingType } = player;
    return (
        <div className='flex justify-between items-center mb-4 border border-gray-300 p-3 rounded-xl'>
            <div className='flex gap-3'>
                <div>
                    <img className='w-20 h-20 rounded-md' src={image} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>{name}</h4>
                    <p className='text-gray-600'>{battingType}</p>
                </div>
            </div>

            <div>
            <RiDeleteBin2Fill onClick={()=>handleDelete(playerId)} className='text-2xl text-red-600' />
            </div>
        </div>
    );
};

export default SelectedPlayerCard;