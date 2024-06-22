import React from "react";

function ShowListCategory({ handleCategoryClick, Categorys }) {
  return (
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
  );
}

export default ShowListCategory;
