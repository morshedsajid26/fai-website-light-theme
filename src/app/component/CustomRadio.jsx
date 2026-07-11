import React from "react";

const CustomRadio = ({ label, value, selectedValue, onChange }) => {
  const isSelected = selectedValue === value;

  return (
    <label className="flex items-center gap-3 cursor-pointer group select-none">
      <div
        className={`w-6 h-6 rounded-full shrink-0 transition-all duration-200 ${
          isSelected ? "bg-white border-[6px] border-[#09090b]" : "bg-zinc-200 border border-zinc-300"
        }`}
      />
      <span className="text-[#09090b] font-poppins text-lg tracking-wide group-hover:text-zinc-600 transition-colors">
        {label}
      </span>
      {/* Hidden native radio for accessibility/form submission */}
      <input
        type="radio"
        name="projectType"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="hidden"
      />
    </label>
  );
};

export default CustomRadio;
