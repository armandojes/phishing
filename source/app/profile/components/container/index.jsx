import React from 'react';
import style from './style.css';

function Container (props){
  return (
    <div className={style.container}>
      {props.children}
    </div>
  )
}

export default Container;