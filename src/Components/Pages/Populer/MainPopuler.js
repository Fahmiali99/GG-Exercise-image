import React from "react";
import data from "../Data/data";

function MainPopuler() {
  // const dataItems = data;
  // console.log(dataItems);

  return (
    <div>
      {data.map((dataItems) => (
        <div key={dataItems.id}>
          <div className=" flex justify-center p-3 ">
            <img src={dataItems.url} alt="" width="30%" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPopuler;
