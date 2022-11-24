import Head from "next/head";
import { useEffect, useState } from "react";
import CheckBox from "../components/Checkbox";
import Filtering from "../components/Filtering";

// 2022 -> 2023
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
  const [dep, setDep] = useState(0);

  // 필터링 함수
  const makeFilter = (e) => {
    var category = e.target.name;
    var value = e.target.value;
    var checked = e.target.checked;
    if (checked == true) {
      if (filtering[category].indexOf(value) != 1) {
        filtering[category] = [...filtering[category], value];
        setFiltering(filtering);
      }
    }
    if (checked == false) {
      var currentFilter = filtering[category].filter((n) => {
        return n != value;
      });
      filtering[category] = currentFilter;
      setFiltering(filtering);
    }
    setDep(dep + 1);
  };

  const getFilteringDate = (category, result) => {
    var box = [];
    if (filtering[category].length) {
      filtering[category].map((n) => {
        var currentS = Array.from(result).filter((store) => {
          if (store[n].length) {
            // check.json
            // return store[n].indexOf(2022) === 0;
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
  }, [dep]);

  // 확인용 버튼
  function checkAll() {
    console.log(filtering);
    console.log(filteredStores);
    // console.log(filtering.length);
    // console.log(Object.keys(filtering).length);
  }

  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>ivtn.com</title>
      </Head>
      <button onClick={() => checkAll()}>확인용</button>
      <CheckBox onClick={makeFilter} />
      <Filtering filteredStores={filteredStores} />
    </div>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import { checkIsManualRevalidate } from "next/dist/server/api-utils";
export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), "data.json");
  const filePath = path.join(process.cwd(), "check.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
