import React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantityPickerProps {
  value: number;
  onChange: (value: number) => void;
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({ value, onChange }) => {
  const decrease = () => {
    if (value > 1) onChange(value - 1);
  };
  const increase = () => onChange(value + 1);

  return (
    <div className="flex items-center border bg-white  rounded-md">
      <button
        onClick={decrease}
        className="px-3 py-2 text-[#404040]  border-r border-[#404040]"
      >
        <Minus size={16} />
      </button>
      <div className="px-4 py-2 font-medium text-[#404040]  min-w-12 text-center">
        {value}
      </div>
      <button
        onClick={increase}
        className="px-3 py-2 text-[#404040]  border-l border-[#404040] "
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantityPicker;
