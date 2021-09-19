import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import { FaPen } from 'react-icons/fa';
import { useFormBussiness } from './useFormBussiness';
import validateAdditionalDataBussinessInfo from './validateAdditionalDataBussinessInfo';

export const AdditionalDataBussinessForm = () => {

    const { handleChange, handleSubmit, errors } = useFormBussiness( validateAdditionalDataBussinessInfo );

    return (
        <Row>
            <Form onSubmit = { handleSubmit } >
                <Col className='justify-content-md-center' xs='12'>
                    <Card className='shadow border-card-branch'>
                        <Card.Body >
                        <Row className='px-3 pt-3'>
                            <Col xs='10'>
                            </Col>
                            <Col xs='2'>
                                <div className='buttons-card-header'>
                                    <FaPen className="fa-pen" />
                                </div>
                            </Col>
                        </Row>
                            <Row className='px-3 pb-5'>
                                <Col>
                                    <Form.Group controlId='formEmpresa'>
                                        <Form.Label className='text-form-label'>Empresa</Form.Label>
                                        <Form.Control 
                                            name="empresa" 
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.empresa && <p className='text-error'>{errors.empresa}</p>}
                                </Col>
                                <Col>
                                    <Form.Group controlId='formRazonSocial'>
                                        <Form.Label className='text-form-label'>Razon Social</Form.Label>
                                        <Form.Control 
                                            name="razonSocial" 
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.razonSocial && <p className='text-error'>{errors.razonSocial}</p>}
                                </Col>
                                <Col>
                                    <Form.Group controlId='formCuit'>
                                        <Form.Label className='text-form-label'>CUIT</Form.Label>
                                        <Form.Control 
                                            name="cuit"
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.cuit && <p className='text-error'>{errors.cuit}</p>}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <p className="m-5"></p>
                <Col className='justify-content-md-center' xs='12'>
                    <Card className='shadow border-card-branch'>
                        <Card.Body >
                            <Row className='px-3 pt-3'>
                                <Col xs='10'>
                                </Col>
                                <Col xs='2'>
                                    <div className='buttons-card-header'>
                                        <FaPen className="fa-pen" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='px-3 pb-5'>
                                <Col>
                                    <Form.Group controlId='formtamanoEmpresa'>
                                        <Form.Label className='text-form-label'>Tamaño empresa*</Form.Label>
                                        <Form.Control 
                                            name="tamanoEmpresa" 
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.tamanoEmpresa && <p className='text-error'>{errors.tamanoEmpresa}</p>}
                                </Col>
                                <Col>
                                    <Form.Group controlId='formgastoMensual'>
                                        <Form.Label className='text-form-label'>Gasto mensual en $*</Form.Label>
                                        <Form.Control 
                                            name="gastoMensual" 
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.gastoMensual && <p className='text-error'>{errors.gastoMensual}</p>}
                                </Col>
                                <Col>
                                    <Form.Group controlId='formTipoCompras'>
                                        <Form.Label className='text-form-label'>Tipo de compras*</Form.Label>
                                        <Form.Control 
                                            name="tipoCompras"
                                            onChange= { handleChange }
                                        />
                                    </Form.Group>
                                    {errors.tipoCompras && <p className='text-error'>{errors.tipoCompras}</p>}
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="div-puntos r-40">
                            <p><img src="images/puntos.svg" alt="dots" /></p>
                        </div>
                    </Card>
                </Col>
                <div className="mx-5">
                    <p className="pt-4 text-normal-gray text-small text-left">Opcionales* </p>
                </div>
                <div className="text-center pb-10">
                    <Button className="button-omit">CANCELAR</Button>
                    <Button className="form-button m-3" type="submit">GUARDAR</Button>
                </div>
            </Form>
        </Row>
    )
}

export default AdditionalDataBussinessForm
