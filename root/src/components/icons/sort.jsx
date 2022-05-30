import React from "react";

export const Sort = ({ type }) => {
  return (
    <div style={{ display: "grid" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path
          d="M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83Z"
          fill={type === "asc" ? "#069697" : "#C6CACC"}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path
          d="M1.42001 0L4.59001 3.17L7.76001 0L9.18001 1.41L4.59001 6L0.0100098 1.41L1.42001 0Z"
          fill={type === "desc" ? "#069697" : "#C6CACC"}
        />
      </svg>
    </div>
  );
};
