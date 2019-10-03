import React from 'react'

const TextInput = ({ placeholder, onChange, onBlur, value, name, otherProps }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    name={name}
    {...otherProps}
  />
)

export default TextInput