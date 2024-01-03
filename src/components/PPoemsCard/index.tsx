import { Card } from "antd";
import { Image } from "antd";

const PPoemsCard = () => {
  return (
    <Card bodyStyle={{ padding: "10px" }} style={{ background: "none" }} hoverable>
      <div className="flex gap-5">
        <div className="w-50 h-[100%]">
          <Image className="w-full h-full" src="https://picsum.photos/seed/picsum/800/600" />
        </div>

        <div className="flex-1" style={{ fontFamily: "serif" }}>
          <div className="text-2xl font-bold mb-3">全唐诗</div>
          <p>
            《全唐诗》是清康熙四十四年（1705年），彭定求、沈三曾、杨中讷、汪士鋐、汪绎、俞梅、徐树本、车鼎晋、潘从律、查嗣瑮10人奉敕编校，“得诗四万八千九百余首，凡二千二百余人”，
            共计900卷，目录12卷。 来自百科
            《全宋诗》继唐诗的高度繁荣之后，宋诗在思想内容和艺术表现上有新的开拓和创造，出现了许多优秀作家作品，形成了许多流派，对元、明、清的诗歌发展产生了深远影响。来自百科
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PPoemsCard;
