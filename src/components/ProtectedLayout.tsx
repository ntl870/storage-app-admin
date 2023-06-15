import { Route } from "@routes/routes";
import { Button, Layout, Menu, Progress, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import useRouter from "../hooks/useRouter";
import { AppHeader } from "./AppHeader";
import logo from "../assets/logo.png";
import useCurrentUser from "@hooks/useCurrentUser";
import { covertBytesToGiB } from "@utils/tools";

interface ProtectedLayoutProps {
  children: React.ReactNode;
  routes: Route[];
}

export const ProtectedLayout = ({ children, routes }: ProtectedLayoutProps) => {
  const { maxStorage, storageUsed } = useCurrentUser();
  const [collapsed, setCollapsed] = useState(false);
  const { navigate, pathname } = useRouter();

  const onSelectItem = (key: string) => {
    navigate(key, {
      replace: true,
    });
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsible
        theme="light"
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
      >
        <div className="flex justify-center items-center p-4">
          <img
            id="logo"
            alt="CloudStorage logo"
            src={logo}
            className="w-20 h-20 mr-1"
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={routes}
          onSelect={({ key }) => onSelectItem(key)}
        />
      </Sider>
      <Layout className="ml-300px min-h-screen overflow-y-hidden">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
