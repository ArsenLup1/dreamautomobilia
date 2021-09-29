import React, { useState } from 'react';
import NavbarStc from './navbar.stc'
import {
  Container,
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
import Link from 'next/link'
import Image from 'next/image'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MenuHeader=[
    {
        texte:"LA FEDERATION",
        altT:"",
        chemin:"/qui-sommes-nous",
    },
    {
        texte:"ADHERENTS",
        altT:"",
        chemin:"nos-laboratoire",
    },
    {
        texte:"PROGRAMME",
        altT:"",
        chemin:"/nos-accreditations",
    },
    {
        texte:"REGLEMENTATION",
        altT:"",
        chemin:"/contact",
    },
    {
        texte:"ACTUALITE",
        altT:"",
        chemin:"/contact",
    }
]


  return (
    <NavbarStc>
      <Navbar  light expand="md">
        <Container>
        <NavbarBrand href="/" className="siteLogo"><Image src="/img/logo-test.png" width="100" height="80" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-auto" navbar>
              {
                  MenuHeader.map((menu,index)=><NavItem key={1+index+"menuHeader"}>
                    <Link href={menu.chemin}>
                      <a className="nav-link" >
                        <span className="texte">{menu.texte} </span>
                        <span className="altT">{menu.altT}</span>
                      </a>
                    </Link>
                    </NavItem>)
              }
           
          </Nav>
          <NavbarText>{/*<Image src="/img/logo.png" width="200" height="50" />*/}</NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </NavbarStc>
  );
}

export default Header;