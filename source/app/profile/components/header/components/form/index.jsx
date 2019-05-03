import React from 'react';
import style from './style.css';
import useResponsive from '../../../../../hocks/responsive'

function Form (props) {

  const render = useResponsive('min-width: 901px');
  if (!render) return null;

  return (
    <form className={style.form_content}>
      <div className={style.group}>
        <label htmlFor="mail" className={style.label}>Correo electronico o telefono</label>
        <input id="mail" type="text" className={style.input} autoComplete="off"/>
        <div className={style.text_option}>

        </div>
      </div>
      <div className={style.group}>
        <label htmlFor="password" className={style.label}>Contraseña</label>
        <input id="password" type="text" className={style.input} autoComplete="off"/>
        <div className={style.text_option}>
          ¿Olvidaste tu cuenta?
        </div>
      </div>
      <div className={style.group}>
        <button type="submit" className={style.button}>iniciar sesion</button>
      </div>
    </form>
  )
}

export default Form;
