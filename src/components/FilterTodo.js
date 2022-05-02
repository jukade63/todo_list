import React from 'react'

const TextFilter = (props) => {
  const handleChangeText = (e) => {
    props.setSearchTerm((prev) => ({ ...prev, text: e.target.value }))
  }
  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control rounded-0'
        value={props.searchTerm.text}
        onChange={handleChangeText}
      />
      <button
        className='btn btn-secondary rounded-0'
        onClick={() => props.setSearchTerm((prev) => ({ ...prev, text: '' }))}
      >
        <i className='fas fa-times'></i>
      </button>
    </div>
  )
}

const StatusFilter = (props) => {
  const handleChangeStatus = (e) => {
    const value = e.target.value
    props.setSearchTerm((prev) => ({
      ...prev,
      status: !value ? value : value === 'true',
    }))
  }
  return (
    <div className='btn-group ms-3'>
      <input
        type='radio'
        className='btn-check'
        name='status'
        id='all'
        defaultChecked
        value=''
        onChange={handleChangeStatus}
      />
      <label className='btn btn-outline-secondary rounded-0' htmlFor='all'>
        <i className='fas fa-tasks'></i>
      </label>
      <input
        type='radio'
        className='btn-check'
        name='status'
        id='done'
        value='true'
        onChange={handleChangeStatus}
      />
      <label className='btn btn-outline-secondary rounded-0' htmlFor='done'>
        <i className='fas fa-clipboard-check'></i>
      </label>
      <input
        type='radio'
        className='btn-check'
        name='status'
        id='doing'
        value='false'
        onChange={handleChangeStatus}
      />
      <label className='btn btn-outline-secondary rounded-0' htmlFor='doing'>
        <i className='far fa-clipboard'></i>
      </label>
    </div>
  )
}

function FilterTodo(props) {
  return (
    <div className='mt-3 d-flex'>
      <TextFilter
        setSearchTerm={props.setSearchTerm}
        searchTerm={props.searchTerm}
      />
      <StatusFilter setSearchTerm={props.setSearchTerm} />
    </div>
  )
}

export default FilterTodo
