import React, {useState, useEffect }  from 'react';
import style from './style.css';
import Container from '../../components/container';
import api from '../../../api.js';
import {create_cookie} from '../../../helpers/cookie.js';

function Login (props){

  const [loading, set_loading] = useState(false);
  const [password, set_password] = useState('');
  const [username, set_username] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    set_loading(true);
    const response = await api({
      method: 'post',
      url: '/admin/login',
      data: {password, username}
    });
    handleLogin(response);
  }

  const handleLogin = (response) => {
    if (response.error){
      set_loading(false);
    } else {
      create_cookie('hash', response.hash);
      props.set_logged(true);
      props.set_hash(response.hash);
    }
  }

  return (
    <Container className={style.loggin}>
      <div className={style.body}>
        <div className={style.box}>
          {!loading && (
            <form className={style.form} onSubmit={handleSubmit}>
              <img src="public/assets/login.png" className={style.picture}/>
              <input type="text" className={style.input} placeholder="Username" value={username} onChange={(e) => {set_username(e.target.value)}}/>
              <input type="password" className={style.input} placeholder="password" value={password} onChange={(e) => {set_password(e.target.value)}} />
              <button type="submit" className={`${style.input} ${style.button}`}>Entrar</button>
            </form>
          )}
          {loading && (
            <img className={style.loading} src="public/assets/preloader.gif" />
          )}
        </div>
      </div>
    </Container>
  )
}

export default Login;
