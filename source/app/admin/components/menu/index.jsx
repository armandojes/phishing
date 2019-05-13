import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import useResponsive from '../../../hocks/responsive'

const Menu = ({logout}) => {

  const render = useResponsive('min-width:501px');

  if (!render) return null;

  return (
    <div className={style.menu_content}>
      <Link to="/admin" className={style.button}>Objetivos</Link>
      <Link to="/admin/listos" className={style.button}>Success</Link>
      <Link to="/admin/crear" className={style.button}>crear objetivo</Link>
      <div  className={style.button} onClick={logout}>cerrar session</div>
    </div>
  )
}

export default Menu;
