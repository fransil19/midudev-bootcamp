import React from 'react'

const Note = ({ title , body}) => {
  return (
    <li>
      <p>{title}</p>
      <small>
        <time>{body}</time>
      </small>
      {/* {categories.map((category) => (
        <small key={category}>{category}</small>
      ))} */}
    </li>
  )
}

export default Note