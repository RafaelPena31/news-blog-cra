import { useState } from "react";
import NewsContainer from "../../core/components/news/container/news.container";
import NewsSider from "../../core/components/news/sider/news.sider";
import { news } from "../../core/constants/news";
import Framer from "../../core/container/framer.container";
import { INews } from "../../types/news.types";
import "./home.styles.scss";

export default function HomeContainer() {
  const [selectedNews, setSelectedNews] = useState<INews | null>(null);

  const openSider = (value: INews | null) => {
    window.scrollTo(0, 0);
    setSelectedNews(value);
  };

  return (
    <div className="home-container">
      <section className="outdoor">
        <h1>News - Seu portal de notícias</h1>
        <p>
          Powered by ReactJS + Typescript - Rafael Augusto Pena | Fernando
          Rodrigues | Arthur Santiago
        </p>
      </section>

      <Framer
        isSideAvailable={!!selectedNews}
        content={() => (
          <NewsContainer
            news={[...news.health, ...news.politic, ...news.technology]}
            onClickTransferData={openSider}
          />
        )}
        side={() => (
          <NewsSider
            news={selectedNews}
            onClickTransferData={setSelectedNews}
          />
        )}
      />
    </div>
  );
}
