import Banner from "@/app/component/about/Banner";
import GlobalMap from "@/app/component/about/GlobalMap";
import Management from "@/app/component/about/Management";
import OurMission from "@/app/component/about/OurMission";
import Stats from "@/app/component/about/Stats";
import WhyChooseUs from "@/app/component/about/WhyChooseUs";

import React from "react";

const page = () => {
  return (
    <div className="pb-4">
      <Banner />
      <Management />
      <OurMission />
      <Stats />
      <GlobalMap />
      <WhyChooseUs />
    </div>
  );
};

export default page;
