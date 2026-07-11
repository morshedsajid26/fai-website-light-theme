import React from "react";

const InputField = ({
  label,
  className,
  placeholder,
  inputClass,
  labelClass,
  value,
  onChange,
  type,
}) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      <label
        className={`font-space-grotesk font-bold text-lg text-[#09090b]  ${labelClass}`}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`bg-white border border-zinc-300 outline-none p-4 text-[#09090b] placeholder:text-zinc-500 font-poppins rounded-2xl ${inputClass}`}
      />
    </div>
  );
};

export default InputField;
