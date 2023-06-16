import { User, useGetUsersBySearchPaginationQuery } from "@generated/schemas";
import { Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { TableData } from "src/common/types";
import debounce from "lodash/debounce";

const columns: ColumnsType<
  User & {
    key: string;
  }
> = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Current Plan",
    dataIndex: "currentPackage.detail",
    key: "currentPackage.detail",
  },
];

const UserPage = () => {
  const [pagingState, setPagingState] = useState({
    page: 1,
    limit: 10,
  });

  const [search, setSearch] = useState("");

  const debounceSearch = debounce((input) => {
    setSearch(input);
  }, 300);

  const { data, loading } = useGetUsersBySearchPaginationQuery({
    variables: {
      search,
      page: pagingState.page,
      limit: pagingState.limit,
    },
    fetchPolicy: "cache-first",
  });

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Input.Search
          className="mb-4 w-1/5"
          placeholder="Search..."
          onChange={(event) => debounceSearch(event.target.value)}
        />
      </div>
      <Table<TableData<User>>
        columns={columns}
        dataSource={
          data?.getUsersBySearchPagination.results.map((item) => ({
            ...item,
            key: item.ID,
          })) as TableData<User>[]
        }
        loading={loading}
        onChange={(pagination) => {
          setPagingState((prev) => ({
            ...prev,
            page: pagination.current ?? 1,
            limit: pagination.pageSize ?? 10,
          }));
        }}
        pagination={{
          defaultPageSize: 10,
          total: data?.getUsersBySearchPagination.total,
        }}
        expandable={{
          expandedRowRender: (record) => <p>{record.email}</p>,
        }}
      />
    </div>
  );
};

export default UserPage;
