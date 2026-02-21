import React, { useEffect, useState } from 'react'
import { checkHeading, replaceHeadingStars } from '../healper';

const Answers = ({ answer, index }) => {

  const [heading, setHeading] = useState(false);
  const [ans, setAns] = useState(answer)



  useEffect(() => {
    if (checkHeading(answer)) {
      setHeading(true);
      setAns(replaceHeadingStars(answer));
    } else {
      setHeading(false);
      setAns(answer);
    }
    console.log(index, answer, checkHeading(answer));
  }, [answer]);
  ;

  return (
    <div>
      {
        index == 0 ? <span className='font-bold'>{ans}</span>
          : heading ? <span className='text-xl text-zinc-100'>{ans}</span>
            : <span className='pl-5'>{ans}</span>
      }
    </div>
  )
}

export default Answers