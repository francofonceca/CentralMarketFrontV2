import {useState} from 'react';

export const useFormCompany = ( validateCompanyInfo ) => {
    
    const [formState, setFormState] = useState({
        nombre:'',
        razonSocial: '',
        cuit: ''
    });

    const [errors, setErrors] = useState({
        
    });

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setErrors(validateCompanyInfo(formState))
    }

    return {formState, handleChange, handleSubmit, errors};
}
