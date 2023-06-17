import {
  DollarOutlined,
  LaptopOutlined,
  TransactionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Progress, Row, Skeleton, Typography } from "antd";
import PackagesChart from "./components/PackagesChart";
import PaymentsChart from "./components/PaymentsChart";
import { useGetSystemOverviewsQuery } from "@generated/schemas";
import { formatFileSize } from "../../utils/tools";

const DashboardPage = () => {
  const { data, loading } = useGetSystemOverviewsQuery({
    fetchPolicy: "network-only",
  });

  return (
    <div className="bg-[#F8F7FB] p-4 h-full">
      <Row gutter={[16, 16]}>
        {!loading ? (
          <>
            <Col span={18}>
              <Row gutter={[16, 16]} className="h-full">
                <Col span={6} className="h-full">
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center h-full">
                    <div className="bg-[#EBF1FF] inline-block px-4 py-2 rounded-lg text-[#6796FF] mr-8 text-lg">
                      <UserOutlined />
                    </div>
                    <div className="flex flex-col">
                      <Typography.Text className="font-semibold text-lg">
                        Users
                      </Typography.Text>
                      <Typography.Text className="font-bold text-2xl">
                        {data?.getSystemOverviews.totalUsers}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col span={6} className="h-full">
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center h-full">
                    <div className="bg-[#FDF0EB] inline-block px-4 py-2 rounded-lg text-[#F47656] mr-8 text-lg">
                      <TransactionOutlined />
                    </div>
                    <div className="flex flex-col">
                      <Typography.Text className="font-semibold text-lg">
                        Total payments
                      </Typography.Text>
                      <Typography.Text className="font-bold text-2xl">
                        {data?.getSystemOverviews.totalTransactions}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col span={6} className="h-full">
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center h-full">
                    <div className="bg-[#ECE9FE] inline-block px-4 py-2 rounded-lg text-[#4C2DF9] mr-8 text-lg">
                      <DollarOutlined />
                    </div>
                    <div className="flex flex-col">
                      <Typography.Text className="font-semibold text-lg">
                        Total incomes
                      </Typography.Text>
                      <Typography.Text className="font-bold text-2xl">
                        {`$${data?.getSystemOverviews.totalIncome}`}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col span={6} className="h-full">
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center h-full">
                    <div className="bg-[#E8FBF7] inline-block px-4 py-2 rounded-lg text-[#61E1BE] mr-8 text-lg">
                      <LaptopOutlined />
                    </div>
                    <div className="flex flex-col">
                      <Typography.Text className="font-semibold text-lg">
                        Total computers
                      </Typography.Text>
                      <Typography.Text className="font-bold text-xl">
                        {data?.getSystemOverviews.totalComputers}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={6}>
              <div className="bg-white shadow-md p-4 rounded-lg flex flex-row">
                <Progress
                  type="circle"
                  percent={Math.round(
                    ((data?.getSystemOverviews.storagePercentage.used ?? 0) *
                      100) /
                      (data?.getSystemOverviews.storagePercentage.total ?? 1)
                  )}
                />
                <div className="flex flex-col items-center justify-center ml-8">
                  <Typography.Text className="text-xl">
                    Remaining storage
                  </Typography.Text>
                  <Typography.Text>{`${formatFileSize(
                    data?.getSystemOverviews.storagePercentage.used ?? 0
                  )} /
                    ${formatFileSize(
                      data?.getSystemOverviews.storagePercentage.total ?? 0
                    )}
                  `}</Typography.Text>
                </div>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col span={18}>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Skeleton.Button
                    active={true}
                    size="large"
                    className="w-full h-56"
                  />
                </Col>
                <Col span={6}>
                  <Skeleton.Button
                    active={true}
                    size="large"
                    className="w-full h-56"
                  />
                </Col>

                <Col span={6}>
                  <Skeleton.Button
                    active={true}
                    size="large"
                    className="w-full h-56"
                  />
                </Col>
                <Col span={6}>
                  <Skeleton.Button
                    active={true}
                    size="large"
                    className="w-full h-56"
                  />
                </Col>
              </Row>
            </Col>

            <Col span={6}>
              <Skeleton.Button
                active={true}
                size="large"
                className="w-full h-56"
              />
            </Col>
          </>
        )}
      </Row>
      <Row className="mt-4" gutter={[16, 16]}>
        <Col span={18}>
          <div className="bg-white p-8 rounded-lg">
            <PaymentsChart />
          </div>
        </Col>
        <Col span={6}>
          <div className="bg-white p-8 rounded-lg">
            <PackagesChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashboardPage;
