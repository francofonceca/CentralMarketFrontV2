import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

//import { useFormCompany } from './useFormCompany';
import { useForm } from '../../hooks/useForm';
import validateCompanyInfo from './validateCompanyInfo';

import './CompanyDataReg.scss';

const initalState = {
    nombre:'',
    razonSocial: '',
    cuit: ''
}

export const CompanyDataForm = () => {
   

    const { handleChange, formState, handleSubmit, errors } = useForm( initalState, validateCompanyInfo);

    //const { handleChange, formState, handleSubmit, errors } = useFormCompany(validateCompanyInfo);

    return (
        <div className='form-div'>
            <Card className='shadow border-card'>
                <Form className='padding-form' onSubmit={handleSubmit}>
                    <Form.Label className='text-form-tittle'>Datos de tu empresa</Form.Label>
                    <Form.Group controlId='formNombre'>
                        <Form.Label className='text-form-label'>Nombre</Form.Label>
                        <Form.Control name='nombre' 
                            value={ formState.nombre }
                            onChange={ handleChange }
                        />
                        {errors.nombre && <p className='text-error'>{errors.nombre}</p>}
                    </Form.Group>

                    <Form.Group controlId='formRazonSocial'>
                        <Form.Label className='text-form-label'>Razón Social</Form.Label>
                        <Form.Control name='razonSocial' 
                            value={ formState.razonSocial }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    {errors.razonSocial && <p className='text-error'>{errors.razonSocial}</p>}

                    <Form.Group controlId='formCuit'>
                        <Form.Label className='text-form-label'>Cuit</Form.Label>
                        <Form.Control name='cuit' 
                            value={ formState.cuit }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    {errors.cuit && <p className='text-error'>{errors.cuit}</p>}

                    <div className='text-center'>
                        <Button className='form-button-comp-data' type='submit'>ENVIAR</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}
