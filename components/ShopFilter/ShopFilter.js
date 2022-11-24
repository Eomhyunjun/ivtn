import { css } from "@emotion/css";
import React, { useState } from "react";
import lists from "../../category.json";

const ShopFilter = (props) => {
  const makeFilter = props.onClick;
  const renderCategory = (titleK, titleE, lists) => (
    <tr className={contentsBox} key={titleE}>
      <td className={contentsTitle}>{titleK}</td>
      <td className={contentsListBox}>
        {lists.map((list) => {
          return (
            <div key={list.id}>
              <input
                type="checkbox"
                id={list.id}
                name={titleE}
                value={list.id}
                onClick={makeFilter}
              />
              <label htmlFor={list.id}>{list.value}</label>
            </div>
          );
        })}
      </td>
    </tr>
  );

  return (
    <>
      <table className={container}>
        <tbody>
          {renderCategory("미쉐린", "michelin", lists["michelin"])}
          {renderCategory("블루리본", "blue", lists["blue"])}
          {renderCategory("백년유산", "hundred", lists["hundred"])}
          {renderCategory("미래유산", "future", lists["future"])}
          {renderCategory("지역구", "district", lists["district"])}
          {renderCategory("장르", "genre", lists["genre"])}
        </tbody>
      </table>
    </>
  );
};

export default ShopFilter;

const container = css`
  width: 100%;
`;

const contentsBox = css`
  margin: 10px;
`;

const contentsTitle = css`
  width: 170px;
  padding: 15px 15px 14px 14px;
  text-align: left;
  font-size: 14px;
  background-color: #f5f5f5;
`;

const contentsListBox = css`
  width: calc(100% - 170px);
  height: 50px;
  padding: 10px 5px 0 5px;
  border: 1px solid #f1f1f1;
`;

const contentsList = (isSelected) => css`
  padding: 5px 5px 4px;
  color: ${isSelected ? "black" : "#777"};
  ${isSelected && "font-weight: 700;"}
  text-align: left;
  margin: 0 10px 9px;
  line-height: 1.5;
  font-size: 14px;
`;

const absoluteBox = css`
  position: absolute;
  width: 100%;
  height: 1000px;
`;

const selectedListBox = css`
  position: sticky;
  top: 0;

  width: 100%;
  height: 50px;
  padding: 0 7px 10px 7px;
  background-color: white;
  border-bottom: 1px solid #f1f1f1;
  z-index: 2;
`;

const selectedList = css`
  margin: 10px 2px 0 2px;
  padding: 5px 23px 4px 5px;

  color: #ea1111;
  font-size: 14px;
  text-align: left;
  font-weight: 700;
`;
