import React from 'react'
import { parseAnswerLine } from '../healper'

const Answers = ({ answer, isQuestion = false }) => {
  if (isQuestion) {
    return (
      <div>
        <span className='font-bold'>{answer}</span>
      </div>
    )
  }

  const parsed = parseAnswerLine(answer)

  if (parsed.type === 'sectionHeading') {
    return (
      <div>
        <span className='text-xl font-semibold text-zinc-100'>{parsed.text}</span>
      </div>
    )
  }

  if (parsed.type === 'boldLabel') {
    return (
      <div className='pl-2'>
        <span className='font-semibold'>{parsed.label}:</span>{' '}
        <span>{parsed.content}</span>
      </div>
    )
  }

  if (parsed.type === 'heading') {
    return (
      <div>
        <span className='text-lg text-zinc-100'>{parsed.text}</span>
      </div>
    )
  }

  return <div><span className='pl-5'>{parsed.text}</span></div>
}

export default Answers
