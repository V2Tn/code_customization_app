import React from "react";

function ShowImgItems({ activeCategory, showImgs, handleItemClick }) {
  return (
    <div className="list-item">
      <div id="title">{activeCategory}</div>
      <div id="form-option">
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
  );
}
export default ShowImgItems;
