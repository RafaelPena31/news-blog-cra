import { Button, Card } from "react-bootstrap";
import { INews } from "../../../types/news.types";

interface CardNewsProps {
  content: INews;
  onClick: () => void;
}

export default function CardNews({ content, onClick }: CardNewsProps) {
  const { content: newContent, title, imageUri } = content;

  return (
    <Card className="news-card" style={{ width: "30%" }}>
      <Card.Img variant="top" src={imageUri} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{newContent}</Card.Text>

        <Button variant="secondary" onClick={onClick}>
          Ver mais
        </Button>
      </Card.Body>
    </Card>
  );
}
