import React, {useState} from 'react';
import { Container, Button, Modal, Card } from 'react-bootstrap';

import { UserForm } from './UserForm';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { GenericDataTable } from '../../components/DataTable/GenericDataTable';

import './user.css';

const Users = () => {
    const [show, setShow] = useState(false);

    const columns = [ 
        {field:'user', header:'Usuarios', sort:true, body:true},
        {field:'role', header:'Rol', sort:true},
        {field:'invitation', header:'Invitación', sort:true}
    ];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='div-puntos'>
                <p><img src='images/puntos.svg' alt='dots' /></p>
                <p><img className='mt-3' src='images/puntos.svg' alt='dots' /></p>
            </div>
            <Container className='pb-5'>

                <PageHeader 
                    section='Empresa'
                    tittle='Usuarios'
                    subTittle='Gestiona permisos y accesos de usuarios'
                    imgSrc ='images/user.svg'
                />

                <Card className='shadow border-card-branch'>
                    <div className='px-5'>
                        <GenericDataTable columns={ columns }/>
                    </div>
                    <div className='text-center py-4'>
                        <Button 
                            className='form-button' 
                            onClick={handleShow}
                        >
                            AGREGAR USUARIO
                        </Button>
                    </div>
                </Card>

                <Modal className='modal-size' show={show} onHide={handleClose}>
                    <UserForm onCancelButton = { handleClose } userName="Carlos Alvarez" userPath="@Alvarezcarlos" closeModal={handleClose}/>
                </Modal>


            </Container>
        </>
    )
}

export default Users
