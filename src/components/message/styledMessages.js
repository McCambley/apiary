import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Bubble = styled.div`
  padding: 30px 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  @media (max-width: 600px) {
    padding: 14px 14px;
    text-align: center;
  }
`;

export const Reply = styled.h1`
  font-size: 20px;
  /* max-width: 780px; */
  font-weight: normal;
  line-height: 30px;
  color: ${({ text }) => text};
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 55.58px;
  margin: 0;
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

export const Image = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 34px;
  margin-bottom: -40px;
  z-index: 5;
  display: ${({ displayLogo }) => displayLogo};
  border-radius: 50px;
  /* position: absolute;
  z-index: 1; */
  @media (max-width: 1200px) {
    margin-right: 18px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 40px;
  color: black;
`;

export const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  padding: 100px 80px;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 100px 40px;
  }
`;
