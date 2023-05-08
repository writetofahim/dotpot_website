/**
    KeyFeatures Component
    This component displays a section containing the key features of the company.
    It renders the @KeyFeaturesSlider component
    returns JSX.Element
 */

import React from "react";
import KeyFeatureSlider from "./KeyFeatureSlider";

const KeyFeatures = () => {
  return (
    <div className="md:p-5 w-full flex flex-col items-center ">
      <div className="w-full mt-10 md:max-w[1400px] lg:max-w-[1400px] p-3 md:p-10 md:px-5 lg:px-0 backdrop-blur-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold block text-center text-textColor-500">
          Our Key Features
        </h1>
      </div>
      <div className="w-full">
        <KeyFeatureSlider />
      </div>
    </div>
  );
};

export default KeyFeatures;
