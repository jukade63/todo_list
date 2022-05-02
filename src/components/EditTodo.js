import { useState } from 'react'

function EditTodo({ closeEditForm, id, title, updateTodo }) {
  const [input, setInput] = useState(title)
  const [error, setError] = useState('')

  const handleEdit = (e) => {
    e.preventDefault()

    if (input === '') {
      return setError('Title is required')
    }
    updateTodo(id, { title: input })
    closeEditForm()
  }
  return (
    <form className='flex-grow-1' onSubmit={handleEdit}>
      <div className='input-group'>
        <input
          type='text'
          className={`form-control rounded-0 ${error ? 'is-invalid' : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        \
        <button className='btn btn-warning rounded-0'>
          <i className='fas fa-edit'></i>
        </button>
        <button
          className='btn btn-dark rounded-0'
          type='button'
          onClick={closeEditForm}
        >
          <i className='fas fa-times'></i>
        </button>
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </form>
  )
}

export default EditTodo
