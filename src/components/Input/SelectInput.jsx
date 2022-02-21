import React from 'react';

const SelectInput = (props) => {
  return (
    <select className='p-2'>
      {
        props.items.map((item, index) => {
          return (
            <option key={index} value={Object.keys(item)}>{Object.values(item)}</option>
          )
        })
      }
    </select>
  )
}

export default SelectInput;