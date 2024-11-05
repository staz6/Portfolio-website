import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="px-10 sm:px-16 py-5">{children}</div>;
};

export default Wrapper;
