import React, { useMemo } from "react";
import { css } from "@emotion/css";

function ShopFilterUnit({ filterLists }) {
  const filterListDiv = useMemo(() => {
    return filterLists.map(({ key, title, lists }) => {
      return (
        <tr className={contentsBox} key={key}>
          <td className={contentsTitle}>{title}</td>
          <td className={contentsListBox}>
            {lists.map((list) => {
              return (
                <button key={list} type="button" className={contentsList}>
                  {list}
                </button>
              );
            })}
          </td>
        </tr>
      );
    });
  }, [filterLists]);

  return (
    <table className={container}>
      <tbody>{filterListDiv}</tbody>
    </table>
  );
}

const container = css`
  width: 100%;
`

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

const contentsList = css`
  padding: 5px 5px 4px;
  color: #777;
  text-align: left;
  margin: 0 10px 9px;
  line-height: 1.5;
  font-size: 14px;
`;

export default ShopFilterUnit;
