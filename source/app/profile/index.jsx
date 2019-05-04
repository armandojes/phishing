import React, { useState } from 'react';
import style from './style.css';
import Header from './components/header';
import Container from './components/container';
import Body from './components/body';
import Login from './components/login';


function Profile (){

  const [page, set_page] = useState('profile');

  return(
    <div name="profile_wrapper" className={style.profile_wrapper}>
      <Header />
      <Container className={style.container_wrapper}>
        {page === 'profile'
          ? (<Body set_page={set_page} />)
          : (<Login />)
        }
      </Container>
    </div>
  )
}

export default Profile;
