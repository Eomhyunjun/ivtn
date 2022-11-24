import React, { useMemo, useState } from "react";
import { css } from "@emotion/css";

function ShopFilterUnit({ filterLists }) {
  const [selectedButton, setSelectedButton] = useState(null);

  function handleSelectedButton(list) {
    if (list !== selectedButton) setSelectedButton(list);
    else setSelectedButton(null);
  }

  const filterListDiv = useMemo(() => {
    return filterLists.map(({ key, title, lists }) => {
      return (
        <tr className={contentsBox} key={key}>
          <td className={contentsTitle}>{title}</td>
          <td className={contentsListBox}>
            {lists.map((list) => {
              return (
                <button
                  key={list}
                  type="button"
                  onClick={() => handleSelectedButton(list)}
                  className={contentsList(selectedButton === list)}
                >
                  {list}
                </button>
              );
            })}
          </td>
        </tr>
      );
    });
  }, [filterLists, selectedButton]);

  return (
    <>
      <table className={container}>
        <tbody>{filterListDiv}</tbody>
      </table>
      {selectedButton && (
        <div className={absoluteBox}>
          <div className={selectedListBox}>
            <button className={selectedList}>{selectedButton}</button>
          </div>
        </div>
      )}
    </>
  );
}

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

export default ShopFilterUnit;
