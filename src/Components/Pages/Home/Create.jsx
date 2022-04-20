import React from "react";

function Create() {
 

  return (
    <div className="homePage  ">
      <div className="  bg-gradient-to-r from-sky-500 to-indigo-500 p-10 ">
        <div className=" flex justify-center mb-3">
          <div className="inputan">
            <input
              className=" w-auto  p-4 mr-3"
              type="text"
              placeholder="Masukkan"
              onChange=""
            />
          </div>
          <div className="inputanx">
            <button class="btn bg-teal-700 w-auto p-4 ">Button</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className=" w-96"
            src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default Create;
