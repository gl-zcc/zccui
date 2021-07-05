import React from 'react';
import './index.css'

function Button() {
    let alert=()=> {
        console.log('click');
    }
  return (
      <button onClick={alert}>默认</button>
  );
}

export default Button;
