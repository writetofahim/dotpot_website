/**
This file has two React components: ProcessCard and ProcessWeFollow.

ProcessCard is a reusable component that renders a card with an image, title, and description. It takes in props as a parameter and uses them to render the card content.

ProcessWeFollow is a component that displays the process the company follows, using a combination of text and images. 
It uses processLg and processSm images to display the process in diffrent breakpoints, and also has a commented-out block of code that can be used to render the ProcessCard components with data from processWeFollowData.

Tailwind css is used for styling
 */

import React from 'react';
import ProcessLg from './ProcessLg';
import ProcessSm from './ProcessSm';

const ProcessWeFollow = () => {
  return (
    <div className="processWeFollow w-full overflow-hidden pt-10 pb-40 md:flex md:flex-col md:justify-center bg-primary-100/50 backdrop-blur-sm">
      <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
        {/* Process heading */}
        <h2 className="text-3xl md:text-5xl text-center font-bold w-full mb-5 text-textColor-500">
          Process We Follow
        </h2>

        {/* Process for large device */}
        <div className="hidden lg:block">
          <ProcessLg />
        </div>

        {/* process for small device */}
        <div className="md:block lg:hidden">
          <ProcessSm />
        </div>
      </div>
    </div>
  );
};

export default ProcessWeFollow;
