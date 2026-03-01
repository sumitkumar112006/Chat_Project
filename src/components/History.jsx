const History = ({ history, id, onDelete }) => {
  return (
    <p className='flex justify-between mb-2'>
      - {history}
      <i
        className='fa-solid fa-delete-left pt-1 cursor-pointer active:scale-[0.8] text-2xl'
        onClick={() => onDelete(id)}
      ></i>
    </p>
  )
}


export default History