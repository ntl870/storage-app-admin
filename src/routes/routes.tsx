import { DashboardFilled, UserOutlined } from "@ant-design/icons";
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

const UserPage = loadable(() => import("@pages/User"));

const routes: Route[] = [
  {
    path: "/",
    key: "/",
    label: "Dashboard",
    element: <DashboardPage />,
    icon: <DashboardFilled />,
  },
  {
    path: "/users",
    key: "/users",
    label: "Users",
    element: <UserPage />,
    icon: <UserOutlined />,
  },
];

export default routes;
