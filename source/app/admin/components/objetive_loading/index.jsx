import React from 'react';
import style from './style.css';
import Wrapper from '../item_wrapper'

const ObjetiveLoading = (props) => (
  <Wrapper>
    <div className={style.item}>
      <div className={style.picture} />
      <div className={style.name} />
    </div>
  </Wrapper>
)

export default ObjetiveLoading;
