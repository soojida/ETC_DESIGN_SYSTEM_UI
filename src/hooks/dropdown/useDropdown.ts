// lib
import { useEffect, useRef, useState } from "react";

// props
import { DropdownProps } from "src/components/dropdown/Dropdown";

export const useDropdown = ({ label, items, onClick, id }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [elWidth, setElWidth] = useState<string>();
  const [selectedItem, setSelectedItem] = useState<string | undefined>(label);

  useEffect(() => {
    if (dropdownRef.current) {
      const width = dropdownRef.current.offsetWidth;
      setElWidth(width + "px");
    }
    document.addEventListener("mousedown", onHandlClickOutside);
    return () => {
      document.removeEventListener("mousedown", onHandlClickOutside);
    };
  }, [elWidth]);

  /**
   * @param e 선택한 항목
   * @returns 드롭다운이거나 선택한 항목이외의 영역 클릭시, 드롭다운 목록 닫기
   */
  const onHandlClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  /**
   * @param item 항목
   * @returns 드롭다운 항목 클릭시, 클릭된 항목 저장 및 드롭다운 리스트 닫힘
   */
  const onHandleItemClick = (item: string) => {
    if (items.includes(item)) {
      setSelectedItem(item);
    } else {
      setSelectedItem(undefined);
    }
    setIsOpen(true);
  };

  /**
   * @returns 드롭다운 목록 열기 제어
   */
  const onHandleDropdownClick = () => {
    setIsOpen((prev) => !prev);
    if (onClick) {
      onClick(id);
    }
  };

  return {
    dropdownRef,
    elWidth,
    isOpen,
    selectedItem,
    onHandleItemClick,
    onHandleDropdownClick,
  };
};
