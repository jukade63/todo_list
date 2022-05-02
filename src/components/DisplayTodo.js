import React from 'react'
import TodoList from './TodoList'

const RemainingMessage = ({ remaining, total }) => {
  return (
    <div className='mt-4 py-3 text-center bg-dark text-white'>
      {remaining} of {total} Remaining
    </div>
  )
}
function DisplayTodo(props) {
  return (
    <div>
      <RemainingMessage remaining={props.remaining} total={props.total} />
      <TodoList
        todoList={props.todoList}
        deleteTodo={props.deleteTodo}
        updateTodo={props.updateTodo}
      />
    </div>
  )
}

export default DisplayTodo
