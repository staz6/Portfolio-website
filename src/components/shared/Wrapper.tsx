import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className: string;
  id?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className, id }) => {
  return <div id={id} className={`${className} transition-colors duration-300 ease-in-out px-10 sm:px-16 `}>{children}</div>;
};

export default Wrapper;
