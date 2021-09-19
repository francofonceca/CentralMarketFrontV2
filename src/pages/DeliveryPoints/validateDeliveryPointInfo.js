export default function validateCompanyInfo(branch){

    let errors = {};

    //Nombre
    if (!branch.nombre.trim()){
        errors.nombre = 'El "Nombre" es requerido.';
    } else if (branch.nombre.trim().length <= 2){
        errors.nombre = 'El "Nombre" debe tener mas de dos caracteres.';
    }

    //Apellido
    if (!branch.apellido.trim()){
        errors.apellido = 'El "Apellido" es requerido.';
    } else if (branch.apellido.trim().length <= 2){
        errors.apellido = 'El "Apellido" debe tener mas de dos caracteres.';
    }

    //Provincia

    //Email
    if (!branch.email.trim()){
        errors.email = 'El "Email" es requerido.'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(branch.email)){
        errors.email = 'La "Email" debe tener el formato correcto.';
    }

    //telefono
    if (!branch.telefono.trim()){
        errors.telefono = 'El "telefono" es requerido'
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(branch.telefono)){
        errors.telefono = 'El "telefono" solo debe contener numeros';
    }

    return errors;
}