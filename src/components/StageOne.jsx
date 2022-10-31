import React,{useState} from 'react'
import Button from "./Button";
import Input from "./Input";
import WalletIcon from "../icons/wallet.svg";
import WalletIconActive from "../icons/walletActive.svg";

const StageOne = ({continueStage}) => {

    const [mountMoney, setMountMoney] = useState('');

    const [alertError, setAlertError] = useState(false);

    const getMountMoney = (e)=>{
        setMountMoney(parseFloat(e.target.value));
        setAlertError(false);
    }

    
    
    return ( 
    <div className="w-full flex justify-center">
        <div className="w-full mx-4 p-7 bg-white container-shadow rounded-md md:gap-1 gap-4 flex flex-col items-center max-w-3xl">
            <h2 className="font-bold text-xl">Coloca tu presupuesto</h2>

            {
                (alertError) ? <p className="text-red-500">Presupesto no valido</p> : null
            }

            <div className='w-full flex flex-col gap-7'>
                <Input 
                id={"num"}
                icon={WalletIcon}
                iconActive={WalletIconActive}
                placeholder={"Ingresa tu presupuesto"}
                label={"Presupuesto: "}
                type={"number"}
                func={getMountMoney}
                />

                <Button func={continueStage} param={{mountMoney: mountMoney, setAlertError: setAlertError}} text={"Definir Presupuesto"} /> 
            </div>
        </div>
    </div>
     );
}
 
export default StageOne;