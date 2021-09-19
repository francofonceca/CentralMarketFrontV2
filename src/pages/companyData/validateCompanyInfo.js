export default function validateCompanyInfo(formState){

    let errors = {};

    //Nombre
    if (!formState.nombre.trim()){
        errors.nombre = 'El "Nombre" es requerido.';
    } else if (formState.nombre.trim().length <= 2){
        errors.nombre = 'El "Nombre" debe tener mas de dos caracteres.';
    }

    //Razon social
    if (!formState.razonSocial.trim()){
        errors.razonSocial = 'La "Razon Social" es requerida.'
    } else if (formState.razonSocial.trim().length <= 2){
        errors.razonSocial = 'La "Razon Social" debe tener mas de dos caracteres.';
    }

    //Cuit
    if (!formState.cuit.trim()){
        errors.cuit = 'El "CUIT" es requerido'
    } else if (!/^\d+$/.test(formState.cuit)){
        errors.cuit = 'El "CUIT" solo debe contener numeros sin "-" ni ".".';
    }  else if (formState.cuit.trim().length < 11){
        errors.cuit = 'El "CUIT" debe ser de al menos 11 digitos.';
    }

    return errors;
}