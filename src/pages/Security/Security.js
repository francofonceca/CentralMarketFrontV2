import React, {useState} from 'react';
import { Container, Button, Card } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader/PageHeader';
import { GenericDataTable } from '../../components/DataTable/GenericDataTable';

import '../branchOffices/branchOffices.scss';

const Security = () => {
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
            <Container>

                <PageHeader 
                    section='Empresa'
                    tittle='Seguridad'
                    subTittle='Gestiona grupos y permisos de usuarios'
                    imgSrc ='images/security.svg'
                />

                <Card className='shadow border-card-branch'>
                    <div className='px-5'>
                        <GenericDataTable columns={ columns }/>
                    </div>
                </Card>

                <div className='text-center py-4'>
                    <Button 
                        className='form-button' 
                        onClick={handleShow}
                    >
                        AGREGAR USUARIO
                    </Button>
                </div>

            </Container>
        </>
    )
}

export default Security
