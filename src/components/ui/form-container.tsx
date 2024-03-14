import { cn } from "@/lib/utils";
import * as React from "react";

export interface FormContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FormContainer({ children, className }: FormContainerProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}
