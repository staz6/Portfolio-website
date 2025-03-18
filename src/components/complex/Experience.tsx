import React from 'react'
import Wrapper from '../shared/Wrapper'
import { useUserDetails } from '../Context/UserDetailsContext'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]
const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          className='text-blue-600 hover:underline'
        >
          {children}
        </a>
      )
    }
  },
  block: {
    h1: ({ children }) => <h1 className='text-2xl font-bold'>{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic'>
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300'>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className='list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300'>
        {children}
      </ol>
    )
  },
  listItem: {
    bullet: ({ children }) => (
      <li className='text-gray-600 dark:text-gray-300'>{children}</li>
    ),
    number: ({ children }) => (
      <li className='text-gray-600 dark:text-gray-300'>{children}</li>
    )
  }
}
const ExperienceCard = ({ experience }) => {
  console.log(experience)
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date='March 2022 - Present'
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.CompanyName}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.CompanyName}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {/* {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))} */}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience: React.FC = () => {
  const { Experience } = useUserDetails()
  console.log(Experience)
  return (
    <div className='py-24 bg-[#050709] w-full'>
      <motion.div variants={textVariant()}>
        <p className='text-center '>What I have done so far</p>
        <h2 className='text-center'>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {Experience.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
