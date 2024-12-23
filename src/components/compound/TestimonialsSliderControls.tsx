import React, { RefObject } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Button from "../shared/Button";

interface TestimonialsSliderControlsProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

const TestimonialsSliderControls: React.FC<TestimonialsSliderControlsProps> = ({
  prevRef,
  nextRef,
}) => (
  <div className="flex ">
    <Button
      className="p-3 hover:bg-button2 hover:scale-105 transition-all duration-300 dark:hover:text-gray-50 dark:text-gray-300 hover:text-gray-900 text-gray-600 text-text2 bg-secondary1 rounded-full"
      onClick={() => prevRef.current?.click()}
      icon={<IoMdArrowBack size={28} />}
      ref={prevRef}
      description=""
    />
    <Button
      className="p-3 hover:bg-button2 hover:scale-105 transition-all duration-300 dark:hover:text-gray-50 dark:text-gray-300 hover:text-gray-900 text-gray-600 text-text2 bg-secondary1 rounded-full"
      onClick={() => nextRef.current?.click()}
      icon={<IoMdArrowForward size={28} />}
      ref={nextRef}
      description=""
    />
  </div>
);

export default TestimonialsSliderControls;
