import React, { useEffect, useRef, useState } from "react";
const Input = ({ icon,iconActive, placeholder, type, label, func, param, name, value, id }) => {
  
  const [styles, setstyles] = useState({
    placeholder: "placeholder-off",
    input: "input-off",
    icon: icon,
    border: "input-normal",
  });
   
  
  const stylesOn = () => {
    setstyles({
      placeholder: "placeholder-on",
      input: "input-on",
      icon: iconActive,
      border: "input-active"
    });
    input.current.focus();
  };
  
  const stylesOff = (e) => {
    if (!e.target.value) {
      setstyles({
        placeholder: "placeholder-off",
        input: "input-off",
        icon: icon,
        border: "input-normal"
      });
    }
  };
  
  useEffect(()=>{
    if(value !== undefined){
      if(!value & input.current !== document.activeElement){
        setstyles({
          placeholder: "placeholder-off",
          input: "input-off",
          icon: icon,
          border: "input-normal"
        });
        
      }
    }
  },[value, icon])


     
  const input = useRef();

  return (
    <div className="w-full">
      <p className="font-bold">{label}</p>
      <div
        onClick={stylesOn}
        className={styles.border}
      >
        <img src={styles.icon} alt="icon" draggable={false} />

        <div className="flex flex-col cursor-text w-full">
          <p className={styles.placeholder}>{placeholder}</p>

          <input
            id={id}
            ref={input}
            type={type}
            min={0}
            value={value}
            name={name}
            className={styles.input}
            onBlur={stylesOff}
            onChange={(e)=>{
                func(e,param)
            }}
            onKeyUp={(e)=>{
              if(e.code === "Tab"){
                document.querySelectorAll("input")[1].focus();
              }
            }}
            onFocus={()=>{
              stylesOn();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
