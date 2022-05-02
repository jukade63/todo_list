import React, { useState } from 'react'

function InputTodo(props) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      setError('Title is required')
      return
    }
    props.createTodo(title)
    setError('')
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div className='input-group'>
          <input
            value={title}
            type='text'
            className={`form-control rounded-0 ${error && 'is-invalid'}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='btn btn-success rounded-0'>
            <i className='fas fa-plus'></i>
          </button>
          {error && <div className='invalid-feedback'>{error}</div>}
        </div>
      </form>
    </div>
  )
}

export default InputTodo
