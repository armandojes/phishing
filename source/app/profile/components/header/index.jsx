import React from 'react';
import style from './style.css';
import Container from '../container';
import Form from './components/form';

function Header (props){
  return  (
    <header className={style.header}>
      <Container>
        <div className={style.header_body}>
          <img src="public/assets/logo.png" className={style.logo} />
          <Form />
        </div>
      </Container>
    </header>
  )
}

export default Header;
