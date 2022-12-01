import React, { useState } from "react";
import kinds from "../category.json";

const CheckBox = (props) => {
  const makeFilter = props.onClick;

  const renderCategory = (category, categoryKind) => (
  categoryKind.map((group) => (
    <div key={group.kind}>
      <input
        type="checkbox"
        id={group.kind}
        name={category}
        value={group.kind}
        onClick={makeFilter}
      />
      <label htmlFor={group.kind}>{group.value}</label>
    </div>
  ))
  );

  return (
    <>
      <div>미쉐린</div>
      {renderCategory("michelin", kinds["michelin"])}
      <div>블루리본</div>
      {renderCategory("blue", kinds["blue"])}
      <div>백년가게</div>
      {renderCategory("hundred", kinds["hundred"])}
      <div>미래유산</div>
      {renderCategory("future", kinds["future"])}
      <div>지역구</div>
      {renderCategory("district", kinds["district"])}
      <div>장르</div>
      {renderCategory("genre", kinds["genre"])}
    </>
  );
};

export default CheckBox;
