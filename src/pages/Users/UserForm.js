import React from 'react';
import { Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import validateUser from './validateUser';

export const UserForm = ({ userName, userPath, onCancelButton }) => {

    const initalState = {
        legajo:'',
        area: '',
        email: '',
        telefono: '',
        sucursal: ''
    }
    
    const { handleChange, formState, handleSubmit, errors } = useForm( initalState, validateUser);
    
    return (
        <Container className="m-5">
            <Form onSubmit = { handleSubmit }>
                <Row>
                        <Col lg="6" md="6" sm="12">
                            <h4><img className="mb-1" src="images/icons/user-icon-black.svg" alt="" height="20" width="20" /> Datos personales</h4>
                            <Row>
                                <Col className=" mt-4" xs="3">
                                    <img className="image-modal-datosP" src="images/father-image.png" />
                                </Col>
                                <Col className="text-left position-relative" xs="9">
                                    <p className="text-bottom-datosP position-absolute"> { userName }</p>
                                    <span className="subtitle-bottom-datosP position-absolute">{ userPath }</span>
                                </Col>
                                <Col className="mt-5" xs="12">
                                    <Form.Group className="mb-3" controlId="addUserForm.ControlInput1">
                                        <Form.Label className="subtitle-bottom-datosP" >Legajo *</Form.Label>
                                        <Form.Control name="legajo" className="input-form-datosP" type="text" placeholder="00078282" />
                                        { errors.legajo && <p className='text-error'> { errors.legajo } </p> }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="addUserForm.ControlInput2">
                                        <Form.Label className="subtitle-bottom-datosP" >Area *</Form.Label>
                                        <Form.Control name="area" className="input-form-datosP" type="text" placeholder="00078282" />
                                        { errors.area && <p className='text-error'> { errors.area } </p> }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="addUserForm.ControlInput3">
                                        <Form.Label className="subtitle-bottom-datosP" >E-mail *</Form.Label>
                                        <Form.Control name="email" className="input-form-datosP" type="email" placeholder="00078282" />
                                        { errors.email && <p className='text-error'> { errors.email } </p> }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="addUserForm.ControlInput3">
                                        <Form.Label className="subtitle-bottom-datosP" >Telefono *</Form.Label>
                                        <Form.Control name="telefono" className="input-form-datosP" type="phone" placeholder="1556658976" />
                                        { errors.telefono && <p className='text-error'> { errors.telefono } </p> }
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="subtitle-bottom-datosP" >Sucursal *</Form.Label><br/>
                                        <Form.Control
                                            name="sucursal"
                                            as="select"
                                            custom
                                            className="select-from-datosP"
                                        >
                                            <option value="0">Seleccione</option>
                                            <option key="1" value="1">1 a 5</option>
                                            <option key="2" value="2">5 a 10</option>
                                            <option key="3" value="3">10 a 50</option>
                                            <option key="4" value="4">50 a 200</option>
                                            <option key="5" value="5">1000 o Más</option>
                                        </Form.Control>
                                        { errors.sucursal && <p className='text-error'> { errors.sucursal } </p> }
                                    </Form.Group>
                                    <div className="mt-3">
                                        <p className="rectangle-form-datosP text-center"> Buenos Aires <img src="images/icons/close-icon-black.svg" className="icon-close-datosP" /></p>
                                        <p className="rectangle-form-datosP text-center"> Santa Cruz <img src="images/icons/close-icon-black.svg" className="icon-close-datosP " /></p>
                                        <p className="rectangle-form-datosP text-center"> Buenos Aires <img src="images/icons/close-icon-black.svg" className="icon-close-datosP" /></p>
                                    </div>
                                    <div className="mt-5">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >Administrador</span>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <h4><img className="mb-1" src="images/icons/options-icon-black.svg" alt="" height="20" width="20" /> Permisos</h4>
                            <Row className="card-modal-datosP">
                                <h5 className="text-blue-datosP mt-1"> ADMINISTRACION GENERAL </h5>
                                <Col xs="12">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >Puede administrar usuarios</span>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >Puede administrar permisos</span>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >Puede administrar la empresa</span>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >Puede administrar sucursales</span>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >Puede administrar grupos de permisos</span>
                                    </InputGroup>
                                </Col>
                                <h5 className="text-blue-datosP mt-1"> SOLICITUDES </h5>
                                <Col xs="12">
                                    <h6 className="text-black-datosP"> Administrar solicitudes </h6>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >de todas las sucursales</span>
                                    </InputGroup>
                                    <div className="m-5 mb-2 mt-0">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo de su sucursal</span>
                                        </InputGroup>
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo las propias</span>
                                        </InputGroup>
                                    </div>
                                    <h6 className="text-black-datosP"> Ver solicitudes </h6>
                                    <InputGroup className="mb-1">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >de todas las sucursales</span>
                                    </InputGroup>
                                    <div className="m-5 mb-2 mt-0">
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo de su sucursal</span>
                                        </InputGroup>
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo las propias</span>
                                        </InputGroup>
                                    </div>
                                    <h6 className="text-black-datosP"> Puede aprobar solicitudes </h6>
                                    <InputGroup className="mb-1">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >de todas las sucursales</span>
                                    </InputGroup>
                                    <div className="m-5 mb-2 mt-0">
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo órdenes de su sucursal</span>
                                        </InputGroup>
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo órdenes propias</span>
                                        </InputGroup>
                                    </div>
                                    <h6 className="text-black-datosP"> Comentar en solicitudes </h6>
                                    <InputGroup className="mb-1">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <span className= "text-basic-datosP" >de todas las sucursales</span>
                                    </InputGroup>
                                    <div className="m-5 mb-2 mt-0">
                                        <InputGroup className="mb-1">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <span className= "text-basic-datosP" >solo  de su sucursal</span>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-5">
                                <h6 className= "text-basic-datosP"> * Datos obligatorios</h6>
                            </div>  
                        </Col>
                        <Col xs="12" className="text-center">
                            <Button onClickCapture = { onCancelButton } className='form-button-secondary-datosP'>
                                CANCELAR
                            </Button>
                            <Button type="submit" className='form-button-primary-datosP'>
                                ENVIAR INVITACION
                            </Button>
                        </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UserForm
