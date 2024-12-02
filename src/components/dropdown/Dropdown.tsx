// style
import styled, { css } from "styled-components";

// icon
import { SlArrowDown } from "react-icons/sl";

// hook
import { useDropdown } from "src/hooks/dropdown/useDropdown";
import { useEffect, useState } from "react";

export interface DropdownProps {
  // 드롭다운 안의 내용
  label?: string;
  // 클래스명
  className?: string;
  // 클릭했을 때 호출할 함수
  onClick?: (id: string) => void;
  // 선택 항목 리스트
  items: string[];
  // 아이디
  id: string;
  // 플레이스홀더
  placeholder?: string;
  // 비활성화 여부
  isDisabled: boolean;
}

export const Dropdown = ({
  label,
  onClick,
  className,
  items,
  id,
  placeholder = "선택해주세요",
  isDisabled = false,
}: DropdownProps) => {
  const {
    dropdownRef,
    elWidth,
    isOpen,
    selectedItem,
    onHandleItemClick,
    onHandleDropdownClick,
  } = useDropdown({ label, items, onClick, id, isDisabled });
  const [currentLabel, setCurrentLabel] = useState(label || placeholder);

  useEffect(() => {
    if (selectedItem) {
      setCurrentLabel(selectedItem);
    }
  }, [selectedItem]);

  return (
    <DropdownForm
      id={id}
      ref={dropdownRef}
      onClick={isDisabled ? () => {} : () => onHandleDropdownClick()}
      className={isDisabled ? className : className}
      isOpen={isOpen}
      width={elWidth}
    >
      <DropdownLabel htmlFor={id} className="dropdown__label" isOpen={isOpen}>
        {currentLabel}
        <SlArrowDown style={{ fontSize: "10px" }} />
      </DropdownLabel>

      {isOpen && (
        <DropdownList className="dropdown__list" isOpen={isOpen}>
          {items.map((item, idx) => {
            return (
              <DropdownItem
                className="dropdown__item"
                key={idx}
                onClick={() => onHandleItemClick(item)}
              >
                {item}
              </DropdownItem>
            );
          })}
        </DropdownList>
      )}
    </DropdownForm>
  );
};

const DropdownForm = styled.div<{ isOpen: boolean; width?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${({ width }) => width};
  height: 38px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  border-radius: ${({ isOpen }) => (isOpen ? "4px 4px 0 0 " : "4px")};
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  box-sizing: border-box;

  &.disabled {
    background: #fafafc;
    cursor: not-allowed;

    div {
      color: #98a2b3;
      svg {
        fill: #98a2b3;
      }
    }
  }

  &.focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px #edf4ff;
  }
`;
const DropdownLabel = styled.label<{ isOpen: boolean; placeholder?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 38px;
  padding: 0 12px;
  white-space: nowrap;
  color: ${({ theme, placeholder }) =>
    placeholder === "" ? theme.color.gray300 : theme.color.gray900};
  ${({ isOpen }) =>
    isOpen
      ? css`
          svg {
            transform: rotate(180deg);
          }
        `
      : css``};
`;
const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 100;
  padding: 6px 0;
  margin-left: -1px;
  width: 100%;
  max-width: 100%;

  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  box-sizing: content-box;
  border-radius: ${({ isOpen }) => (isOpen ? "0 0 4px 4px" : "4px")};
`;
const DropdownItem = styled.li`
  padding: 8px 12px;
  text-align: left;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
