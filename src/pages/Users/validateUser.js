export default function validateUser(formState){

    let errors = {};

    //Nombre
    if (!formState.legajo.trim()){
        errors.legajo = 'El "Legajo" es requerido.';
    } else if (formState.legajo.trim().length <= 2){
        errors.legajo = 'El "Legajo" debe tener mas de dos caracteres.';
    }

    //Area
    if (!formState.area.trim()){
        errors.area = 'El "Area" es requerido.';
    } else if (formState.area.trim().length <= 2){
        errors.area = 'El "Area" debe tener mas de dos caracteres.';
    }

    //Email
    if (!formState.email.trim()){
        errors.email = 'El "E-mail" es requerido.';
    } else if (formState.email.trim().length <= 2){
        errors.email = 'El "E-mail" debe tener mas de dos caracteres.';
    }

    //Telefono
    if (!formState.telefono.trim()){
        errors.telefono = 'El "Telefono" es requerido.';
    } else if (formState.telefono.trim().length <= 2){
        errors.telefono = 'El "Telefono" debe tener mas de dos caracteres.';
    }

    //Sucursal
    if (!formState.sucursal.trim()){
        errors.sucursal = 'La "Sucursal" es requerida.';
    } else if (formState.sucursal.trim().length <= 2){
        errors.sucursal = 'La "Sucursal" debe tener mas de dos caracteres.';
    }


    return errors;
}