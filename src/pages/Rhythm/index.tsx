import { Button, Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  title: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "名称",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "操作",
    key: "action",
    render: () => (
      <Button type="primary" ghost>
        查看该韵律的诗词
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "唐朝",
  },
  {
    key: "2",
    title: "宋朝",
  },
  {
    key: "3",
    title: "元朝",
  },
  {
    key: "4",
    title: "元朝",
  },
  {
    key: "5",
    title: "元朝",
  },
  {
    key: "6",
    title: "元朝",
  },
  {
    key: "7",
    title: "元朝",
  },
];
const Rhythm = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <Input.Search placeholder="请输入韵律" enterButton="搜索" className="w-70"></Input.Search>
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

export default Rhythm;
