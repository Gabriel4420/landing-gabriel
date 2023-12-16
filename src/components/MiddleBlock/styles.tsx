import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("div")`
  .formatContent {
    text-align: center;
    line-height: 1.5;
    font-size: 1.3rem;
  }
  padding: 0.35rem 0 3.75rem;
`;

export const ContentWrapper = styled("div")`
  .tituloMiddle {
    font-size: 2.8rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
