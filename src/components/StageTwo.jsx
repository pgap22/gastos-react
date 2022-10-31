import React, { useState } from 'react'
import Input from './Input';
import ShopIcon from "../icons/shop.svg"
import ShopIconActive from "../icons/shopActive.svg"
import MoneyIcon from "../icons/money.svg"
import MoneyIconActive from "../icons/moneyActive.svg"
import Button from './Button';
import DisplayMount from './DisplayMoney';
import { v4 as uuid } from 'uuid';
import ListItems from './ListItems';


const StageTwo = ({totalMoney}) => {


    const [gastos, setGastos] = useState([]);

    const [itemGasto, setItemGasto] = useState({
        text: '',
        cost: '',
    })

    const [errorGastos, setErrorGastos] = useState(false);

    const [invalid, setInvalid] = useState(false);

    const [restante, setRestante] = useState(totalMoney);


    const editGasto = (e)=>{
        setInvalid(false);
        setItemGasto({...itemGasto,
        [e.target.name] : e.target.value
        })
    }

    const saveGasto = ()=>{
        if(itemGasto.cost <= 0 || itemGasto.text === ''){
            setInvalid(true);
            return;
        }

        if(itemGasto.cost > restante){
            setErrorGastos(true)
            return;
        }

        itemGasto.id = uuid();
        setGastos([...gastos, itemGasto])
        setRestante(restante-itemGasto.cost);
        setItemGasto({
            text: '',
            cost: '',
        })
    }   


 
    return ( 
        <div className='bg-white w-full container-shadow md:grid md:grid-cols-[1fr,10px,1fr] max-w-5xl rounded-lg mx-5 my-2'>
            <div className='container-col'>
                <h2 className='font-bold text-xl '>Agrega tus gastos aqui</h2>
                <Input
                    value={itemGasto.text}
                    type={"text"}
                    name={"text"}
                    label={"Nombre del gasto"}
                    icon={ShopIcon}
                    iconActive={ShopIconActive}
                    placeholder={"Gasto"}
                    func={editGasto}
                    id={"text"}
                />
                <Input
                    value={itemGasto.cost}
                    type={"number"}
                    name={"cost"} 
                    label={"Cantidada de gasto"}
                    icon={MoneyIcon}
                    iconActive={MoneyIconActive}
                    placeholder={"Cantidad"}
                    func={editGasto}
                    id={"cost"}
                    
                />

                {
                    errorGastos ? <p className='text-red-500 text-center'>Te has execedido del presupuesto</p> : null
                }
                {
                   invalid ? <p className='text-red-500 text-center'>Rellena todos los campos</p> : null
                }

                <Button
                    func={saveGasto}
                    text={"Agregar gasto"}
                />
            </div>
            <div className='w-1 rounded-lg h-[75%] bg-black self-center  justify-self-center'></div>
            <div className='container-col items-center'>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-bold text-xl text-center '>Listado</h2>
                    <div className='flex gap-3'>
                        <DisplayMount text={"Presupuesto"} mount={totalMoney}/>
                        <DisplayMount text={"Restante"} mount={restante} color={true} totalMoney={totalMoney}/>
                    </div>
                    <ListItems listItems={gastos} />
                </div>
            </div>
        </div>
     );
}
 
export default StageTwo;