import React from 'react'
import Button from '../shared/Button'



type ActionPanelTypes = {
  handleScroll: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sectionId: string
  ) => void;
};
const ActionPanel: React.FC<ActionPanelTypes> = ({ handleScroll }) => {
  return (
    <div
      data-testid='ActionPanel'
      className='flex md:flex-row flex-col items-center gap-5'
    >
      <Button
        description='Hire me'
        className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'
        onClick={(e) => handleScroll(e, 'contact')}
        icon=''
      />
    </div>
  )
}

export default ActionPanel
