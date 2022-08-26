import styled from "styled-components";


export const MainDiv = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: space-between;
`;

export const IncrementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const IncrementButton = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000000;
  width: 1rem;
  height: 1rem;
  cursor : pointer
`;

export const DecrementButton = styled(IncrementButton)`
`;

export const ImgDiv = styled.img`
  object-fit: cover;
  width: 8rem;
  height: 80%;
  border-radius: 0.125rem;
  margin-left: 0.5rem;
`;