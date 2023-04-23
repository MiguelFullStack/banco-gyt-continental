export const tokenValidate = ({values, virtualKeyword}) => {

    let errors = {}
    
    if (values.token1 == false) {
        errors.token1 = 'El campo correo es requerido'
    }

    return errors

}