"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
 
interface LightDarkToggleProps {
  className?: string;
}
const LightDarkToggle: React.FC<LightDarkToggleProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  //마운트시 쿠키에서 다크 모드상태 불러오기
  useEffect(()=>{
    const savedTheme = Cookies.get("dark-mode");
    if(savedTheme==="true"){
        setIsDarkMode(true);
        document.body.classList.add("dark");
    }
  },[]);
 
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    Cookies.set("dark-mode", newMode.toString(), { expires: 365 }); // 1년 동안 유지
  };
 
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={className}
            onClick={toggleTheme}        
          >
             
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </TooltipTrigger>
          <TooltipContent>
            {isDarkMode ? "밝은 테마" : "어두운 테마"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
 
export default LightDarkToggle;