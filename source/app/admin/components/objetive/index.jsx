import React from 'react';
import style from './style.css';
import Wrapper from '../item_wrapper'

const Objetive = (props) => (
  <Wrapper>
    <div className={style.item}>
      <img src="https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/55807310_1220859708078352_3154774038643998720_n.jpg?_nc_cat=106&_nc_ht=scontent.fpbc2-1.fna&oh=7f41b7b0b1dff969e4cc22b1f0ff89c0&oe=5D2C6AC8" className={style.picture} />
      <div className={style.name}>
        Lucita Gomez
      </div>
    </div>
  </Wrapper>
)

export default Objetive;
