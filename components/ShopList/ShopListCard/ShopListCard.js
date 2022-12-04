import { css } from "@emotion/css";
import ShopBadge from "./ShopBadge";
import logo from '../../../assets/Logo.png'

function ShopListCard({ storeInfo }) {
  return (
    <a className={container} href={storeInfo.map}>
      <div className={contentsBox}>
        <div className={shopImg(storeInfo.image)}>
          <div className={aboutStars}>
            <ShopBadge storeInfo={storeInfo} />
          </div>
        </div>

        <div className={shopContents}>
          <div className={shopTitle}>{storeInfo.title}</div>
          <div className={shopAddr}>{storeInfo.district} - {storeInfo.genre}</div>
        </div>
      </div>
    </a>
  );
}

export default ShopListCard;

const container = css`
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #fefefe;
`;

const contentsBox = css`
  width: 100%;
  margin: 0 auto;
`;

const shopContents = css``;

const shopImg = (imgUrl) => css`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 15px auto;
  background-image: url(${
    imgUrl ??
    logo.src
  });
  background-size: cover;
  background-position: center center;
`;

const aboutStars = css`
  position: absolute;
  bottom: 0px;

  display: flex;
  width: 100%;
`;

const shopTitle = css`
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  margin-bottom: 7px;
`;

const shopAddr = css`
  padding-right: 10%;
  font-size: 12px;
  line-height: 14px;
  color: #5d5d5d;
`;

const blueblue = css`
  width: 20px;
  height: 20px;
  font-size: 15px;
  background-color: #0c80f1d1;
  border-radius: 20%;
  color: #fffcfcbf;
  margin: 3px;
  line-height: 20px;
  text-align: center;
`;

const redred = css`
  width: 20px;
  height: 20px;
  font-size: 15px;
  background-color: red;
  border-radius: 20%;
  color: #fffcfcbf;
  margin: 3px;
  line-height: 20px;
  text-align: center;
`;
