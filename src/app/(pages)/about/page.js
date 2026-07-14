import Banner from "@/app/component/about/Banner";
import GlobalMap from "@/app/component/about/GlobalMap";
import Management from "@/app/component/about/Management";
import Team from "@/app/component/about/Team";
import OurMission from "@/app/component/about/OurMission";
import Stats from "@/app/component/about/Stats";
import WhyChooseUs from "@/app/component/about/WhyChooseUs";

import React from "react";

const page = () => {
  return (
    <div className="">
      {/* <Banner /> */}
      <Stats />
      <GlobalMap />
      <OurMission />
      <Management />
      <Team />
      {/* <WhyChooseUs /> */}
    </div>
  );
};

export default page;
