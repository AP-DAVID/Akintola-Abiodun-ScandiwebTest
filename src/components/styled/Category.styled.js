import styled from "styled-components";

export const Maindiv = styled.div`
  cursor: pointer;
  :hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  background-color: #ffffff;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 2.5rem;
  margin-right: 1.25rem;
  padding-bottom: 2.5rem;
  margin-bottom: 5rem;
`;

export const CartImg = styled.img`
  position: absolute;
  margin-left: 275px;
  margin-top: 295px;
  cursor: pointer;
`;

export const MiddleDiv = styled.h1`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 2rem;
  font-weight: 400;

  @media (min-width: 640px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export const OutOfStock = styled.h3`
  position: absolute;
  margin-top: -150px;
  color: #6b7280;
  margin-left: 120px;
`;

export const ImgDiv = styled.img`
  object-fit: contain;
  width: 18rem;
  height: 20rem;
  border-radius: 0.125rem;
`;

export const CardDiv = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: stretch;

  @media (min-width: 640px) {
    display: grid;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-left: 0.25rem;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
