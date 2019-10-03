import React from 'react'

const PasswordInput = ({ placeholder, onChange, onBlur, value, name, otherProps }) => (
  <input
    type="password"
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    name={name}
    {...otherProps}
  />
)

export default PasswordInput