import React, {useState} from 'react'
// import { FaShoppingBag } from "react-icons/fa";
// import Badge from '@mui/material/Badge';
// import modalBox from '../modal/modalBox';
import {Link} from "react-router-dom"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
const Navbar = () => {
  return (
    <>
       <MDBNavbar light bgColor='light justify-content-between'>
      <MDBContainer fluid className=''>
        <MDBNavbarBrand>Redux ECom Cart</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex spa w-auto mb-3 justify-content-between'>
        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn>Cart(3)</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Navbar;