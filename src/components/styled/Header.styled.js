
import styled from "styled-components";
export const HeaderDiv = styled.div`
  display: flex;
  margin-top: 1rem;
  padding-left: 0.5rem;
  position : relative;
  padding-right: 0.5rem;
  z-index: 10;

  top: 0;

  @media (min-width: 640px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftDiv = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 640px) {
    margin-left: 1rem;
  }
`;

export const TextCust = styled.div`
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-transform: uppercase;
  height: 3rem;
  /* border-bottom-width: 4px;
  border-color: #10b981;  */
`;

export const MiddleDiv = styled.div`
  display: flex;
  margin-left: 1rem;
  cursor: pointer;
`;

export const InnerMiddleDiv = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightDiv = styled.div`
  display: flex;
  color: #4b5563;
  align-items: center;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (min-width: 640px) {
    margin-left: 1rem;
  }
`;

export const Count = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;

  position: relative;
  width: 0.5rem;
  height: 0.7rem;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 3px 5px;
  background-color: black;
  color: #fff;
  margin-left: -8px;
  top: -9px;

  border-radius: 50%;
  text-align: center;
`;
