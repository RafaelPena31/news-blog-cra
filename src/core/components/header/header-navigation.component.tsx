import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { IConfigRoutes } from "../../../types/general.types";
import "./header-navigation.styles.scss";

interface HeaderNavigationProps {
  config: IConfigRoutes[];
}

export default function HeaderNavigation({ config }: HeaderNavigationProps) {
  const path = useLocation();

  const getDefaultKey = () => {
    return path.pathname;
  };

  const [activeKey, setActiveKey] = useState(getDefaultKey());

  const getDefaultKeyColor = () => {
    switch (activeKey) {
      case "/tecnologia":
        return "technology-color";
      case "/saude":
        return "health-color";
      case "/politica":
        return "politic-color";
      default:
        return "general-color";
    }
  };

  return (
    <>
      <Container fluid className={getDefaultKeyColor()}>
        <Navbar.Brand>News</Navbar.Brand>
      </Container>
      <Nav variant="tabs" activeKey={activeKey}>
        {config.map(({ route, title }) => (
          <Link key={route} to={route} onClick={() => setActiveKey(route)}>
            <Nav.Item>
              <div className={`nav-link ${activeKey === route && "active"}`}>
                {title}
              </div>
            </Nav.Item>
          </Link>
        ))}
      </Nav>
    </>
  );
}
