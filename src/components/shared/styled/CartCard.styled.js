import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  width: 100%;
  height : 100%
  align-items: center;
`;

export const IncrementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 0.5rem;
`;

export const IncrementButton = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000000;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const DecrementButton = styled(IncrementButton)``;

export const ImgDiv = styled.img`
  margin-right: 0.5rem;

  object-fit: contain;
  width: 6.6rem;
  /* height : 200%; */
  border-radius: 0.125rem;
  margin-left: 0.5rem;
`;

export const ChangeImg = styled.div`
  color: white;
  background-color: #3b453d;
  padding: 10px 10px;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

export const ChangeImgDiv = styled.div`
  display: flex;
  margin-right: 1.5rem;
  justify-content: flex-end;
  z-index : 50
`;
