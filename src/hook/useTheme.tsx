"use client"
import { useContext } from "react";
import { WindowContext } from "@/context/window";
import { lightColor, darkColor } from "@/styles/color";

function useTheme() {
  const { windowTheme } = useContext(WindowContext);
  return windowTheme ? lightColor : darkColor
}

export {
  useTheme
}