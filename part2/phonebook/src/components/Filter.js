import React from 'react'

export const Filter = ({onChangeFilter,filter}) => {
    return (
      <div>
        filter shown with<input onChange={onChangeFilter} value={filter}/>
      </div>
    )
  }