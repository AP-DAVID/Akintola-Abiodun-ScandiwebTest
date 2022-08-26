import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  margin-right: 80px;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: 0;
`;

export const InnerMainDiv = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: flex-end;
  width: 100%;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentDiv = styled.div`
  display: flex;
  position: relative;
  background-color: #ffffff;
  flex-direction: column;
  justify-content : space-between;
  width: 19rem;
  border-radius: 0.5rem;
  border-width: 0;
  height : 40rem;
  outline: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const HeaderDiv = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

export const HeaderText = styled.h3`
  padding-left: 0.9rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
`;

export const PriceDiv = styled.div`
  display: flex;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  margin-top: 1.75rem;
  justify-content: space-between;
`;

export const CheckDiv = styled.div`
  display: flex;
  padding: 10px 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 0.5rem;
  justify-content: space-between;
`;

export const Buttonn = styled.button`
  width: 138px;
  height: 41px;
  cursor: pointer;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.125rem;
  border: 1px solid black;
`;
 
export const Button = styled(Buttonn)`
  background-color: #ffffff;
`;

 export const ButtonC = styled(Buttonn)`
   background-color: #10b981;
   color: #ffffff;
 `;

//  export const Footer = styled.div`
//    display: flex;
//    padding: 1.5rem;
//    justify-content: flex-end;
//    align-items: center;
//    border-bottom-right-radius: 0.25rem;
//    border-bottom-left-radius: 0.25rem;
//    border-top-width: 1px;
//    border-style: solid;
//  `;

 export const FooterButton = styled.button`
   padding-top: 0.5rem;
   padding-bottom: 0.5rem;
   padding-left: 1.5rem;
   padding-right: 1.5rem;
   margin-right: 0.25rem;
   margin-bottom: 1.25rem;
   margin-top: 1.25rem;
   transition-property: all;
   transition-duration: 150ms;
   transition-timing-function: linear;
   color: #ef4444;
   font-size: 0.875rem;
   line-height: 1.25rem;
   font-weight: 700;
   text-transform: uppercase;
   outline: 0;
 `;


export const Opacity = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top : 5rem;
  background-color: #000000;
  opacity: 0.25;
`;






