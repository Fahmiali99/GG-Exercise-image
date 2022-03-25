import React from "react";
import data from "../Data/data";

function MainData() {
  let dataJs = data;
  let bigData = [];

  for (let i = 0; i < dataJs.length; i++) {
    if (dataJs[i].rating === "g") {
      bigData.push(dataJs[i]);
    }
  }
  console.log(bigData);

  return (
    <div>
      <h></h>
    </div>
  );
}

export default MainData;
