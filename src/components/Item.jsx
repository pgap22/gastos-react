import React from 'react';
const Item = ({text, cost}) => {
    return ( 
        <div className='w-full flex justify-between'>
            <p>{text}</p>
            <div className='font-bold bg-black rounded-md p-1 px-2 text-white' >$ {cost}</div>
        </div>
     );
}
 
export default Item; 