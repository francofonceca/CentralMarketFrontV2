import { DropdownButton, Dropdown } from 'react-bootstrap'
import './dropdown.scss'
import { NavLink } from 'react-router-dom';

const DropdownCM = ({ items }) => {
    return( 
        <DropdownButton menuAlign="left" href="#" id="dropdown-item-button" title = { items.mainTitle }>
            {
                items.data.map( (data, id) => (

                    <NavLink to={ "/" + data.path }  key = { id } className="link-no-design" >
                        <Dropdown.Item as = "button" className = "px-3 pt-2 custom-dropdown-datatable">
                            <span className="color-title">
                                <img src = { "images/icons/" + data.src } alt = { data.title } className="icon" />
                                { data.title }
                            </span>
                            <br />
                            <span className="color-basic mb-20">{ data.description }</span>
                        </Dropdown.Item>
                    </NavLink>

                ))
            }
        </DropdownButton>
    )
}

export default DropdownCM