import React, {useState} from 'react';
import { Container, Button, Modal, Card } from 'react-bootstrap';

import DeliveryPointsForm from './DeliveryPointsForm';

import { PageHeader } from '../../components/PageHeader/PageHeader';
import { GenericDataTable } from '../../components/DataTable/GenericDataTable';

import '../branchOffices/branchOffices.scss';

const DeliveryPoints = () => {
    const [show, setShow] = useState(false);

    const columns = [
        {field:'deliveryPoint', header:'Delivery Point', sort:true},
        {field:'ubicacion', header:'Ubicacíon', sort:true},
        {field: '', header: '', sort:false},
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
                    tittle='Delivery Points'
                    subTittle='Gestiona tu red de entrega'
                    imgSrc ='images/branch.svg'
                />

                <Card className='shadow border-card-branch'>
                    <div className='px-5'>
                        <GenericDataTable 
                            columns={ columns }
                        />
                    </div>

                    <div className='text-center py-4'>
                        <Button 
                            className='form-button' 
                            onClick={handleShow}
                        >
                            AGREGAR DELIVERY POINT
                        </Button>
                    </div>
                </Card>

                <Modal className='modal-size' show={show} onHide={handleClose}>
                    <DeliveryPointsForm closeModal={handleClose}/>
                </Modal>

            </Container>
        </>
    )
}

export default DeliveryPoints
