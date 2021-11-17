import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IConfigRoutes } from "../../../types/general.types";
import "./header-navigation.styles.scss";

interface HeaderNavigationProps {
  config: IConfigRoutes[];
}

export default function HeaderNavigation({ config }: HeaderNavigationProps) {
  const [activeKey, setActiveKey] = useState("/");

  return (
    <>
      <Container fluid>
        <Navbar.Brand>RP News</Navbar.Brand>
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
