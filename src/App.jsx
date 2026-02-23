import { useState } from 'react'
import './App.css'
import { API_BASE_URL } from './constants'
import axios from 'axios'
import Answers from './components/Answers'


function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState([])
  const [prev, setprev] = useState([])

  const payload = {
    question: question,
  }

  const getAnswer = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/chat`, payload)
      let data = response?.data?.answer ?? '';
      data = data.split(/\r?\n/).map(item => item.trim()).filter(Boolean).map(line => line.replace(/^\d+\.\s+/, '')) // "1. " remove
        .map(line => line.replace(/^\*\s+/, ''));   // bullet "* " remove only at start
      setAnswer(prev => [...prev, { type: "q", text: question }, { type: "a", text: data }])
      setprev(prev)
    } catch (error) {
      console.error('Error fetching answer:', error)
      alert('Failed to get answer. Make sure the server is running on port 3001.')
    }
  }

  console.log(answer);

  return (
    <div className='grid grid-cols-5 h-screen text-center text-zinc-300'>
      <div className='col-span-1 h-full bg-zinc-800'>

      </div>

      <div className='col-span-4 flex flex-col justify-between p-10'>

        <div className='container h-[80%] w-full'>
          <div>
            <h1>Hi Rishika</h1>
            <h3>How can i assist you today</h3>
          </div>
          <div className='h-full w-full p-5 text-left overflow-x-hidden'>
            <ul>
              {answer.map((item, index) => {
                if (item.type === "q") {
                  return <li key={index} className='text-right'><Answers answer={item.text} index={0} /></li>
                } else {
                  return item.text.map((ans, index2) => (
                    <li key={`${index}-${index2}`}><Answers answer={ans} index={index2} className="text-left mr-[25%]" /></li>
                  ))
                }
              })}
              {/* {answer.map((item, index) => (
                
                
                <li key={index} ><Answers answer={item} index={index} /></li>

              ))} */}
            </ul>
          </div>
        </div>

        <div className='input bg-zinc-800 w-1/2 h-16 items-center m-auto rounded-full border-zinc-700 flex justify-between px-10 shadow-black shadow-lg fixed'>
          <input
            type='text'
            placeholder='Ask me anything...'
            className='w-[85%] h-full outline-none'
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value)
            }}
          />

          <button
            className=''
            onClick={() => {
              getAnswer()
              setQuestion('')
            }}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
