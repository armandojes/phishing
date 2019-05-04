import React from 'react';
import style from './style.css';

function Pictures (props){
  return (
    <div className={style.picture_content}>
      <div className={style.picture_selected} />
      <div className={style.pictures_list}>
        <div className={style.miniature_container} />
        <div className={style.miniature_container} />
        <div className={style.miniature_container} />
        <div className={style.miniature_container} />
      </div>
    </div>
  )
}

export default Pictures;
