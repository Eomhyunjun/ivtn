import { css } from "@emotion/css";
import ShopFilterUnit from "./ShopFilterUnit";

function ShopFilter(props) {
  const filterLists = [
    {
      key: 1,
      title: "미쉐린",
      lists: ["3스타", "2스타", "1스타", "빕구르밍"],
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
    {
      key: 4,
      title: "지역구",
      lists: [
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
      ],
    },
    { key: 5, title: "장르", lists: ["한식", "중식", "일식", "양식"] },
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
  margin-bottom: 50px;
  background-color: white;
  overflow: hidden;
`;
