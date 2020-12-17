import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const Checkbox: React.FC<Props> = ({ value, ...rest }) => {
  return (
    <div className="checkbox-block">
      <input id={value} value={value} type="checkbox" {...rest} />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default Checkbox;
