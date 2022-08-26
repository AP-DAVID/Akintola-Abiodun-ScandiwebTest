import React, { Component } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { connect } from "react-redux";
import { getListCurrencies, selectCurrency } from "../../redux/currencies";

const DropDownContainer = styled("div")`
  width: 3.5em;
  opacity: 1;
  z-index: 50;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  /* padding-left: 0.5em;
  padding-right: 0.5em; */
  background: #ffffff;
  position: fixed;
  border: 2px solid #e5e5e5;
  z-index: 50;
  box-sizing: border-box;
  font-size: 0.7rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  z-index: 50;
  list-style: none;
  font-weight : 600;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.8em;
  cursor: pointer;

  :hover {
    background-color: #e5e7eb;
  }
`;

const mapStateToProps = (state) => {
  const { currencies, selectedCurrency } = state.currencies;
  return { currencies, selectedCurrency };
};

export class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { isOpen: false };

    // Binding this function
    this.toggling = this.toggling.bind(this);
  }

  toggling() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // dispatch the currencies lifecyle
  componentDidMount() {
    this.props.dispatch(getListCurrencies());
  }



  render() {
    const { selectedCurrency, currencies } = this.props;
    const { isOpen } = this.state;


    return (
      <div>
        {currencies && selectedCurrency && (
          <DropDownContainer>
            <div
              onClick={this.toggling}
              style={{
                display: "flex",
                marginLeft: "2px",
                alignItems: "center",
              }}
            >
              {selectedCurrency?.symbol}
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </div>

            {this.state.isOpen && currencies && (
              <DropDownListContainer>
                <DropDownList>
                  {currencies.map((currency) => (
                    <ListItem
                      onClick={() => {
                        this.props.dispatch(selectCurrency(currency));
                        this.toggling();
                      }}
                      key={currency.label}
                    >
                      {currency.symbol} {currency.label}
                    </ListItem>
                  ))}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(DropdownMenu);
