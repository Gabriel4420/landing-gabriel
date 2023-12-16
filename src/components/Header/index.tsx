import { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import i18n from "i18next";
import { LanguageSwitchContainer, LanguageSwitch } from "../Footer/styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const [hasShadow, setHasShadow] = useState(false);
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <Row justify="space-between">
          <Col>
            <CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <Span>{t("About")}</Span>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
              <Span>{t("Mission")}</Span>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            <CustomNavLinkSmall onClick={() => scrollTo("product")}>
              <Span>{t("Product")}</Span>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")}
            >
              <Span>
                <Button fontSize="1rem;">{t("Contact")}</Button>
              </Span>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-states.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}>
                <SvgIcon
                  src="spain.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>

              <LanguageSwitch onClick={() => handleChange("ptbr")}>
                <SvgIcon
                  src="brazil.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
            </LanguageSwitchContainer>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <HeaderSection hasShadow={hasShadow}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
          <Col lg={6} md={6} sm={12} xs={12}>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-states.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}>
                <SvgIcon
                  src="spain.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>

              <LanguageSwitch onClick={() => handleChange("ptbr")}>
                <SvgIcon
                  src="brazil.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
            </LanguageSwitchContainer>
          </Col>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
