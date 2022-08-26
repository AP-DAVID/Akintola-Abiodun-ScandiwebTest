import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 3rem;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
    flex-direction: row;
  }
`;

export const ImgDiv = styled.img`
  cursor: pointer;
  object-fit: cover;
  margin-bottom: 1.75rem;
  width: 4rem;
  height: 4rem;
  border-radius: 0.125rem;
`;

export const ImageRes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const InnerRes = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const MiddleImg = styled.img`
  object-fit: contain;
  height: 500px;
  width: 100%;
  border-radius: 0.125rem;
`;
