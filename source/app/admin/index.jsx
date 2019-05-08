import React, {useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './style.css';

const Admin = (props) => {
  const [logged, set_logged] = useState(false); //null, loading, false, true;
  const [password, set_password] = useState(null);

  useEffect(() => {

  });

  return (
    <div className="admin_aplication" className={style.admin}>

    </div>
  )
}

export default Admin;
