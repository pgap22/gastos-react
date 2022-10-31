import React from 'react'
import Item from './Item';
const ListItems = ({listItems}) => {
    return (   
        <div className='w-full flex flex-col md:max-h-[140px] md:overflow-y-auto scroll-p-2 px-2 gap-2'>
            {listItems.map(item => (
                <Item
                key={item.id}
                text={item.text}
                cost={item.cost}
                />
            ))}
        </div>
      );
} 
 
export default ListItems;