import React from 'react';
import style from './style.css';


function Data (props){
  return (
    <div className={style.data_container}>
      <div className={style.limiter}>
        <div className={style.name} />
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
        <div className={style.item_row}>
          <div className={style.icon}  />
          <div className={style.row_text} />
        </div>
      </div>
    </div>
  )
}

export default Data;
