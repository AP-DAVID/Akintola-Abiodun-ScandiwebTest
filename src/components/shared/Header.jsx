import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  HeaderDiv,
  LeftDiv,
  TextCust,
  MiddleDiv,
  InnerMiddleDiv,
  RightDiv,
  Count,
} from "../styled/Header.styled";
import { connect } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import { getCategories } from "../../redux/categoriesSlice";
import CartModal from "./CartModal";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  const { itemsQuantity } = state.cart;
  const { categories } = state.categories;
  return { itemsQuantity, categories };
};

export class Header extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { isOpen: false };

    // Binding this keyword
    this.toggling = this.toggling.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  toggling() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { itemsQuantity, categories } = this.props;

    return (
      <div style={{ zIndex: 6 }}>
        <HeaderDiv style={{ alignItems: "baseline" }}>
          {/* Left Div */}
          <LeftDiv style={{ marginLeft: "0.5rem" }}>
            {/* Link to all */}

            {categories?.map((data) => (
              <div>
                {data.name === "all" ? (
                  <Link
                    to="/"
                    key={data.name}
                    style={{ textDecoration: "none" }}
                  >
                    <TextCust
                      style={{
                        borderBottom:
                          this.props.pathway === "/" && "4px solid #10b981",
                        fontWeight: 300,

                        color: this.props.pathway === "/" ? "#10b981" : "black",
                      }}
                    >
                      {data.name}
                    </TextCust>
                  </Link>
                ) : (
                  <Link
                    to={`/${data.name}`}
                    key={data.name}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        height: "3rem",
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                        fontWeight: 300,
                        borderBottom:
                          this.props?.pathway?.substring(1) === data.name &&
                          "4px solid #10b981",
                        color:
                          this.props?.pathway?.substring(1) === data.name
                            ? "#10b981"
                            : "black",
                      }}
                    >
                      {data.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </LeftDiv>

          {/* middle div */}
          <MiddleDiv>
            <InnerMiddleDiv>
              <img src={logo} style={{ color: "#ffffff" }} />
            </InnerMiddleDiv>
          </MiddleDiv>

          {/* Right div */}

          <div>
            {" "}
            <RightDiv>
              <div style={{ display: "flex", marginLeft: "2px" }}>
                <DropdownMenu />
              </div>

              <div style={{ display: "flex" }}>
                <AiOutlineShoppingCart
                  onClick={this.toggling}
                  style={{
                    zIndex: 50,

                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                  }}
                />
                <Count> {itemsQuantity} </Count>
              </div>
            </RightDiv>
          </div>
        </HeaderDiv>

        {this.state.isOpen && <CartModal toggling={this.toggling} />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
