import React from "react";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => <blockquote >{children}</blockquote>,

  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
}


const Aboutme: React.FC = () => {
  const { detailedDescription, profileImage } = useUserDetails()
  console.log(detailedDescription)
  const sampleData = [
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'Hello, this is a test.' },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        { _type: 'span', text: 'Subheading Example' },
      ],
    },
    {
      _type: 'list',
      listItem: 'bullet',
      children: [
        { _type: 'span', text: 'Bullet Point 1' },
        { _type: 'span', text: 'Bullet Point 2' },
      ],
    },
  ];

  return (
    <Wrapper id="about"  className="gray-50 dark:bg-gray-900 bg-gray-50  py-20 ">
      <h1
        data-testid="SectionTitle"
        className="text-center  mb-10 w-28 m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
      >
        About me
      </h1>
      <div className="grid items-center  grid-cols-12  ">
        <div
          data-testid="PortfolioPic"
          className="col-span-12 lg:col-span-6 mb-10 lg:mb-0 mt-10 flex justify-center lg:justify-start relative"
        >
          <div className="bg-gray-200 max-w-80 sm:max-w-full  h-[22rem]  z-0 absolute sm:h-[30rem] w-[98%]  sm:w-[26rem] lg:w-[22rem] xl:w-[25rem] "></div>
          <img
            className=" h-[22rem] sm:h-[30rem] max-w-72 sm:max-w-full relative bottom-5 sm:bottom-8 lg:left-8 z-10 w-[85%] sm:w-[22rem] xl:w-[25rem]"
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
              components={components}
            />
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Aboutme;
