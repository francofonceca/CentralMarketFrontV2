import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import validateDeliveryPointInfo from './validateDeliveryPointInfo';

import { GenericDataTable } from '../../components/DataTable/GenericDataTable';


const initialState = {
    nombre: '',
    calle: '',
    numero: '',
    cp: '',
    ciudad: '',
    provincia: '',
    telefono: '',
}

const DeliveryPointsForm = ({ closeModal }) => {

    const columns = [ 
        {field:'user', header:'Usuarios', sort:true, body:true},
        {field:'role', header:'Rol', sort:true},
        {field:'invitation', header:'Invitación', sort:true}
    ];


    const { handleChange, formState, handleSubmit, errors } = useForm( initialState, validateDeliveryPointInfo);

    const  handlePreSubmit = async(e) => {
        
        await e.preventDefault();
        handleSubmit();

        closeModal();
    }

    return (
        <div className='pt-4'>
            <Row>
                <Col className='justify-content-md-center' xs='12'>
                    <Row className='px-5 py-3'>
                        <Form.Label className='text-form-sub-tittle'>Agregar Delivery Point</Form.Label>
                    </Row>
                    
                    <Form  className='px-5 pb-3' onSubmit={handlePreSubmit}>
                        <Row>
                            <Col xs='4'>
                                <Form.Group controlId='formNombre'>
                                    <Form.Label className='text-form-label'>Nombre</Form.Label>
                                    <Form.Control name='nombre' 
                                        value={ formState.nombre }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='py-3'>
                            <Form.Label className='text-form-sub-tittle'>Datos del Delivery Point</Form.Label>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                <Form.Group controlId='formCalle'>
                                    <Form.Label className='text-form-label'>Calle</Form.Label>
                                    <Form.Control name='calle' 
                                        value={ formState.calle }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs='4'>
                                <Form.Group controlId='formNumero'>
                                    <Form.Label className='text-form-label'>Numero</Form.Label>
                                    <Form.Control name='numero'
                                        type='number'
                                        value={ formState.numero }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs='4'>
                                <Form.Group controlId='formCP'>
                                    <Form.Label className='text-form-label'>CP</Form.Label>
                                    <Form.Control name='cp' 
                                        value={ formState.cp }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>

                            </Col>

                        </Row>
                        <Row className='mb-3'>
                            <Col xs='4'>
                                <Form.Group controlId='formCiudad'>
                                    <Form.Label className='text-form-label'>Ciudad</Form.Label>
                                    <Form.Control name='ciudad' 
                                        value={ formState.ciudad }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs='4'>
                                <Form.Group controlId='formProvincia'>
                                    <Form.Label className='text-form-label'>Provincia</Form.Label>
                                    <Form.Control name='provincia' 
                                        value={ formState.provincia }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs='4'>
                                <Form.Group controlId='formTelefono'>
                                    <Form.Label className='text-form-label'>Telefono</Form.Label>
                                    <Form.Control name='telefono' 
                                        value={ formState.telefono }
                                        onChange= { handleChange }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <GenericDataTable 
                            columns={ columns } 
                            tittle='Usuarios del delivery point'
                            image='images/icons/user-icon-black.svg'
                        />

                        <div className='text-center py-4'>
                            <Button className='form-button' type='submit'>GUARDAR DATOS</Button>
                        </div>
                        {/* <Row className='pb-5'>
                            <Col className='text-center mb-3'>
                                <Button type='submit'>ENVIAR</Button>
                            </Col>
                        </Row> */}
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default DeliveryPointsForm
