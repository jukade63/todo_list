import React, { useState } from 'react'
import DisplayTodo from './components/DisplayTodo'
import FilterTodo from './components/FilterTodo'
import InputTodo from './components/InputTodo'
import { v4 as uuidv4 } from 'uuid'

const demoTodo = [
  {
    id: uuidv4(),
    title: 'playing PES',
    completed: true,
  },
  {
    id: uuidv4(),
    title: 'learing React',
    completed: true,
  },
  {
    id: uuidv4(),
    title: 'dinner at riveside',
    completed: false,
  },
]
function App() {
  const [todoList, setTodoList] = useState(demoTodo)
  const [searchTerm, setSearchTerm] = useState({ text: '', status: '' })

  const createTodo = (title) => {
    const newTodo = [
      { id: uuidv4(), title: title, completed: false },
      ...todoList,
    ]
    setTodoList(newTodo)
  }

  const deleteTodo = (id) => {
    const idx = todoList.findIndex((item) => item.id === id)
    const newTodoList = [...todoList]
    if (idx !== -1) {
      newTodoList.splice(idx, 1)
    }
    setTodoList(newTodoList)
  }

  const updateTodo = (id, { id: objId, ...value }) => {
    const idx = todoList.findIndex((item) => item.id === id)
    const newTodoList = [...todoList]
    if (idx !== -1) {
      newTodoList[idx] = { ...newTodoList[idx], ...value }
    }
    setTodoList(newTodoList)
  }
  const filteredTodoList = todoList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.text.toLowerCase()) &&
      (searchTerm.status === '' || item.completed === searchTerm.status)
  )
  const pendingTodoList = todoList.filter((item) => !item.completed)

  return (
    <div className='maxw container mx-auto mt-5'>
      <InputTodo createTodo={createTodo} />
      <FilterTodo setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <DisplayTodo
        todoList={filteredTodoList}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        remaining={pendingTodoList.length}
        total={todoList.length}
      />
    </div>
  )
}

export default App
