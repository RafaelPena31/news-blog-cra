import { BrowserRouter, Route } from "react-router-dom";
import HeaderNavigation from "../core/components/header/header-navigation.component";
import HealthContainer from "../pages/health/health.container";
import HomeContainer from "../pages/home/home.container";
import PoliticContainer from "../pages/politic/politic.container";
import TechnologyContainer from "../pages/technology/technology.container";
import { IConfigRoutes } from "../types/general.types";

export default function NewsAppRoutes() {
  const configRoutes: IConfigRoutes[] = [
    {
      route: "/",
      title: "Início",
      exact: true,
      component: HomeContainer,
    },
    {
      route: "/saude",
      title: "Saúde",
      exact: false,
      component: HealthContainer,
    },
    {
      route: "/politica",
      title: "Política",
      exact: false,
      component: PoliticContainer,
    },
    {
      route: "/tecnologia",
      title: "Tecnologia",
      exact: false,
      component: TechnologyContainer,
    },
  ];

  return (
    <BrowserRouter>
      <HeaderNavigation config={configRoutes} />
      {configRoutes.map(({ route, exact, component }) => (
        <Route key={route} path={route} exact={exact} component={component} />
      ))}
    </BrowserRouter>
  );
}
