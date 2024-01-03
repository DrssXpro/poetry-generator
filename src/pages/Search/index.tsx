import PCard from "@/components/PCard";
import { Form, Input, Pagination, Select } from "antd";

const Search = () => {
  return (
    <div className="w-full">
      <Form layout="inline">
        <Form.Item>
          <Select
            defaultValue="title"
            style={{ width: 120 }}
            options={[
              { label: "标题", value: "title" },
              { label: "内容", value: "content" },
              { label: "韵律", value: "rhythm" },
              { label: "作者", value: "author" },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Input.Search placeholder="请输入搜索内容" enterButton="搜索"></Input.Search>
        </Form.Item>
      </Form>
      <div
        className="mt-3 flex flex-col gap-5 items-center w-full overflow-auto Container"
        style={{ height: "calc(100vh - 180px)" }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <PCard key={i} refresh={false}></PCard>
        ))}
      </div>
      <div className="mt-3 w-full flex items-center justify-center">
        <Pagination defaultCurrent={1} total={50} className="justify-self-right" />
      </div>
    </div>
  );
};

export default Search;
