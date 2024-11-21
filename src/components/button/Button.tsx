import { ButtonStyle } from "./Button.styles";

export interface ButtonProps {
  // 버튼 안의 내용
  children?: React.ReactNode;
  // 클릭했을 때 호출할 함수
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // 버튼의 색상 설정
  variant?: "primary" | "secondary" | "tertiary" | "primary-outline";
  // 버튼의 크기 설정
  size?: "xsmall" | "small" | "medium" | "large";
  // 버튼의 모양 설정
  shape?: "square" | "round" | "round50";
  // 아이콘의 위치 설정 (텍스트와 함께 쓰일 경우 사용 권장)
  position?: "left" | "right";
  // 버튼 활성화 여부
  disabled?: boolean;
  // 아이콘
  icon?: React.ReactNode;
  // 클래스명
  className?: string;
}

/**
 * @desc 버튼 컴포넌트
 * @returns {JSX.Element} 버튼 컴포넌트 반환
 */
const Button = ({
  children,
  onClick,
  variant,
  size = "medium",
  shape = "round",
  position = "left",
  disabled,
  icon,
  className,
}: ButtonProps): JSX.Element => (
  <ButtonStyle
    className={className}
    variant={variant}
    size={size}
    shape={shape}
    position={position}
    disabled={disabled}
    onClick={onClick}
  >
    {icon}
    {children}
  </ButtonStyle>
);

export default Button;
