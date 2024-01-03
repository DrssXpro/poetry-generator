import PCard from "@/components/PCard";
import { Pagination } from "antd";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { queryMethod, queryId } = useParams();
  console.log(queryMethod, queryId);
  return (
    <div className="w-full flex flex-col">
      <div>
        查询：<span className="text-[#1677FF]">诗集</span>，共 300 首诗歌
      </div>
      <div className="mt-2 overflow-auto" style={{ height: "calc(100vh - 170px)" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <PCard key={i} refresh={false} />
        ))}
      </div>
      <div className="mt-3 w-full flex items-center justify-center">
        <Pagination defaultCurrent={1} total={50} className="justify-self-right" />
      </div>
    </div>
  );
};

export default SearchResult;
