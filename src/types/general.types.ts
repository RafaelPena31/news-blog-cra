export interface IConfigRoutes {
  route: string;
  title: string;
  exact: boolean;
  component: () => JSX.Element;
}
