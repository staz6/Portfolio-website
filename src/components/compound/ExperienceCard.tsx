import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experience } from '../Context/UserDetailsContext'

export const ExperienceCard: React.FC<experience> = ({
  CompanyName,
  PositionName,
  date,
  points,
  icon,
  index
}) => {
  return (
    <div data-testid='experience-card' className='mt-9'>
      <VerticalTimelineElement
        position={index % 2 === 0 ? 'left' : 'right'}
        contentStyle={{
          background: '#1d1836',
          color: '#fff'
        }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={date}
        iconStyle={{ background: 'white' }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={icon.asset.url}
              alt={CompanyName}
              className=' object-contain rounded-full'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{PositionName}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {CompanyName}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  )
}
