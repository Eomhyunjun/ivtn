import { css } from "@emotion/css";
import ShopListCard from "./ShopListCard/ShopListCard";

function ShopList(props) {
  const filteredStores = props.filteredStores;
  const shopListJSX = filteredStores.map((storeInfo) => {
    return <ShopListCard key={storeInfo.id} storeInfo={storeInfo} />;
  });
  return <div className={container}>{shopListJSX}</div>;
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
