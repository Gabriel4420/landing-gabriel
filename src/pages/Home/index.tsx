import { lazy } from "react";
import MiddleBlockContent from "../../content/ptbr/MiddleBlockContent.json";
import AboutContent from "../../content/ptbr/AboutContent.json";
import MissionContent from "../../content/ptbr/MissionContent.json";
import ProductContent from "../../content/ptbr/ProductContent.json";
import ContactContent from "../../content/ptbr/ContactContent.json";
import { withTranslation } from "react-i18next";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: any) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={t("IntroContentTitle")}
        content={t("IntroContentDescription")}
        button={t("title")}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={t("MiddleContentBlockTitle")}
        content={t("MiddleContentBlockDescription")}
        button={t("MiddleContentBlockButton")}
        btnFTS="1.3rem;"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
