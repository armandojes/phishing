import React, {useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './style.css';
import Login from './pages/login';
import api from '../api.js';
import { get_cookie, delete_cookie } from '../helpers/cookie.js';
import Pages from './pages.jsx';


const Admin = (props) => {


  const [logged, set_logged] = useState(null); //null, loading, false, true;
  const [hash, set_hash] = useState(null);


  useEffect(() => {

    set_logged('loading');
    const hash = get_cookie('hash');

    const validate_cookie = async () => {
      const response = await api({
        method: 'post',
        data: {hash},
        url: '/admin/hash',
      });

      if (response.error){
        set_logged(false);
        delete_cookie('hash');
      } else {
        set_logged(true);
        set_hash(hash);
      }
    }

    if ((logged === null) && hash) validate_cookie();
    if (!hash) set_logged(false);
  },[]);



  if (logged === 'loading') return (
    <div className={style.loading_container}>
      <img src="public/assets/preloader.gif" />
    </div>
  );


  if (logged === false) return (
    <div className="admin_aplication" className={style.admin}>
      <Login set_logged={set_logged} set_hash={set_hash} />
    </div>
  );

  if (logged === true) return (
    <div className="admin_aplication" className={style.admin}>
      <Pages />
    </div>
  )

  return null;
}

export default Admin;
