/* 
   Author : Aziz Amerul Faozi
   Description : this code header 
*/
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

/* this will add header notification */
const Header =(props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
	<div>
	    <Navbar color="light" light expand="md">
		<NavbarBrand href="/">AlexSiDragon</NavbarBrand>
		<NavbarToggler onClick={toggle} />
		<Collapse isOpen={isOpen} navbar>
		    <Nav className="mr-auto" navbar>
			<NavItem>
			    <NavLink href="/components/">Components</NavLink>
			</NavItem>
			<NavItem>
			    <NavLink href="https://github.com/faoziaziz">GitHub</NavLink>
			</NavItem>
			<UncontrolledDropdown nav inNavbar>
			    <DropdownToggle nav caret>
				Options
			    </DropdownToggle>
			    <DropdownMenu right>
				<DropdownItem>
				    Option 1
				</DropdownItem>
				<DropdownItem>
				    Option 2
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem>
				    Reset
				</DropdownItem>
			    </DropdownMenu>
			</UncontrolledDropdown>
		    </Nav>
		    <NavbarText>Simple Text</NavbarText>
		</Collapse>
	    </Navbar>
	    
	</div>
    );

}

export default Header;
