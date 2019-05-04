import React from 'react';
import style from './style.css';

function Content (props) {
  return (
    <div className={`${style.content} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Content;
