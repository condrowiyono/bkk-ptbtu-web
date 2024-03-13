import * as React from "react";

export interface FormContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FormContainer({ children }: FormContainerProps) {
  return <div className="space-y-2">{children}</div>;
}
