import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow, MDBCol
  } from 'mdb-react-ui-kit';
  import CardDetaile from "./productcardDetaile.json"
const ProductCard = () => {
  return (
    <div>
        <MDBRow>
          {
            CardDetaile && CardDetaile.map((value, key)=>{
              return(
                <MDBCol md='4'>
<MDBCard key={value.id}>
      <MDBCardImage src={value.cardImg} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{value.cardHeading}</MDBCardTitle>
        <MDBCardText>
          {value.cardDetaile}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
</MDBCol>

              )
            })
          }
        
    </MDBRow>
    </div>
  )
}

export default ProductCard;