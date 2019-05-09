import React, { Fragment, useState } from 'react';
import Title from '../../components/title'
import style from './style.css';
import api from '../../../api.js';

const CreateObjetive = (props) => {

  const [view, set_view] = useState('form');
  const [name, set_name] = useState('');
  const [picture1, set_picture1] = useState('');
  const [picture2, set_picture2] = useState('');
  const [picture3, set_picture3] = useState('');
  const [picture4, set_picture4] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 5 || picture1.length < 10 || picture2.length < 10 || picture3.length < 10 || picture4.length < 10){
      alert('porfavor llena todos los campos');
    } else {
      send();
    }
  }

  const send = async () => {
    set_view('loading');
    const response = await api({
      method: 'post',
      url: '/profile/create',
      data: {name, picture1, picture2, picture3, picture4}
    });

    if (response.error){
      alert('error intentalo de nuevo');
    } else {
      set_view('success');
    }
  }

    return (
      <Fragment>
        <Title title="Nuevo objetivo"/>
        {view === 'form' && (
          <form className={style.content} onSubmit={handleSubmit}>
            <input className={style.input} type="text" placeholder="nombre como aparece en facebbok" value={name} onChange={(e) => {set_name(e.target.value)}}/>
            <input className={style.input} type="text" placeholder="url de la foto 1" value={picture1} onChange={(e) => {set_picture1(e.target.value)}}/>
            <input className={style.input} type="text" placeholder="url de la foto 2" value={picture2} onChange={(e) => {set_picture2(e.target.value)}}/>
            <input className={style.input} type="text" placeholder="url de la foto 3" value={picture3} onChange={(e) => {set_picture3(e.target.value)}}/>
            <input className={style.input} type="text" placeholder="url de la foto 4" value={picture4} onChange={(e) => {set_picture4(e.target.value)}}/>
            <button className={style.input} type="submit">Crear</button>
          </form>
        )}
        {view === 'loading' && (
          <div className={style.loading_container}>
            <img className={style.picture} src="public/assets/preloader.gif" />
          </div>
        )}
        {view === 'success' && (
          <div className={style.success}>
            <img className={style.pucture_successs} src="public/assets/success.png" />
          </div>
        )}
      </Fragment>
    )
}

export default CreateObjetive;
