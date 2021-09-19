export default function validateAdditionalDataBussinessInfo( bussiness ){

    let errors = {};

    //Nombre de empresa
    if (bussiness.empresa === ''){
        errors.empresa = 'El nombre de la "Empresa" es requerida.';
    }   

    //Razon social de empresa
    if (bussiness.razonSocial === ''){
        errors.razonSocial = 'La "Razon Social" es requerida'
    }

    //Cuit de la empresa
    if (bussiness.cuit === 0){
        errors.cuit = 'El "Cuit" es requerido'
    }
    
    //Tamaño de la empresa
    if (bussiness.tamanoEmpresa === 0){
        errors.tamanoEmpresa = 'El "Tamaño de la empresa" es requerido'
    }
    
    //Gasto mensual
    if (bussiness.gastoMensual === 0){
        errors.gastoMensual = 'El "Gasto mensual" es requerido'
    }

    //Tipo de compras de la empresa
    if (bussiness.tipoCompras === ''){
        errors.tipoCompras = 'El "Tipo de compras" es requerido'
    }

    return errors;
}