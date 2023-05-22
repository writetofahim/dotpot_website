import React from "react";
import drupal from "../../../../assets/img/icon/cms/drupal.png";
import joomla from "../../../../assets/img/icon/cms/joomla.png";
import shopify from "../../../../assets/img/icon/cms/shopify.png";
import wix from "../../../../assets/img/icon/cms/wix.png";
import wordpress from "../../../../assets/img/icon/cms/wordpress.png";

const Cms = () => {
  const data = [
    { icon: wordpress },
    { icon: drupal },
    { icon: joomla },
    { icon: shopify },
    { icon: wix },
  ];
  return (
    <div>
      <div className="flex-1 gap-5 flex flex-wrap justify-center">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-10 md:w-[100px] md:h-[100px] p-2 rounded-full md:rounded-lg shadow flex items-center justify-center hover:border hover:border-purple-500 hover:scale-110 hover:shadow-xl transition-all glassmorphism"
              >
                <img
                  src={item.icon}
                  alt="Cms icon Image"
                  className="h-[50px] w-[50px]"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cms;
