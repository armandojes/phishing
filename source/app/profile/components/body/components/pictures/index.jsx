import React, {useState} from 'react';
import style from './style.css';

function Pictures (props){

  const [picture, set_picture] = useState(props.pictures[0]);

  return (
    <div className={style.picture_content}>
      <div className={style.picture_selected} style={{backgroundImage: `url(${picture})`}}/>
      <div className={style.pictures_list}>

        {props.pictures.map((pic, index) => (
          <div
            className={style.miniature_container}
            style={{backgroundImage: `url(${pic})`}}
            key={index}
            onClick={() => set_picture(pic)}
          />
        ))}

      </div>
    </div>
  )
}

export default Pictures;
