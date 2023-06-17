import { Column, ColumnConfig } from "@ant-design/charts";
import { useGetStatisticTransactionsQuery } from "@generated/schemas";
import { DatePicker, Typography } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

const defaultValue = [
  dayjs().subtract(7, "days").format("YYYY-MM-DD"),
  dayjs().format("YYYY-MM-DD"),
];
const PaymentsChart = () => {
  const [dateRange, setDateRange] = useState<string[]>(defaultValue);
  const { data, loading } = useGetStatisticTransactionsQuery({
    variables: {
      dateFrom: dateRange[0],
      dateTo: dateRange[1],
    },
    fetchPolicy: "cache-and-network",
  });

  const config: ColumnConfig = {
    data: data?.getStatisticTransactions ?? [],
    xField: "date",
    yField: "amount",
    color: "#6394f9",
    height: 800,
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
      formatter: (datum) => `$${datum.amount}`,
    },
    tooltip: {
      formatter: (datum) => ({
        name: "Amount",
        value: `$${datum.amount}`,
      }),
    },
    columnStyle(datum) {
      return {
        fill: datum.amount > 0 ? "#6394f9" : "#F4664A",
      };
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
        formatter: (value) => `$${value}`,
      },
    },
  };

  return (
    <div>
      <Typography.Title level={4}>Payment statistics</Typography.Title>
      <div className="flex justify-end">
        <DatePicker.RangePicker
          onChange={(_, dateString) => setDateRange(dateString)}
          className="mb-4"
          defaultPickerValue={[dayjs(defaultValue[0]), dayjs(defaultValue[1])]}
          value={[dayjs(dateRange[0]), dayjs(dateRange[1])]}
        />
      </div>
      <Column {...config} loading={loading} />
    </div>
  );
};

export default PaymentsChart;
