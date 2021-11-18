import { INews } from "../../../../types/news.types";
import CardNews from "../card-news.component";
import "./news.styles.scss";

interface NewsContainerProps {
  news: INews[];
  onClickTransferData: (value: INews | null) => void;
}

export default function NewsContainer({
  news,
  onClickTransferData,
}: NewsContainerProps) {
  return (
    <div className="news">
      {news.map((n) => (
        <CardNews
          key={n.id}
          content={n}
          onClick={() => onClickTransferData(n)}
        />
      ))}
    </div>
  );
}
