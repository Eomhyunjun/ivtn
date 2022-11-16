import { css } from "@emotion/css";
import ShopFilterUnit from "./ShopFilterUnit";

function ShopFilter(props) {
  const filterLists = [
    {
      key: 1,
      title: "미쉐린",
      lists: ["3스타", "2스타", "1스타"],
    },
    {
      key: 2,
      title: "블루리본",
      lists: ["3개", "2개"],
    },
    {
      key: 3,
      title: "그 외",
      lists: ["백년가게", "미래유산"],
    },
  ];
  return (
    <div className={container}>
        <ShopFilterUnit filterLists={filterLists} />
    </div>
  );
}

export default ShopFilter;

const container = css`
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 50px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index:2;
`;