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
import CardDetaile from "./productcardDetaile.json";
const ProductCard = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          {CardDetaile &&
            CardDetaile.map((value, key) => {
              return (
                <MDBCol md="4">
                  <MDBCard key={value.id}>
                    <MDBCardImage src={value.img} position="top" alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>{value.title}</MDBCardTitle>
                      <MDBCardText>{value.price}</MDBCardText>
                      <MDBBtn href="#">Button</MDBBtn>
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
