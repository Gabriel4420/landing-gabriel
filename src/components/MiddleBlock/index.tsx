import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import parse from "html-react-parser";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
  btnFTS?: string;
}

const MiddleBlock = ({
  title,
  content,
  button,
  btnFTS,
  t,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={100} md={24} sm={24} xs={24}>
              <h6 className="tituloMiddle">{t(title)}</h6>
              <Content>{parse(t(content))}</Content>
              {button && (
                <Button
                  fontSize={btnFTS}
                  name="submit"
                  onClick={() => scrollTo("mission")}
                >
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
