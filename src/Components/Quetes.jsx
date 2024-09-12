import React from 'react'
import  "../Components/Q.css"
function Quetes({ quote, onSave }) {
  return (
    <>
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={() => onSave(quote)} className='btn-2'>Save to List</button>
    </div>
    </>
  )
}

export default Quetes
