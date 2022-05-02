import { React, useState } from 'react'
import EditTodo from './EditTodo'

function TodoItem({ deleteTodo, updateTodo, title, id, status }) {
  const [isEdit, setIsEdit] = useState(false)
  const handleClickToggle = () => {
    updateTodo(id, { completed: !status })
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center py-3 
      bd-callout bd-callout-${status ? 'success' : 'warning'}`}
    >
      {isEdit ? (
        <EditTodo
          closeEditForm={() => setIsEdit(false)}
          id={id}
          title={title}
          updateTodo={updateTodo}
        />
      ) : (
        <>
          <span onClick={() => setIsEdit(true)}>{title}</span>
          <div className='btn-group'>
            <button
              className='btn btn-primary rounded-0'
              onClick={handleClickToggle}
            >
              <i className={`fas fa-toggle-${status ? 'on' : 'off'}`}></i>
            </button>
            <button
              className='btn btn-danger rounded-0'
              onClick={() => deleteTodo(id)}
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
