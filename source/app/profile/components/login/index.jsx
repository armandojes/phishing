import React from 'react';
import style from './style.css';
import Content from '../content';

function Login (props) {
  return (
    <Content className={style.login}>
      <form className={style.form}>
        <h1 className={style.title}>inicia sesion en facebook</h1>
        <input type="text" className={style.input} placeholder="Correo electronico o numero de telefono" />
        <input type="password" className={style.input} placeholder="Contraseña" />
        <button type="submit" className={`${style.input} ${style.button}`}>Iniciar sesion</button>
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
