import React from 'react'
const Button = ({text, func,param}) => {
    return ( 
        <div
        onClick={()=>{func(param)}} 
        className='rounded-lg bg-black p-2 select-none text-white font-bold w-full text-center cursor-pointer transition-all hover:translate-y-[2px]'>
            {text}
        </div>
     );
}
  
export default Button;