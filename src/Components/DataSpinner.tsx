import React from "react";
import LoadingSpiner from "./LoadingSpiner";

type DataSpinnerProps = {
  loading?: boolean;
  empty?: boolean;
  emptyText?: string;
  className?: string;
};

const DataSpinner: React.FC<DataSpinnerProps> = ({
  loading,
  empty,
  emptyText,
  className,
}) => {
  if (loading) return <LoadingSpiner size="big" />;
  return empty ? (
    <div className={className || "data-loader-container"}>
      <h1 className="empty-text">{emptyText}</h1>
    </div>
  ) : null;
};

export default DataSpinner;
