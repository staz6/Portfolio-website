import React from "react";
import image from "../../images/PortfolioPic.png";
import Wrapper from "../shared/Wrapper";

const Aboutme = () => {
  return (
    <div className="bg-gray-50 h-fit py-16 mb-10">
      <Wrapper>
        <h1
          data-testid="SectionTitle"
          className="text-center mb-10 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl bg-gray-200 text-gray-600"
        >
          About me
        </h1>
        <div className="grid items-center  grid-cols-12  ">
          <div
            data-testid="PortfolioPic"
            className="col-span-12 lg:col-span-6 mb-10 lg:mb-0 mt-10 flex justify-center lg:justify-start relative"
          >
            <div className="bg-gray-200 h-[22rem]  z-0 absolute sm:h-[30rem] w-[98%]  sm:w-[26rem] lg:w-[22rem] xl:w-[25rem] "></div>
            <img
              className=" h-[22rem] sm:h-[30rem] relative bottom-5 sm:bottom-8 lg:left-8 z-10 w-[85%] sm:w-[22rem] xl:w-[25rem]"
              src={image}
              alt=""
            />
          </div>
          <div
            data-testid="Description"
            className="col-span-12 lg:col-span-6 font-inter "
          >
            <h1 className="text-gray-900 mb-5 font-semibold text-3xl">
              Curious about me? Here you have it:
            </h1>
            <p className="text-gray-600 mb-5">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-gray-600 mb-5">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-gray-600 mb-5">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-gray-600 mb-5">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Aboutme;
