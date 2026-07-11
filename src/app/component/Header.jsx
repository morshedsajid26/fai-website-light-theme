import React from "react";

const Header = ({ titleText, subtitleText, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-4xl font-space-grotesk font-medium inline-block bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent">
        {titleText}
      </h3>
      <p className="text-[#09090b] mt-2 font-popins text-xl lg:w-[1050px] mx-auto ">
        {subtitleText}
      </p>
    </div>
  );
};

export default Header;
