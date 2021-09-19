import { useState } from "react";


export const useFormBranch = () => {

    const [branch, setBranch] = useState({
        direccion: '',
        cp: '',
        provincia: '',
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    const [errors, setErrors] = useState({
        
    });

    const handleChange = (e) => {

        const {name, value} = e.target;

        setBranch({
            ...branch,
            [ name ]: value,
        });

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return {branch, handleChange, handleSubmit, errors};

}
