import React from "react";

function ShowImgItems({ activeCategory, showImgs, handleItemClick }) {
  return (
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
  );
}
export default ShowImgItems;
