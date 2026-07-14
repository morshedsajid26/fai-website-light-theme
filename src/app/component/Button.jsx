import React from "react";

const Button = ({ buttonText, icon, buttonClass, asDiv = false, onClick }) => {
  const Component = asDiv ? 'div' : 'button';
  
  return (
    <Component onClick={onClick} className="relative inline-flex overflow-hidden rounded-2xl p-[3px] transition-transform hover:scale-105 active:scale-95 group">
      {/* Rotating Background */}
      <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e4e4e7_0%,#e4e4e7_80%,#f97316_100%)]" />

      {/* Inner Button Content */}
      <span
        className={`relative flex h-full w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#E53022] to-[#F8A024] px-8 py-3 text-2xl font-bold font-space-grotesk text-white ${buttonClass || ''}`}
      >
        {buttonText}
        {icon}
      </span>
    </Component>
  );
};

export default Button;
