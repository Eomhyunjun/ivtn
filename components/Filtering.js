import React, { useState } from "react";
// import user from "../user.json";

const Filtering = (props) => {
  const filteredStores = props.filteredStores;

  return (
    <>
      <div>
        {filteredStores?.map((store) => (
          <div
            key={store.id}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <h2>{store.title}</h2>
            <p>{store.district}</p>
            <p>{store.genre}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filtering;
