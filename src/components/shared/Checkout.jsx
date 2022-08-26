import React, { Component } from "react";
import {
  MainDiv,
  SizeDiv,
  GrayBox,
  BlackBox,
  GreenBox,
  ButtonDiv,
  TextDiv,
} from "../styled/Checkout.styled";
import parse from "html-react-parser";
import Attributes from "../shared/Attributes";

export class Checkout extends Component {
  render() {
    const { product, handleAttribute, attributes, index, addToCart, message } = this.props;


    return (
      <MainDiv className="font-link ">
        <h2>{product.brand}</h2>
        <h2
          style={{
            fontWeight: 100,
          }}
        >
          {product.name}
        </h2>

        {product?.attributes && (
          <>
            {product?.attributes?.map((attribute) => (
              <Attributes
                cart
                selectedAttributes={attributes}
                attribute={attribute}
                handleAttribute={handleAttribute}
                key={attribute.id}
              />
            ))}
          </>
        )}

        {/* The price */}
        <div>
          <h4
            style={{
              marginTop: "0.5rem",
              fontWeight: 700,
            }}
          >
            PRICE:
          </h4>
          {product.prices && (
            <h5
              style={{
                marginTop: "0.25rem",
                fontWeight: 700,
              }}
              className="mt-1 font-bold"
            >
              {product.prices[index].currency.symbol}{" "}
              {parseFloat(product.prices[index].amount).toFixed(2)}
            </h5>
          )}
        </div>

        {/* message to the user */}
        <div style={{ color: "red" }}> {message}</div>

        {/* The button */}

        <ButtonDiv
          style={{ backgroundColor: !product.inStock ? "gray" : "#10b981" }}
          onClick={() => addToCart()}
          disabled={!product.inStock}
        >
          ADD TO CART
        </ButtonDiv>

        {/* little note */}
        {product?.description && (
          <TextDiv>{parse(product?.description)}</TextDiv>
        )}
      </MainDiv>
    );
  }
}

export default Checkout;
