import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import  BodyDropdownOptions from '../DropdownOptions/index'
import './genericDatatable.scss';


export const GenericDataTable = ({columns, tittle, image}) => {
    
    const [globalFilter, setGlobalFilter] = useState('');
    const [selecteds, setSelecteds ] = useState(null);
    
    const data = [
        {'id': '1000','sucursal': 'Lalala','ubicacion': 'Bamboo Watch','deliveryPoint': 'Point 1','image': 'bamboo-watch.jpg','user': 'Peter','role': 'Accessories','quantity': 24,'invitation': 'INSTOCK','rating': 5},
        {'id': '1001','sucursal': 'Lalala','ubicacion': 'Black Watch','deliveryPoint': 'Point 2','image': 'black-watch.jpg','user': 'Patricio','role': 'Accessories','quantity': 61,'invitation': 'INSTOCK','rating': 4},
        {'id': '1002','sucursal': 'Lalala','ubicacion': 'Blue Band','deliveryPoint': 'Point 3','image': 'blue-band.jpg','user': 'Alan','role': 'Fitness','quantity': 2,'invitation': 'LOWSTOCK','rating': 3},
        {'id': '1003','sucursal': 'Lalala','ubicacion': 'Blue T-Shirt','deliveryPoint': 'Point 4','image': 'blue-t-shirt.jpg','user': 'Pedro','role': 'Clothing','quantity': 25,'invitation': 'INSTOCK','rating': 5},
        {'id': '1004','sucursal': 'Lalala','ubicacion': 'Bracelet','deliveryPoint': 'Point 5','image': 'bracelet.jpg','user': 'Mariano','role': 'Accessories','quantity': 73,'invitation': 'INSTOCK','rating': 4},
        {'id': '1005','sucursal': 'Lalala','ubicacion': 'Brown Purse','deliveryPoint': 'Point 6','image': 'brown-purse.jpg','user': 'Salomon','role': 'Accessories','quantity': 0,'invitation': 'OUTOFSTOCK','rating': 4},
        {'id': '1006','sucursal': 'Lalala','ubicacion': 'Chakra Bracelet','deliveryPoint': 'Point 7','image': 'chakra-bracelet.jpg','user': 'Federic','role': 'Accessories','quantity': 5,'invitation': 'LOWSTOCK','rating': 3},
        {'id': '1007','sucursal': 'Lalala','ubicacion': 'Galaxy Earrings','deliveryPoint': 'Point 8','image': 'galaxy-earrings.jpg','user': 'Spawn','role': 'Accessories','quantity': 23,'invitation': 'INSTOCK','rating': 5},
        {'id': '1008','sucursal': 'Lalala','ubicacion': 'Game Controller','deliveryPoint': 'Point 9','image': 'game-controller.jpg','user': 'Batman','role': 'Electronics','quantity': 2,'invitation': 'LOWSTOCK','rating': 4},
        {'id': '1009','sucursal': 'Lalala','ubicacion': 'Gaming Set','deliveryPoint': 'Point 10','image': 'gaming-set.jpg','user': 'Nose','role': 'Electronics','quantity': 63,'invitation': 'INSTOCK','rating': 3}
    ];

    const imageRoundedBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <img alt = { rowData.user } src = 'https://www.primefaces.org/primereact/showcase/showcase/demo/images/avatar/ionibowcher.png' width = "32" style = {{ verticalAlign: 'middle' }} />
                <span style = {{ verticalAlign: 'middle', marginLeft: '.5em'}} > { rowData.user } </span>
            </React.Fragment>
        );
    }

    const dynamicColumns = columns.map( (col) => {
        return <Column 
                    key = { col.field } 
                    field = { col.field }  
                    header = { col.header } 
                    sortable = { col.sort }
                    body = { (col.body ? imageRoundedBodyTemplate : null )}
                    selection
                />
    });

    const header = (
        <Row>
            <Col xs={5} className='py-3'>
                { 
                    tittle && 
                    <p className='text-form-sub-tittle'>
                        { image && <img src = { image } alt = 'BranchIcon' className="icon-black" /> }
                    { tittle }
                    </p>
                } 
            </Col>
            <Col xs={{span:4, offset: 3}} className='py-3'>
                <Form.Group controlId='globalSearch'>
                    <Form.Control name='globalSearch' 
                        value={ globalFilter }
                        onChange= { (e) => setGlobalFilter(e.target.value) }
                        placeholder='Buscar'
                    />
                </Form.Group>
            </Col>
        </Row>
    );

    return (
        <>
            <DataTable 
                className = 'pb-5' 
                value = { data } 
                header = { header } 
                selection = { selecteds }
                onSelectionChange = { e => setSelecteds(e.value) } 
                dataKey = "id"
                paginator
                globalFilter = { globalFilter}
            >
                <Column selectionMode='multiple' headerStyle={{width: '3em'}}></Column>
                { dynamicColumns }

                <Column body = { BodyDropdownOptions } header = { <BodyDropdownOptions /> } className = "td-100 mr-0-grid" bodyStyle = {{ textAlign: 'right', overflow: 'visible' }} />
            </DataTable>
        </>
    )
}

export default GenericDataTable
