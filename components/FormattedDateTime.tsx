import { cn, formatDateTime } from "@/lib/utils";
import React from "react";

export const FormattedDateTime = ({
  className,
  date,
}: {
  className?: string;
  date: string;
}) => {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(date)}
    </p>
  );
};
export default FormattedDateTime;
