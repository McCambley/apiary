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
  max-width: 840px;
  @media (max-width: 600px) {
    padding: 14px 14px;
    text-align: center;
  }
`;

export const Reply = styled.h1`
  font-size: 20px;
  font-weight: normal;
  line-height: 30px;
  color: ${({ text }) => text};
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Section = styled.div`
  background-color: #e5e5e5;
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
  display: flex;
  padding: 100px 80px;
  max-width: 1440px;
  margin: auto;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 100px 40px;
  }
`;
