import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
// import CardDetaile from "rea";
const ProductCard = () => {
  const itemsDetailes = useSelector((state)=> state.allCart.items)
  console.log(itemsDetailes.items)
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          {
            itemsDetailes.map((value, key) => {
              return (
                <MDBCol md="4">
                  <MDBCard key={value.id}>
                    <MDBCardImage src={value.img} position="top" alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>{value.title}</MDBCardTitle>
                      <MDBCardText>$ {value.price}</MDBCardText>
                      <MDBBtn href="#">ADD TO CART</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
