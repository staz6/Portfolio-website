import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={`${className} transition-colors duration-300 ease-in-out px-10 sm:px-16 `}>{children}</div>;
};

export default Wrapper;
