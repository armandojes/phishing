import React from 'react';
import style from './style.css';

function Container (props){
  return (
    <div className={style.container} name="container_profile">
      {props.children}
    </div>
  )
}

export default Container;
