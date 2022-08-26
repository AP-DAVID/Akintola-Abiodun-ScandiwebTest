import React, { Component } from 'react'
import {
  MainDiv,
  IncrementDiv,
  IncrementButton,
  DecrementButton,
  ImgDiv
} from "../styled/CartCard.styled";
import Leftcart from "./Leftcart";

export class Cartcard extends Component {
  render() {
    return (
      <MainDiv>
        <Leftcart />

        {/* The increment */}
        <div style={{ display: "flex" }}>
          <IncrementDiv>
            <IncrementButton> + </IncrementButton>

            {/* The increment number */}
            <h4>1</h4>

            <DecrementButton>-</DecrementButton>
          </IncrementDiv>

          {/* The image */}
          <ImgDiv src="https://images.unsplash.com/photo-1660859692002-36833faf17ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>


        
      </MainDiv>
    );
  }
}

export default Cartcard