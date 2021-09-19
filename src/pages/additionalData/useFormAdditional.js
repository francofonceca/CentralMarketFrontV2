import { useState } from 'react';

export const useFormAdditional = ( validateAdditionalInfo ) => {
    
    const [formState, setFormState] = useState({
        tamanoEmpresa: '',
        gastoMensual: '',
        tipoCompras: ''
    });

    const [errors, setErrors] = useState({
        
    });

    const handleChange = (e) => {

        const {name, value} = e.target;


        setFormState({
            ...formState, 
            [ name ] : value,
        });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateAdditionalInfo(formState))
    }

    return {formState, handleChange, handleSubmit, errors};
}
