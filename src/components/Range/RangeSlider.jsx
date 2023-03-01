import React, { useState } from 'react';

function RangeSlider() {
  const [sliderValue, setSliderValue] = useState(1000);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='w-full'>
      <span>Project Budget: {sliderValue}$</span>
      <input type="range" min="0" max="10000" value={sliderValue} onChange={handleSliderChange} className="w-full mb-5 bg-primary-400"/>
    </div>
  );
}

export default RangeSlider;
