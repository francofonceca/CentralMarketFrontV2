import { useState } from "react";


export const useFormBussiness = ( validateAdditionalDataBussinessInfo ) => {

    const [bussiness, setBussiness] = useState({
        empresa: '',
        razonSocial: '',
        cuit: 0,
        tamanoEmpresa: 0,
        gastoMensual: 0,
        tipoCompras: ''
    });

    const [errors, setErrors] = useState({
        
    });

    const handleChange = (e) => {

        const {name, value} = e.target;

        setBussiness({
            ...bussiness,
            [ name ]: value,
        });

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateAdditionalDataBussinessInfo(bussiness))
    } 

    return { bussiness, handleChange, handleSubmit, errors };

}
