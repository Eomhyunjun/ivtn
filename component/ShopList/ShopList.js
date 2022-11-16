import { css } from "@emotion/css";
import ShopListCard from "./ShopListCard/ShopListCard";

function ShopList(props) {
  return (
    <div className={container}>
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
      <ShopListCard />
    </div>
  );
}

export default ShopList;


const container = css`
  display: flex;
  margin: 0 auto;
  width: 940px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
`;