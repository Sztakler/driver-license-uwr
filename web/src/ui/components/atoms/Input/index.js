import React from 'react';

export default function Input(props) {
  const {type, styles} = props;
  const inputClasses = 'block w-full px-2 py-3 text-xl';

  if (type === 'textarea') {
    return <textarea></textarea>;
  }
  if (type === 'select') {
    return <select></select>;
  }
  return <input className={inputClasses} {...props}></input>;
}
