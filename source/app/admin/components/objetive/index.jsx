import React from 'react';
import style from './style.css';
import Wrapper from '../item_wrapper'
import { Link } from 'react-router-dom';

const Objetive = (props) => (

  <Wrapper>
    <Link className={style.item} to={`/admin/profile/${props.id}`}>
      <img src={props.picture} className={style.picture} />
      <div className={style.name}>
        {props.name}
      </div>
    </Link>
  </Wrapper>
)

export default Objetive;
