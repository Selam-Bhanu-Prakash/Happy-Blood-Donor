import React from "react";
import "tailwindcss/tailwind.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Image } from "antd";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <Header />
      <div className="border-2 border-red-500 flex">
        <div className="border-2 border-green-500 w-8/12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-500">
          Happy Donors Smile For Saves Lives, Just Ask
          </h1>
        </div>

        <div className="border-2 border-blue-500 w-4/12">
          <Image src="./HomeSide1.png" preview={false} />
        </div>
      </div>
    </div>
  );
};

export default App;
