import React from 'react';
import styles from './index.less';

console.log(styles);

interface Props {
  type: string;
  children: string;
}

function Button(props: Props) {
  return (
    <button
      className={
        styles.button +
        ' ' +
        (styles[props.type] ? styles[props.type] : styles.define)
      }
    >
      {props.children || 'button'}
    </button>
  );
}

export default Button;
