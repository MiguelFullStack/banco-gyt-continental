import loader from '../assets/loading.gif'
export const Spiner = ({seconds}) => {
  return (
    <>
      <p className='text-white text-center font-bold mt-5 mx-10'>Por favor, espera {seconds} segundos, estamos verificando tu información para confirmar tu identidad</p>
      <img className='mx-auto h-32 mt-5' src={loader} alt="loader" />
    </>
  )
}
