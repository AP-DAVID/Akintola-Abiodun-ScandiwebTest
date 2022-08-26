import React, { Component } from "react";
import { SizeDiv, GrayBox, BlackBox, GreenBox } from "./styled/LeftCard.styled";
export class Attributes extends Component {
  render() {
    const { attribute, handleAttribute, selectedAttributes } = this.props;

    const { cart } = this.props;

    return (
      <div>
        <div style={{ marginTop: "0.5rem" }}>
          <div
            style={{
              textTransform: cart && "uppercase",
              marginTop: "15px",
              fontSize: "1rem",
              color: cart ? "#211d1d" : "#3d3a3a",
            }}
          >
            {attribute?.id}:
          </div>

          {attribute.type === "text" ? (
            <div
              style={{
                display: "flex",
                marginTop: "0.5rem",
              }}
            >
              {attribute.items.map((item) => (
                <SizeDiv
                  style={{
                    color:
                      selectedAttributes[attribute.id] === item.id
                        ? "#ffffff"
                        : "black",

                    border: "2px solid black",
                    marginRight: "5px",
                    paddingLeft: cart ? "1rem" : "0.2rem",
                    paddingRight: cart ? "1rem" : "0.2rem",
                    paddingTop: cart ? "1rem" : "0.1rem",
                    paddingBottom: cart ? "1rem" : "0.1rem",
                    backgroundColor:
                      selectedAttributes[attribute.id] === item.id && "#000000",
                  }}
                  onClick={() =>
                    handleAttribute && handleAttribute(attribute.id, item.id)
                  }
                >
                  {item.value}
                </SizeDiv>
              ))}
            </div>
          ) : (
            <div style={{ marginTop: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  marginTop: "0.5rem",
                }}
              >
                {attribute.items.map((item) => (
                  <div
                    style={{
                      border:
                        selectedAttributes[attribute.id] === item.id &&
                        `1px solid ${item.value}`,
                      padding: "1px 1px",
                      marginRight: "2px",
                    }}
                  >
                    <GrayBox
                      style={{
                        height: cart ? "1.5rem" : "1.2rem",
                        width: cart ? "1.5rem" : "1.2rem",
                        backgroundColor: item.value,
                      }}
                      onClick={() =>
                        handleAttribute &&
                        handleAttribute(attribute.id, item.id)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Attributes;
