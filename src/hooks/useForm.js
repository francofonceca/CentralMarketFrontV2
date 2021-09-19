import {useState} from 'react';

export const useForm = ( initialState, validateInfo ) => {
    
    const [formState, setFormState] = useState(initialState);

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

        setErrors(validateInfo(formState))
    }

    return {formState, handleChange, handleSubmit, errors};
}
