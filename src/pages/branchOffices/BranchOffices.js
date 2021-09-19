import React, {useState} from 'react';
import { Container, Button, Modal, Row, Col, Form, Card } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader/PageHeader';
import { BranchOfficeForm } from './BranchOfficeForm';
import { GenericDataTable } from '../../components/DataTable/GenericDataTable';
import './branchOffices.scss';

const BranchOffices = () => {

    const [show, setShow] = useState(false);

    const columns = [ 
        {field:'sucursal', header:'Sucursales', sort:true},
        {field:'ubicacion', header:'Ubicacíon', sort:true},
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
                    tittle='Sucursales'
                    subTittle='Gestiona permisos y accesos de usuarios'
                    imgSrc ='images/branch.svg'
                />

                <Card className='shadow border-card-branch'>
                    <div className='px-5'>
                        <GenericDataTable columns={ columns } />
                    </div>
                    <div className='text-center py-4'>
                        <Button 
                            className='form-button' 
                            onClick={handleShow}
                        >
                            AGREGAR SUCURSAL
                        </Button>
                    </div>
                </Card>

                <Modal className='modal-size' show={show} onHide={handleClose}>
                    <BranchOfficeForm closeModal={handleClose}/>
                </Modal>


            </Container>
        </>
    )
}

export default BranchOffices
