import React, { Component } from "react";
import { connect } from "react-redux";
import LeftModalCart from "./LeftModalCart";
import { decreaseQuantity, increaseQuantity } from "../../redux/cart";
import {
  MainDiv,
  IncrementDiv,
  IncrementButton,
  DecrementButton,
  ImgDiv,
  ChangeImg,
  ChangeImgDiv,
} from "./styled/CartCard.styled";
import { throwServerError } from "@apollo/client";

const mapStateToProps = (state) => {
  const { selectedCurrency } = state.currencies;
  return { selectedCurrency };
};

export class CartModalCard extends Component {
  state = {
    imageIndex: 0,
  };

  nextImage = () => {
    const getIndex = () => {
      let newIndex =
        this.state.imageIndex + 1 <= this.props.item.gallery.length - 1
          ? this.state.imageIndex + 1
          : 0;
      return newIndex;
    };

    const index = getIndex();

    this.setState((state) => {
      return {
        ...state,
        imageIndex: index,
      };
    });
  };

  previousImage = () => {
    const getIndex = () => {
      let newIndex =
        this.state.imageIndex - 1 >= 0
          ? this.state.imageIndex - 1
          : this.props.item.gallery.length - 1;
      return newIndex;
    };

    const index = getIndex();

    this.setState((state) => {
      return {
        ...state,
        imageIndex: index,
      };
    });
  };

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
    const { imageIndex } = this.state;
    const { selectedCurrency } = this.props;
    const currencyIndex = prices.findIndex(
      (price) => price.currency.label === selectedCurrency.label
    );

    return (
      <MainDiv>
        <LeftModalCart
          cart={this.props.cart}
          price={prices[currencyIndex]}
          item={this.props.item}
        />

        {/* The increment */}
        <div style={{ display: "flex" }}>
          <IncrementDiv>
            <IncrementButton
              onClick={() =>
                this.props.dispatch(increaseQuantity(this.props.item))
              }
            >
              {" "}
              +{" "}
            </IncrementButton>

            {/* The increment number */}
            <h4>{quantity}</h4>

            <DecrementButton
              onClick={() =>
                this.props.dispatch(decreaseQuantity(this.props.item))
              }
            >
              -
            </DecrementButton>
          </IncrementDiv>
          {/* The image */}

          <div>
            <ImgDiv
              style={{
                width: this.props.cart && "10rem",
                height: this.props.cart && 200,
              }}
              src={gallery[imageIndex]}
            />

            {this.props.cart && (
              <ChangeImgDiv>
                <ChangeImg onClick={this.previousImage}> {"<"}</ChangeImg>

                <ChangeImg onClick={this.nextImage}> {">"}</ChangeImg>
              </ChangeImgDiv>
            )}
          </div>
        </div>
      </MainDiv>
    );
  }
}

export default connect(mapStateToProps)(CartModalCard);
