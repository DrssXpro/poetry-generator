import { Button, Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  dynasty: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "朝代",
    dataIndex: "dynasty",
    key: "dynasty",
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <Button type="primary" ghost>
        查看TA的诗词
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    dynasty: "唐朝",
  },
  {
    key: "2",
    name: "Jim Green",
    dynasty: "宋朝",
  },
  {
    key: "3",
    name: "Joe Black",
    dynasty: "元朝",
  },
];

const Poet = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <Input.Search placeholder="请输入诗人姓名" enterButton="搜索" className="w-70"></Input.Search>
        <Button type="primary" danger>
          随机
        </Button>
      </div>
      <div className="w-full mt-5">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Poet;
