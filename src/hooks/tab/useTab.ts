// lib
import { useState } from "react";

export const useTab = ({ isActive = 0, onClick }: any) => {
  const [activeTab, setActiveTab] = useState(isActive);

  const onHandleTabClick = (idx: number) => {
    setActiveTab(idx);
    if (onClick) {
      onClick();
    }
  };
  return { activeTab, onHandleTabClick };
};
