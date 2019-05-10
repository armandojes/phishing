import React from 'react';
import style from './style.css';
import Wrapper from '../item_wrapper'

const Objetive = (props) => (

  <Wrapper>
    <div className={style.item}>
      <img src={props.picture} className={style.picture} />
      <div className={style.name}>
        {props.name}
      </div>
    </div>
  </Wrapper>
)

export default Objetive;
