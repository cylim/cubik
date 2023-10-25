import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.JSX.Element;
  leftIcon?: React.JSX.Element;
  leftElement?: React.JSX.Element;
  rightElement?: React.JSX.Element;
  helperText?: React.JSX.Element;
  labelText?: string;
}

// type Props = InputProps & React.HTMLProps<HTMLDivElement>;

const Input: React.FC<InputProps> = ({ labelText, type, className, helperText}) => {
  return (
    <div className="flex flex-col gap-1">
      {labelText && (
        <label className="text-black font-normal text-base">
          {labelText}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
      {helperText}
    </div>
  );
}
Input.displayName = "Input";

export { Input };