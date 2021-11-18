import { useState } from "react";
import NewsContainer from "../../core/components/news/container/news.container";
import NewsSider from "../../core/components/news/sider/news.sider";
import { news } from "../../core/constants/news";
import Framer from "../../core/container/framer.container";
import { INews } from "../../types/news.types";
import "./politic.styles.scss";

export default function PoliticContainer() {
  const [selectedNews, setSelectedNews] = useState<INews | null>(null);

  const openSider = (value: INews | null) => {
    window.scrollTo(0, 0);
    setSelectedNews(value);
  };

  return (
    <Framer
      isSideAvailable={!!selectedNews}
      content={() => (
        <NewsContainer news={news.politic} onClickTransferData={openSider} />
      )}
      side={() => (
        <NewsSider news={selectedNews} onClickTransferData={setSelectedNews} />
      )}
    />
  );
}
