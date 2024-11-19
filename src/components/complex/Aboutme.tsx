import React from "react";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import { PortableText } from '@portabletext/react';

const Aboutme: React.FC = () => {
  const { detailedDescription, profileImage } = useUserDetails()
  return (
    <Wrapper className="gray-50 dark:bg-gray-900 py-20 ">
      <h1
        data-testid="SectionTitle"
        className="text-center mb-10 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
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
            src={profileImage.asset.url}
            alt=""
          />
        </div>
        <div
          data-testid="Description"
          className="col-span-12 lg:col-span-6 font-inter "
        >
          <h1 className="text-gray-900 dark:text-gray-50 mb-5 font-semibold text-3xl">
            Curious about me? Here you have it:
          </h1>
          <p className="dark:text-gray-300 text-gray-600 mb-5">

            <PortableText
              value={detailedDescription}
              components={{
                types: {

                  block: ({ value }) => {
                    const Tag = value.style || 'p';
                    return <Tag>{value.children.map((child: any) => child.text).join(' ')}
                      <br />

                    </Tag>;
                  },
                },
              }}
            />
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Aboutme;
