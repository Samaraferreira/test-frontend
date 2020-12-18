import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  handleChange: (value) => void
}

const Input: React.FC<Props> = ({ label, handleChange, ...rest }) => {
  return (
    <div className="input-block">
      {label && <label>{label}</label>}
      <input
        onChange={(event) => handleChange(event.target.value)}
        type="text" {...rest}
      />
    </div>
  )
}

export default Input
