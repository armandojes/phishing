import React from 'react';
import style from './style.css';

const ItemWrapper = (props) => (
  <div className={style.ietm_wrapper}>
    <div className={style.body}>
      {props.children}
    </div>
  </div>
)

export default ItemWrapper;
