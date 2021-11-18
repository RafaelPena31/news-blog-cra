import { Image } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { INews } from "../../../../types/news.types";
import "./news.sider.styles.scss";

interface NewsSiderProps {
  news: INews | null;
  onClickTransferData: (value: INews | null) => void;
}

export default function NewsSider({
  news,
  onClickTransferData,
}: NewsSiderProps) {
  return (
    <div className="news-sider">
      <button
        className="close-btn"
        onClick={() => {
          console.log("ashkdgjhsdgf");
          onClickTransferData(null);
        }}
      >
        <IoMdClose />
      </button>

      <h1>{news?.title}</h1>

      <Image src={news?.imageUri} rounded fluid />

      <p>{news?.content}</p>
      <a href={news?.newsPath} target="_blank" rel="noreferrer">
        Acessar notícia completa
      </a>
    </div>
  );
}
