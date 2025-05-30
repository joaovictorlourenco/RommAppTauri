import { cn } from "../../../shared/utils/cn";
import { ButtonProps } from "./Button.types";

const buttonVariants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

type Variant = keyof typeof buttonVariants;

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps & { variant?: Variant }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        buttonVariants[variant as Variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
