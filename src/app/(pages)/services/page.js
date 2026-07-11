import VoiceofPartners from "@/app/component/home/VoiceofPartners";
import Banner from "@/app/component/services/Banner";
import WhatWeDo from "@/app/component/services/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div className="pb-4">
      <Banner />
      <WhatWeDo/>
      <VoiceofPartners />
    </div>
  );
};

export default page;
