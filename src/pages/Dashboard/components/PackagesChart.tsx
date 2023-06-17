import { Bar, BarConfig } from "@ant-design/charts";
import { useGetStatisticPackagesQuery } from "@generated/schemas";
import { Typography } from "antd";

const PackagesChart = () => {
  const { data } = useGetStatisticPackagesQuery({
    fetchPolicy: "network-only",
  });

  const config: BarConfig = {
    data: data?.getStatisticPackages ?? [],
    xField: "total",
    yField: "packages_name",
    height: 847,
    legend: {
      position: "top-left",
    },
  };
  return (
    <div>
      <Typography.Title level={4}>Packages</Typography.Title>
      <Bar {...config} />
    </div>
  );
};

export default PackagesChart;
