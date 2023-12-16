import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";

import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import parse from "html-react-parser";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row
          className="mobileView"
          justify="space-between"
          align="middle"
          id={id}
        >
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{parse(t(title))}</h6>
              <Content>{parse(t(content))}</Content>
              <ButtonWrapper>
                <Button
                  fontSize="1.2rem;"
                  fixedWidth={true}
                  onClick={() => scrollTo("about")}
                >
                  {t("IntroContentButton")}
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col className="iconMobile" lg={11} md={11} sm={50} xs={52}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
