import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SkillCard from '../SkillCard'

describe('Testing rendering of ui', () => {
  it('Renders SkillCard Succesfully', () => {
    render(
      <SkillCard
        name='test'
        excellency={90}
        image={{ asset: { url: '' } }}
        index={2}
      />
    )
    expect(screen.getByTestId('SkillCard')).toBeInTheDocument()
  })
})
