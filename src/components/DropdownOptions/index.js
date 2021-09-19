import { DropdownButton, Dropdown } from 'react-bootstrap';

const BodyDropdownOptions = () => {
    return (
        <DropdownButton menuAlign="right" id="dropdown-grilla"  title = { <i className=" pi pi-ellipsis-v" ></i>} >
            <Dropdown.Item as = "button" className = "px-4 ">
                <p className="color-title" style= {{borderBottom: '1px solid blue'}}>
                    <img src = "images/icons/pencil-icon.svg" alt ="a" className="icon" /> Editar
                </p>
            </Dropdown.Item>
            <Dropdown.Item as = "button" className = "px-4">
                <p className="color-title" style= {{borderBottom: '1px solid blue'}}>
                    <img src = "images/icons/close-icon.svg" alt ="a" className="icon" /> Borrar
                </p>
            </Dropdown.Item>
            <Dropdown.Item as = "button" className = "px-4">
                <p className="color-title" style= {{borderBottom: '1px solid blue'}}>
                    <img src = "images/icons/duplicate-icon.svg" alt ="a" className="icon" /> Duplicar
                </p>
            </Dropdown.Item>
            <Dropdown.Item as = "button" className = "px-4">
                <p className="color-title" style= {{borderBottom: '1px solid blue'}}>
                    <img src = "images/icons/export-icon.svg" alt ="a" className="icon" /> Exportar
                </p>
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default BodyDropdownOptions