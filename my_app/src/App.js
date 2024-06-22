import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [showImgs, setShowImgs] = useState([]);
  const [partItems, setPartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Body");
  const [selectedParts, setSelectedParts] = useState({
    Body: "assets/body/1.png",
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
    "Layer_1",
    "Layer_2",
    "Layer_3",
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

  function getListItem() {
    const items = [];
    for (const item in listcategorys) {
      let origin = "";
      let size = 0;
      let z_index = 0;
      const png = ".png";

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
        size = 5;
        z_index = 2;
      } else if (item === "Earring") {
        origin = "assets/earrings/";
        size = 32;
        z_index = 6;
      }
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
    setPartItems(items);
  }

  function handleCategoryClick(category) {
    setActiveCategory(category);
    const newImgs = partItems.filter((item) => item.classify === category);
    setShowImgs(newImgs);
  }

  function handleItemClick(item) {
    setSelectedParts((prevSelectedParts) => ({
      ...prevSelectedParts,
      [activeCategory]: item.link,
    }));
  }

  function handleRandomize() {
    const randomParts = {};
    Categorys.forEach((category) => {
      const items = partItems.filter((item) => item.classify === category);
      if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        randomParts[category] = randomItem.link;
      }
    });
    setSelectedParts(randomParts);
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
            <div id="avatar">
              {Object.values(selectedParts).map((src, index) => (
                <img key={index} src={src} alt="" />
              ))}
            </div>
            <button id="btn" onClick={handleRandomize}>
              RANDOMIZE!
            </button>
          </div>
          <div className="form-list">
            <div className="form-section">
              <ul className="list-category">
                {Categorys.map((list) => (
                  <li
                    id="category-item"
                    key={list}
                    onClick={() => handleCategoryClick(list)}
                  >
                    {list}
                  </li>
                ))}
              </ul>
              <div className="list-item">
                <div id="title">{activeCategory}</div>
                {showImgs.map((listitem) => (
                  <div
                    key={listitem.key}
                    id="option"
                    onClick={() => handleItemClick(listitem)}
                  >
                    <img src={listitem.link} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
