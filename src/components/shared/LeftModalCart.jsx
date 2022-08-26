import React, { Component } from "react";
import Attributes from "./Attributes";
import {
  MainDiv,
  
} from "./styled/LeftCard.styled";

export class LeftModalCart extends Component {
  render() {
         const {
           name,
           brand,
           prices,
           attributes,
           gallery,
           quantity,
           selectedAttributes,
         } = this.props.item;

        const {cart} = this.props
    return (
      <MainDiv
        style={{ marginLeft: "0rem", marginTop: "0px" }}
        className="font-link "
      >
        <div
          style={{
            marginBottom: " 5px",
            fontSize: cart ? "1.5rem" : "1rem",
            color: cart ? "#211d1d" : "#3d3a3a",
            width: 100,
          }}
        >
          {brand}
        </div>
        <div
          style={{
            // fontWeight: 100,

            width: 100,
            fontSize: cart ? "1.4rem" : "1rem",
            marginBottom: "10px",
            color: "#3d3a3a",
          }}
        >
          {name}
        </div>
        {/* The price */}
        <div>
          <div
            style={{
              marginTop: "0.25rem",
              marginBottom: "-10px",
              color: "#3d3a3a",
              fontWeight: cart ? 600 : 600,
              fontSize: "0.8rem",
              width: 100,
            }}
            className="mt-1 font-bold"
          >
            {this.props.price.currency.symbol}{" "}
            {parseFloat(this.props.price.amount).toFixed(2)}{" "}
          </div>
        </div>
        {/* Size section */}
        {attributes?.map((attribute) => (
          <Attributes
            cart={cart}
            key={attribute.id}
            attribute={attribute}
            selectedAttributes={selectedAttributes}
          />
        ))}
      </MainDiv>
    );
  }
}

export default LeftModalCart;
