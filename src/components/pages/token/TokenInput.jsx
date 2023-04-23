import { useState } from "react";
// import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector";

export const TokenInput = ({
    token1, handleChange, handleBlur, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
}) => {
  
  return (
    <div className="flex items-center gap-3 flex-col">
      
      {/* <UsernameAndPasswordInputSelector 
                  
        selectActive={selectActive} 
        setSelectActive={setSelectActive}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        opciones={opciones}
      
      /> */}

      <input 
        placeholder="XXXXXXXXXX"
        type="text"
        maxLength={10}
        minLength={10}
        required
        name="token1"
        onBlur={handleBlur}
        onChange={handleChange}
        value={token1}
        inputMode="text"
        className="outline-none w-[160px] h-[28px] text-[#032a53] rounded-[10px] p-[7px]"
      />

    </ div>
  )
}
