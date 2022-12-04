import { css } from "@emotion/css";

function is2023(year) {
  if (year === 2023) return true;
  return false;
}

function exchangeTypeToColor(type) {
  if (type.find(is2023)) return true;
  return false;
}

function ShopBadge({ storeInfo }) {
  const colors = [];
  if (!storeInfo) return null;

  if (exchangeTypeToColor(storeInfo.michelin3)) colors.push("red");
  if (exchangeTypeToColor(storeInfo.michelin2)) colors.push("red");
  if (exchangeTypeToColor(storeInfo.michelin1)) colors.push("red");
  if (exchangeTypeToColor(storeInfo.michelinb)) colors.push("red");
  if (exchangeTypeToColor(storeInfo.blue3)) colors.push("blue");
  if (exchangeTypeToColor(storeInfo.blue2)) colors.push("blue");
  if (exchangeTypeToColor(storeInfo.future)) colors.push("#A0A0A0");
  if (exchangeTypeToColor(storeInfo.hundred)) colors.push("#E0E0E0");


  const badgeDiv = colors.map((color, i) => {
    const tmpkey = i + 1;
    return (
      <div key={tmpkey} className={container(color)}>
        23
      </div>
    );
  });

  return badgeDiv;
}

const container = (color) => css`
  width: 25px;
  height: 25px;
  line-height: 25px;

  background: ${color};

  color: white;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
`;

export default ShopBadge;
