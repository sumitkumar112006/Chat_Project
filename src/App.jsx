import { useState } from 'react'
import './App.css'
import { URL } from './constants'
import axios from 'axios'
import Answers from './components/Answers'
import History from './components/History'

function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState([])
  const [recentHistory, setRecentHistory] = useState(JSON.parse(localStorage.getItem('History')) || [])

  const getAnswer = async () => {

    
    const payload = {
      contents: [
        {
          parts: [{ text: question }],
        },
      ],
    }
    
    if (localStorage.getItem('History')){
      let history = JSON.parse(localStorage.getItem('History'))
      history = [question,...history]
      localStorage.setItem('History', JSON.stringify(history))
      setRecentHistory(history)
    } else {
      localStorage.setItem('History', JSON.stringify([question]))
      setRecentHistory([question])
    }
    
    try {
      const response = await axios.post(URL, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const raw = response?.data?.candidates?.[0]?.content?.parts?.map((p) => p?.text ?? '').join('\n') ?? ''
      const lines = Array.isArray(raw) ? raw : String(raw).split(/\r?\n/)
      const data = lines
        .map((item) => String(item).trim())
        .filter(Boolean)
        .map((line) => line.replace(/^\d+\.\s+/, ''))
        .map((line) => line.replace(/^[-*]\s+/, ''))

      setAnswer((prev) => [...prev, { type: 'q', text: question }, { type: 'a', text: data }])
      setQuestion('')
    } catch (error) {
      console.error('Error fetching answer:', error)
      alert('Failed to get answer from Gemini API. Check your API key and request quota.')
    }
  }

  return (
    <div className='grid grid-cols-5 h-screen  text-zinc-300'>
      <div className='col-span-1 h-full bg-zinc-800 p-5 flex flex-col gap-10 fixed' id='history'>
        {/* <input type="checkbox" id='check' />
        <div>
          <label htmlFor="check">
            <i class="fa-solid fa-list" id='historyIcon'></i>
          </label>
        </div> */}
        <h2 className='font-bold text-center'>History </h2>
        <div className=''>
          <ul >
            {
              recentHistory.map((el) => (
                <li><History history={el} /></li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className='col-span-5 text-center flex flex-col justify-between p-10 '>
        <div className='container h-[80%] w-full pb-12 pl-60' id='container'>
          <div>
            <h1>Hi Rishika</h1>
            <h3>How can i assist you today</h3>
          </div>
          <div className='h-full w-full p-5 text-left'>
            <ul className='space-y-2'>
              {answer.map((item, index) => {
                if (item.type === 'q') {
                  return (
                    <li key={index} className='flex justify-end '>
                      <div className='inline-block w-fit max-w-[75%] text-left bg-zinc-700 p-4  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl'>
                        <Answers answer={item.text} type={item.type} isQuestion />
                      </div>
                    </li>
                  )
                }

                return item.text.map((ans, index2) => (
                  <li key={`${index}-${index2}`}>
                    <Answers answer={ans} type={item.type} />
                  </li>
                ))
              })}
            </ul>
          </div>
        </div>

        <div className='input bg-zinc-800 w-1/2 h-16 items-center m-auto rounded-full border-zinc-700 flex justify-between px-10 shadow-black shadow-lg fixed bottom-5 left-[25%]' id='search'>
          <input
            type='text'
            placeholder='Ask me anything...'
            className='w-[85%] h-full outline-none items-center '
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value)
            }}
          />

          <button
            className=''
            onClick={() => {
              getAnswer()
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getAnswer()
              }
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
