import React from 'react'
const DisplayMount = ({mount, text, color, totalMoney}) => {
    let style = "display-price "

    const fiftyPercent = totalMoney * 0.50;
    const seventyFivePercent = totalMoney * 0.75
    const moneyWasted =   totalMoney - mount;

    if(color & moneyWasted >= seventyFivePercent){
        style = style + "pobre" 
    }
    else if(color & moneyWasted >= fiftyPercent){
        style = style + "cuidao";
    }
    else if(color) {
        style = style + "bien";
    }
 
    

    return ( 
    <div className={style}>
        <p className='font-bold text-sm'>{text}</p>
        <p className='font-bold text-2xl break-all'>$ {mount}</p>
    </div>

     );
}
 
export default DisplayMount;