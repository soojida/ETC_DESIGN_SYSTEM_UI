// lib
import { useState } from "react";

export const useInput = ({ min, max, onChange }: any) => {
  const [dynamicValue, setDynamicValue] = useState("");
  /**
   * @param e 입력값
   * @returns 입력값의 길이를 판단하여 min, max 입력 제어
   */
  const onHandleInputChange = (e: any) => {
    let newValue = e.target.value;

    // min 제한
    if (min && newValue.length < min) {
      return;
    }
    // max 제한
    if (max && newValue.length >= max) {
      newValue = newValue.slice(0, max);
    }

    setDynamicValue(newValue);
    onChange && onChange(e);
  };

  return { dynamicValue, onHandleInputChange };
};
