import React from "react";
import { MapPin } from "lucide-react";

interface SellerCardProps {
  name: string;
  avatar: string;
  location: string;
  onMessage: () => void;
}

const SellerCard: React.FC<SellerCardProps> = ({
  name,
  avatar,
  location,
  onMessage,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm ">
      <div className="flex items-center gap-8">
        <img
          src={avatar}
          alt={name}
          className="w-40 h-40 rounded-full object-cover border border-gray-100"
        />
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-[#404040] tracking-wide mb-1">
            Farmer's Profile
          </h4>
          <p className="text-lg text-[#404040]">{name}</p>
          <div className="flex items-center text-secondary text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
          <button
            onClick={onMessage}
            className="w-full bg-secondary hover:bg-secondary/80 text-grany py-2.5 rounded-md transition-colors"
          >
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
