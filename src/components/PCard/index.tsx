import { LikeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Tooltip, message } from "antd";

interface PCardProps {
  refresh?: boolean;
}

const PCard = (props: PCardProps) => {
  const { refresh = true } = props;

  const likePoem = () => {
    message.success("点赞成功");
  };
  
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-xl my-2">帝京篇十首 九</p>
      <p className="my-2 text-[#1677FF] cursor-pointer text-lg">太宗皇帝</p>
      <div className="flex flex-row flex-wrap max-w-[600px] px-10 justify-center items-center mb-5">
        <div className="my-1 tracking-[0.3em]">建章歡賞夕，二八盡妖妍。</div>
        <div className="my-1 tracking-[0.3em]">羅綺昭陽殿，芬芳玳瑁筵。</div>
        <div className="my-1 tracking-[0.3em]">珮移星正動，扇掩月初圓。</div>
        <div className="my-1 tracking-[0.3em]">無勞上懸圃，即此對神仙。</div>
      </div>
      <div className="flex gap-5">
        <Button icon={<LikeOutlined />} type="primary" onClick={likePoem}>
          (100)
        </Button>
        <Button type="primary" danger>
          繁 / 简
        </Button>
        {refresh && (
          <Tooltip title="换一首">
            <Button type="primary" icon={<ReloadOutlined />} shape="circle"></Button>
          </Tooltip>
        )}
      </div>
      <div className="w-[10%] bg-[#1677FF] h-[1px] my-10"></div>
    </div>
  );
};

export default PCard;
