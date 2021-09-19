export default function validateAdditionalInfo(formState){

    let errors = {};

    //Tamaño de empresa
    if (formState.tamanoEmpresa === ''){
        errors.tamanoEmpresa = 'El "Tamaño de empresa" es requerido.';
    }   

    //Gasto mensual en Pesos
    if (formState.gastoMensual === ''){
        errors.gastoMensual = 'El "Gasto mensual" es requerido'
    }

    //Tipos de compras
    if (formState.tipoCompras === ''){
        errors.tipoCompras = 'El "Tipo de Compra" es requerido'
    }
    return errors;
}