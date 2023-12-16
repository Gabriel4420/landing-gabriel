import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 7rem 0 1rem;
    .mobileView {
      display: flex;
      flex-direction: column-reverse;
      padding: 0.5rem 0.5rem 0.5rem;
    }

    .iconMobile {
      padding-bottom: 3.5rem;
    }

    .ant-col-sm-11 {
      max-width: 100%;
    }
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 100%;
  width: 800px;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
    width: 100%;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;
