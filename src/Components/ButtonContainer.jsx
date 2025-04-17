import React from 'react';
import '../Style/buttonContainer.css'

const ButtonContainer = ({handleIsActive,isactive}) => {
    
    return (
        <div className=''>
            <button 
            onClick={()=>handleIsActive("available")} 
            className={`${isactive.btn? "btn active" : "btn"}`}
            >Available</button>

            <button 
            onClick={()=>handleIsActive("selected")} 
            className={`${isactive.btn? "btn" : "btn active"}`}>
                Selected (0)
            </button>
            
        </div>
    );
};

export default ButtonContainer;