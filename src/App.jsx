import React, { useState } from "react";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
let totalMoney;
const App = () => {
    const [stage, setStage] = useState(1);
    const continueStage = ({mountMoney,setAlertError})=>{
        if(mountMoney > 0){
            setStage(2);
            totalMoney = mountMoney;
        }else{
            setAlertError(true);
        }
    }

    return ( 
        <>
            <header className="flex justify-center  my-8">
                <h1 className="md:text-5xl text-3xl font-bold">Gastos Semanal</h1>
            </header>

            <div className="flex items-center justify-center">
                {
                    stage === 1 ? <StageOne continueStage={continueStage} />  : <StageTwo totalMoney={totalMoney}/>
                }
            </div>
        </>
    );
};

export default App;
