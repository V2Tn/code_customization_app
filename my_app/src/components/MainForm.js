import React, { useEffect, useState } from "react";
import ShowImgItems from "./ShowImgItems";
import ButtonRandom from "./ButtonRandom";
import ShowListCategory from "./ShowListCategory";
import ChangeAvatarClickItem from "./ChangeAvatarClickItem";

function MainForm() {
  const [showImgs, setShowImgs] = useState([]); // Danh sách các hình ảnh hiển thị
  const [partItems, setPartItems] = useState([]); // Danh sách các mục
  const [activeCategory, setActiveCategory] = useState("Body"); // Danh mục hoạt động
  const [avatarParts, setAvatarParts] = useState({
    Body: "assets/body/1.png", // Các phần tử của avatar
  });

  useEffect(() => {
    getListItem();
  }, []);

  const Categorys = [
    "Body",
    "Hair",
    "Eyes",
    "Brow",
    "Hat",
    "Glasses",
    "Mouth",
    "Beard",
    "Earring",
    "Clothes",
    "Ascot",
  ];

  const listcategorys = {
    Body: 17,
    Eyes: 24,
    Hair: 73,
    Mouth: 24,
    Brow: 15,
    Hat: 28,
    Glasses: 17,
    Earring: 32,
    Noses: 1,
    Ascot: 18,
    Layer_1: 5,
    Layer_2: 5,
    Layer_3: 9,
    Beard: 17,
  };

  // Hàm lấy danh sách các mục
  function getListItem() {
    const items = [];
    for (const item in listcategorys) {
      let origin = "";
      let size = 0;
      let z_index = 0;
      const png = ".png";

      // Đặt đường dẫn và số lượng ảnh
      if (item === "Body") {
        origin = "assets/body/";
        size = 17;
      } else if (item === "Eyes") {
        origin = "assets/eyes/";
        size = 24;
        z_index = 4;
      } else if (item === "Hair") {
        origin = "assets/hair/";
        size = 73;
        z_index = 6;
      } else if (item === "Mouth") {
        origin = "assets/mouths/";
        size = 24;
        z_index = 4;
      } else if (item === "Noses") {
        origin = "assets/noses/";
        size = 1;
        z_index = 4;
      } else if (item === "Beard") {
        origin = "assets/facial_hair/";
        size = 17;
        z_index = 4;
      } else if (item === "Brow") {
        origin = "assets/eyebrows/";
        size = 15;
        z_index = 4;
      } else if (item === "Hat") {
        origin = "assets/hats/";
        size = 28;
        z_index = 7;
      } else if (item === "Glasses") {
        origin = "assets/glasses/";
        size = 17;
        z_index = 5;
      } else if (item === "Ascot") {
        origin = "assets/neckwear/";
        size = 18;
        z_index = 4;
      } else if (item === "Layer_1") {
        origin = "assets/clothes/layer_1/";
        size = 5;
        z_index = 2;
      } else if (item === "Layer_2") {
        origin = "assets/clothes/layer_2/";
        size = 5;
        z_index = 2;
      } else if (item === "Layer_3") {
        origin = "assets/clothes/layer_3/";
        size = 9;
        z_index = 2;
      } else if (item === "Earring") {
        origin = "assets/earrings/";
        size = 32;
        z_index = 6;
      }

      // Xác định các item của từng mục
      let classify =
        item === "Layer_1" || item === "Layer_2" || item === "Layer_3"
          ? "Clothes"
          : item;
      for (let index = 0; index < size; index++) {
        let key = `${item}_${index + 1}`;
        let link = `${origin}${index + 1}${png}`;
        items.push({ key, link, classify, z_index });
      }
    }
    setPartItems(items); // Cập nhật lại item cho từng danh sách các mục
  }

  // Hàm xử lý khi click vào từng mục
  function handleCategoryClick(category) {
    setActiveCategory(category);
    const newImgs = partItems.filter((item) => item.classify === category);
    setShowImgs(newImgs);
  }

  // Hàm xử lý khi click vào item sẽ cập nhật item đã click vào avatar
  function handleItemClick(part) {
    setAvatarParts((set) => ({
      ...set,
      [activeCategory]: part.link,
    }));
  }

  // Hàm xử lý nút Random
  function handleRandom() {
    const random = {};
    Categorys.forEach((category) => {
      const items = partItems.filter((item) => item.classify === category);
      if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        random[category] = randomItem.link;
      }
    });
    setAvatarParts(random); // Cập nhật các item của avatar
  }

  return (
    <div className="root">
      <header className="ctn-header">
        <div className="form-header">
          <div id="title">CHARACTER CUSTOMIZATION</div>
          <hr />
        </div>
      </header>
      <div className="ctn-body">
        <div className="form-body">
          <div className="form-avatar">
            <ChangeAvatarClickItem avatarParts={avatarParts} />
            <ButtonRandom handleRandom={handleRandom} />
          </div>
          <div className="form-list">
            <div className="form-section">
              <ShowListCategory
                Categorys={Categorys}
                handleCategoryClick={handleCategoryClick}
                activeCategory={activeCategory}
              />
              <ShowImgItems
                activeCategory={activeCategory}
                showImgs={showImgs}
                handleItemClick={handleItemClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainForm;
