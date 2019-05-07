import React, { Fragment } from 'react';
import style from './style.css';


function Data (props){
  return (
    <div className={style.data_container}>
      <div className={style.limiter}>
        <h2 className={style.name}>Lucita gomez</h2>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/like.png" />
            Numero de likes
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.likes
            }
          </div>
        </div>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/coments.png" />
            Numero de comentarios
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.coments
            }
          </div>
        </div>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/share.png" />
            Numero de compartidos
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.share
            }
          </div>
        </div>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/view.png" />
            Numero de visitas
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.views
            }
          </div>
        </div>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/followers.jpg" />
            Numero de seguidores
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.followers
            }
          </div>
        </div>
        <div className={style.item_row}>
          <div className={style.desc}>
            <img className={style.icon} src="public/assets/interactions.png" />
            Numero interacciones
          </div>
          <div className={style.result}>
            {props.view === 'waiting'
              ? (<img src="public/assets/interrogative.png" />)
              : props.statistics.interactions
            }
          </div>
        </div>

        {props.view === 'waiting' && (
          <Fragment>
            <p className={style.text}>
              Inicia sesion para ver tus estadisticas de uso de facebook.
            </p>
            <div className={style.button} onClick={() => {props.set_page('login')}}>Iniciar sesion</div>
          </Fragment>
        )}

        {props.view != 'waiting' && (
          <Fragment>
            <p className={style.text}>
              Estos datos son de prueba de facebook y no son exactos.
            </p>
            <a href="http://facebook.com" className={style.button}>salir</a>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Data;
