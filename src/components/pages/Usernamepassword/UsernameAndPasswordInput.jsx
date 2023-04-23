import { useState } from "react";
// import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector";

export const UsernameAndPasswordInput = ({
  username, password, typeDocument, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
  selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  
  const [showPassword, setShowPassword] = useState(false);

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
        placeholder="Usuario"
        type="text" 
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        value={username}
        inputMode="text"
        className="outline-none w-[160px] h-[28px] text-[#032a53] rounded-[10px] p-[7px]"
      />
      {/* 
        {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        } 
      */}
      
      <input 
        placeholder="Contraseña"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={virtualKeyword === true ? valueKeyBoardVirtual : password}
        type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
        // PUEDE EL INPUT MODE
        inputMode="text"
        className="outline-none w-[160px] h-[28px] text-[#032a53] rounded-[10px] p-[7px]"
      />
      {/* 
        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
      */}
      
      {
        showPasswordMode === true ? 
          (
            <div>
              <input 
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox" 
                id="passwordView" 
              />
              <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
            </div>
          ) 
        :  null
      }
      
    </ div>
  )
}
