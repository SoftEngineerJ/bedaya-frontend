"use client";

import { useState } from "react";
import {
  Home,
  GraduationCap,
  BookOpen,
  Plane,
  CheckCircle,
  Users,
  Star,
} from "lucide-react";
import UiButton from "./UiButton";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  metalType?: "gold";
}

const ServiceCard = ({
  title,
  description,
  icon,
  features,
  metalType = "gold",
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Map icon names to Lucide components
  const getIconComponent = (iconName: string) => {
    const icons = {
      home: Home,
      graduation: GraduationCap,
      book: BookOpen,
      plane: Plane,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Home;
    return IconComponent;
  };

  const IconComponent = getIconComponent(icon);

  const getMetallicGradient = (metal: string) => {
    const metals = {
      gold: "from-blue-400 via-blue-500 to-blue-600",
      silver: "from-gray-300 via-gray-400 to-gray-500",
      copper: "from-orange-400 via-red-500 to-red-600",
      bronze: "from-amber-600 via-orange-700 to-red-800",
    };
    return metals[metal as keyof typeof metals] || metals.gold;
  };

  return (
    <div className="relative group h-full">
      {/* Enhanced card with gradient border and diagonal elements */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-border p-[2px] h-full flex flex-col">
        {/* Inner card with actual background */}
        <div className="bg-gradient-to-br from-sky-950/95 via-sky-900/90 to-sky-900/85 backdrop-blur-lg rounded-2xl h-full flex flex-col relative overflow-hidden border border-slate-700/60">
          {/* Diagonal lines background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-200/20 to-transparent transform rotate-45 scale-150"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-cyan-200/20 to-transparent transform -rotate-45 scale-150"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-blue-200/20 to-transparent transform rotate-45 scale-150"></div>
          </div>

          {/* Diagonal tube shapes */}
          <div className="absolute top-10 left-0 w-32 h-2 bg-gradient-to-r from-blue-400/30 to-transparent transform rotate-45 origin-left"></div>
          <div className="absolute top-20 right-0 w-24 h-1.5 bg-gradient-to-l from-cyan-400/25 to-transparent transform -rotate-45 origin-right"></div>
          <div className="absolute bottom-16 left-0 w-28 h-1.5 bg-gradient-to-r from-blue-400/25 to-transparent transform -rotate-45 origin-left"></div>
          <div className="absolute top-1/2 right-0 w-20 h-2 bg-gradient-to-l from-blue-500/20 to-transparent transform rotate-45 origin-right"></div>
          <div className="absolute bottom-1/3 left-0 w-16 h-1 bg-gradient-to-r from-cyan-500/20 to-transparent transform -rotate-45 origin-left"></div>

          {/* Curved diagonal tubes */}
          <div className="absolute top-8 right-8 w-24 h-1 bg-gradient-to-r from-blue-300/30 to-transparent rounded-full transform rotate-12"></div>
          <div className="absolute bottom-12 left-6 w-20 h-1 bg-gradient-to-r from-cyan-300/25 to-transparent rounded-full transform -rotate-12"></div>
          <div className="absolute top-1/3 right-12 w-18 h-1 bg-gradient-to-r from-blue-300/25 to-transparent rounded-full transform rotate-45"></div>

          {/* Header section with gradient background */}
          <div className="relative bg-gradient-to-br from-sky-900/70 to-sky-800/50 backdrop-blur-lg p-8 text-center z-10 border-b border-slate-600/40">
            {/* Enhanced icon container */}
            <div className="relative mb-6 inline-flex">
              <div className="relative w-20 h-20 bg-transparent border-2 border-slate-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-blue-400 group-hover:scale-110">
                <IconComponent className="w-10 h-10 text-slate-300 group-hover:text-blue-400 transition-colors duration-500" />
              </div>
            </div>
          </div>

          {/* Content section with improved spacing and flex grow */}
          <div className="relative p-8 flex flex-col flex-grow z-10">
            <h3 className="text-2xl font-bold text-white mb-4 text-center transition-all duration-300 group-hover:text-blue-400">
              {title}
            </h3>
            <p className="text-slate-300 text-center mb-8 leading-relaxed text-lg">
              {description}
            </p>

            {features && features.length > 0 && (
              <ul className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-slate-300 transition-all duration-300 group-hover:text-white"
                  >
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </span>
                    <span className="text-slate-200 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <UiButton
              href="/register"
              className="w-full mt-auto cursor-pointer"
              size="lg"
            >
              اختر هذه الخدمة
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
