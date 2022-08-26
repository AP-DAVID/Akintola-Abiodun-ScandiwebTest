import React, { Component } from "react";
import {
  MainDiv,
  SizeDiv,
  GrayBox,
  BlackBox,
  GreenBox,
} from "../styled/Checkout.styled";

export class Leftcard extends Component {
  render() {
    return (
      <MainDiv style={{ marginLeft: "0rem" }} className="font-link ">
        <h3 style={{ marginBottom: "-15px" }}>Apollo</h3>
        <h3
          style={{
            fontWeight: 100,
            marginBottom: "10px",
          }}
        >
          Running Short
        </h3>

        {/* The price */}
        <div>
          <h5
            style={{
              marginTop: "0.25rem",
              marginBottom: "-10px",
              fontWeight: 700,
            }}
            className="mt-1 font-bold"
          >
            $50.00
          </h5>
        </div>

        {/* Size section */}
        <div style={{ marginTop: "0.5rem" }}>
          <h5 style={{ fontWeight: 700, marginBottom: "10px" }}>SIZE:</h5>
          <div
            style={{
              display: "flex",
              marginTop: "0.5rem",
            }}
          >
            <SizeDiv
              style={{
                height: "20px",
                border: "2px solid black",
                marginRight: "5px",
              }}
            >
              {" "}
              XS
            </SizeDiv>
            <SizeDiv
              style={{
                color: "#ffffff",
                height: "20px",
                border: "2px solid black",
                marginRight: "5px",
                backgroundColor: "#000000",
              }}
            >
              {" "}
              S
            </SizeDiv>
            <SizeDiv
              style={{
                height: "20px",
                border: "2px solid black",
                marginRight: "5px",
              }}
            >
              {" "}
              M
            </SizeDiv>
            <SizeDiv
              style={{
                height: "20px",
                border: "2px solid black",
                marginRight: "5px",
              }}
            >
              {" "}
              L
            </SizeDiv>
          </div>
        </div>

        {/* The Color */}
        <div style={{ marginTop: "0.5rem" }}>
          <h5 style={{ fontWeight: 700, marginBottom: "-8px" }}>COLOR:</h5>
          <div
            style={{
              display: "flex",
              marginTop: "0.5rem",
            }}
          >
            <GrayBox
              style={{ height: "25px", width: "25px", marginRight: "5px" }}
            />
            <BlackBox
              style={{ height: "25px", width: "25px", marginRight: "5px" }}
            />
            <GreenBox
              style={{ height: "25px", width: "25px", marginRight: "5px" }}
            />
          </div>
        </div>
      </MainDiv>
    );
  }
}

export default Leftcard;
