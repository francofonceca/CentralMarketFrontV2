import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import validateAdditionalInfo from './validateAdditionalInfo';
import { useFormAdditional } from './useFormAdditional';

export const AdditionalDataForm = () => {

    const { handleChange, handleSubmit, errors } = useFormAdditional(validateAdditionalInfo);
 
    return (
        <Row>
            <Col lg={{ span: 8, offset: 2}}>
                <Card className="shadow border-card">
                    <Form className="padding-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-normal">Tamaño de la empresa*</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                id="floatingInputCustom"
                                name="tamanoEmpresa"
                                className="form-select"
                                onChange={ handleChange }
                            >
                                <option value="0">Seleccionar</option>
                                <option key="1" value="1">1 a 5</option>
                                <option key="2" value="2">5 a 10</option>
                                <option key="3" value="3">10 a 50</option>
                                <option key="4" value="4">50 a 200</option>
                                <option key="5" value="5">1000 o Más</option>
                            </Form.Control>
                        </Form.Group>
                        {errors.tamanoEmpresa && <p className='text-error'>{errors.tamanoEmpresa}</p>}
                        <Form.Group className="mb-4">
                            <Form.Label className="text-normal">Tipos de compras*</Form.Label>
                            <Form.Control
                                as="select"
                                name="tipoCompras"
                                className="form-select"
                                onChange={ handleChange }
                            >
                                <option value="">Seleccionar</option>
                                <option key="amb" value="amber">Amber</option>
                                <option key="pur" value="purple">Purple</option>
                                <option key="mag" value="magenta">Magenta</option>
                                <option key="wh" value="white">White</option>
                            </Form.Control>
                        </Form.Group>
                        {errors.tipoCompras && <p className='text-error'>{errors.tipoCompras}</p>}
                        <Form.Group className="mb-4">
                            <Form.Label className="text-normal">Gasto mensual en pesos*</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                name="gastoMensual"
                                className="form-select"
                                onChange={ handleChange }
                            >
                                <option>Seleccionar</option>
                                <option key="b" value="black">$10.000 o Menos</option>
                                <option key="a" value="amber">$100.000 o Menos</option>
                                <option key="p" value="purple">$500.000 o Menos</option>
                                <option key="m" value="magenta">Mayor a $500.000</option>
                            </Form.Control>
                        </Form.Group>
                        {errors.gastoMensual && <p className='text-error'>{errors.gastoMensual}</p>}
                        <div className="text-center">   
                            <Button className="form-button" type='submit'>ENVIAR</Button>
                        </div>
                    </Form>
                </Card>
                <div className="mx-5">
                    <p className="pt-4 text-normal-gray text-small text-left">Opcionales* </p>
                </div>
                <div className="text-center pb-10">
                    <Button className="button-omit">OMITIR</Button>
                </div>
            </Col>
            <div className="div-puntos r-40">
                <p><img src="images/puntos.svg" alt="dots" /></p>
                <p><img src="images/puntos.svg" alt="dots" /></p>
            </div>
        </Row>
    )
}
