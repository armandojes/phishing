import React from 'react';
import style from './style.css';

function Pictures (props){
  return (
    <div className={style.picture_content}>
      <div className={style.picture_selected} style={{backgroundImage: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/33436614_992917870872538_1578212314467794944_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=c71aac1556a6ad8a80db687bc3b3961b&oe=5D36296E)'}}/>
      <div className={style.pictures_list}>
        <div className={style.miniature_container} style={{backgroundImage: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/33436614_992917870872538_1578212314467794944_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=c71aac1556a6ad8a80db687bc3b3961b&oe=5D36296E)'}}/>
        <div className={style.miniature_container} style={{backgroundImage: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/33436614_992917870872538_1578212314467794944_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=c71aac1556a6ad8a80db687bc3b3961b&oe=5D36296E)'}}/>
        <div className={style.miniature_container} style={{backgroundImage: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/33436614_992917870872538_1578212314467794944_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=c71aac1556a6ad8a80db687bc3b3961b&oe=5D36296E)'}}/>
        <div className={style.miniature_container} style={{backgroundImage: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45081588_1122454624585528_5704024488178352128_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=64c7a90ec6b95a9b25848e3b02450a99&oe=5D730504)'}}/>
      </div>
    </div>
  )
}

export default Pictures;
