import { DashboardFilled } from "@ant-design/icons";
import loadable from "@loadable/component";

export interface Route {
  path: string;
  label?: string;
  element: React.ReactNode;
  icon?: React.ReactNode;
  hidden?: boolean;
  key: string;
}

const DashboardPage = loadable(() => import("@pages/Dashboard"));

const routes: Route[] = [
  {
    path: "/",
    key: "/",
    label: "Dashboard",
    element: <DashboardPage />,
    icon: <DashboardFilled />,
  },
];
export default routes;
