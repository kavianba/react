import React from 'react';

const data = [10, 20, 30, 40, 50]

const BasicII = () => {
  return (
    <div>
      <svg>
        {data.map(value => (
          <circle r={value}></circle>
        ))}
      </svg>
    </div>
  )
}

export default BasicII;