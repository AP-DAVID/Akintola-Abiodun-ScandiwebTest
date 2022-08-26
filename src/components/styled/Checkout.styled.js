import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  margin-top: 1.25rem;
  margin-left : 1.25rem;
  /* height: 4rem; */

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
  width: 2.5rem;
  height: 2rem;
  border-width: 2px;
`;

export const GrayBox = styled.div`
  background-color: #e5e7eb;
   cursor: pointer ;
  height: 2rem;
  border-width: 2px;
  margin-left: 0.5rem,
  border-color: #6ee7b7;
  width: 2rem;
`;

export const BlackBox = styled.div`
  background-color: #000000;
  margin-left: 0.5rem,
  cursor: pointer ;
  margin-right : 10px,
  height: 2rem;
  width: 2rem;
`;

export const GreenBox = styled.div`
  background-color: #065f46;
  text-align: center;
  padding-left: 5px,
   cursor: pointer ;
  flex-direction: column;
  justify-content: center;
  height: 2rem;
  width: 2rem;
`;

export const ButtonDiv = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1.25rem;
  color: #f3f4f6;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  border: 0;

  width: 14rem;
  cursor: pointer;
  height: 3rem;
  border-radius: 0.125rem;
  cursor: pointer;
`;

export const TextDiv = styled.h5`
  object-fit: cover;
  padding-right: 0.75rem;
  margin-top: 1.25rem;
  font-weight : 100;
  @media (min-width: 640px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
