import React from "react";

const Categories = ({ filterItem, items }) => {
  const uniqeCategoy = (items) => {
    let array = [];
    items.map((item) => {
      array.push(item.category);
    });
    const newArray = ["all", ...new Set(array)];
    return newArray;
  };
  return (
    <div className="btn-container">
      {uniqeCategoy(items).map((item, i) => {
        return (
          <button
            key={i}
            className="filter-btn"
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
