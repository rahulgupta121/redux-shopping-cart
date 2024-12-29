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
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../features/cartSlice";
const ProductCard = () => {
  const itemsDetailes = useSelector((state)=> state.allCart.items);
  console.log(itemsDetailes)
  const dispatch = useDispatch();
  
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          { itemsDetailes &&
            itemsDetailes.map((item) => {
              return (
                <MDBCol md="4">
                  <MDBCard key={item.id}>
                    <MDBCardImage src={item.img} position="top" alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>$ {item.price}</MDBCardText>
                      {/* <MDBBtn onClick={()=> dispatch(addToCart(item))}>ADD TO CART</MDBBtn> */}
                      <MDBBtn onClick={() => dispatch(addToCart(item))}>ADD TO CART</MDBBtn>
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
