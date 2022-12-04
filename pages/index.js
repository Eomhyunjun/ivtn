import Head from "next/head";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import ShopList from "../components/ShopList/ShopList";
import ShopFilter from "../components/ShopFilter/ShopFilter";

export default function Home(props) {
  const stores = props.stores;
  const [filteredStores, setFilteredStores] = useState([]);
  const [filtering, setFiltering] = useState({
    michelin: [],
    blue: [],
    hundred: [],
    future: [],
    district: [],
    genre: [],
  });
  const categoryDate = ["michelin", "blue", "hundred", "future"];
  const categoryKind = ["district", "genre"];

  // 필터링 함수
  const makeFilter = (e) => {
    var category = e.target.name; // michelin
    var value = e.target.value; // 3스타
    var checked = e.target.checked;
    var result;
    if (checked == true) {
      if (filtering[category].indexOf(value) != 1) {
        filtering[category] = [...filtering[category], value];
        result = { ...filtering, filtering };
      }
    }
    if (checked == false) {
      var currentFilter = filtering[category].filter((n) => {
        return n != value;
      });
      filtering[category] = currentFilter;
      result = { ...filtering, filtering };
    }
    setFiltering(result);
  };

  const getFilteringDate = (category, result) => {
    var box = [];
    if (filtering[category].length) {
      filtering[category].map((n) => {
        var currentS = Array.from(result).filter((store) => {
          if (store[n].length) {
            return store[n].indexOf(2023) === 0;
          }
        });
        if (currentS.length) {
          currentS.map((store) => {
            box = [...box, store];
          });
        }
      });
      result = box;
    }
    return result;
  };

  const getFilteringKind = (category, result) => {
    var box = [];
    if (filtering[category].length) {
      filtering[category].map((n) => {
        var currentS = Array.from(result).filter((store) => {
          return store[category] === n;
        });
        if (currentS.length) {
          currentS.map((store) => {
            box = [...box, store];
          });
        }
      });
      result = box;
    }
    return result;
  };

  // 필터링에 따른 데이터 변화
  useEffect(() => {
    if (
      !filtering["michelin"].length &&
      !filtering["blue"].length &&
      !filtering["hundred"].length &&
      !filtering["future"].length &&
      !filtering["district"].length &&
      !filtering["genre"].length
    ) {
      console.log("check-no");
      setFilteredStores(stores);
    } else {
      console.log("filtering-start");
      var result = stores;
      categoryDate.map((category) => {
        result = getFilteringDate(category, result);
      });
      categoryKind.map((category) => {
        result = getFilteringKind(category, result);
      });
      setFilteredStores(result);
    }
  }, [filtering]);

  return (
    <div className={container}>
      <Head>
        <title>IVTN</title>
      </Head>
      <div className={header}>
        <p className={title}>IVTN</p>
      </div>
      <div className={bodyBox}>
        <ShopFilter onClick={makeFilter} />
        <ShopList filteredStores={filteredStores} />
      </div>
    </div>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import { checkIsManualRevalidate } from "next/dist/server/api-utils";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

const container = css`
  height: 100%;
  background-color: white;
  color: black;
`;

const header = css`
  height: 65px;
  font-family: "campton", "Apple SD Gothic Neo", NanumBarunGothic,
    "나눔바른고딕", Malgun Gothic, "맑은 고딕", dotum, sans-serif;
  color: black;
  padding: 21px 10px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
`;

const title = css`
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  font-weight: 800;
`;

const bodyBox = css`
  margin: 0 auto;
  position: relative;
`;
