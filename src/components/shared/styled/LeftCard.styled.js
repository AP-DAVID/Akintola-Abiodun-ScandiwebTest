import styled from "styled-components";

export const MainDiv = styled.div`
  width: 6\0%;
  margin-left: 1.25rem;
  /* height: 4rem; */
  margin-top: 0;

  @media (min-width: 640px) {
    width: 20%;
    margin-top: 0;
  }
`;

export const SizeDiv = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  
  border-width: 2px;
`;

export const GrayBox = styled.div`
  cursor: pointer ;

  border-width: 2px;
  margin-left: 0.5rem,
  border-color: #6ee7b7;
`;

export const BlackBox = styled.div`
  background-color: #000000;
  margin-left: 0.5rem,
  cursor: pointer ;
  margin-right : 10px,
  height: 1rem;
  width: 2rem;
`;

export const GreenBox = styled.div`
  background-color: #065f46;
  text-align: center;
  padding-left: 5px,
   cursor: pointer ;
  flex-direction: column;
  justify-content: center;
  height: 1rem;
  width: 2rem;
`;
