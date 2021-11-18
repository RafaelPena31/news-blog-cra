import { Col, Container, Row } from "react-bootstrap";

interface FramerProps {
  isSideAvailable: boolean;
  content: () => JSX.Element;
  side: () => JSX.Element;
}

export default function Framer({
  isSideAvailable,
  content,
  side,
}: FramerProps) {
  return (
    <Container fluid>
      <Row>
        <Col sm={isSideAvailable ? 8 : 12}>{content()}</Col>
        {isSideAvailable && <Col sm={4}>{side()}</Col>}
      </Row>
    </Container>
  );
}
