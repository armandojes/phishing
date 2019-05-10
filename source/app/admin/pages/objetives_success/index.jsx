import React, { Fragment, useState, useEffect } from 'react';
import Title from '../../components/title';
import style from './style.css';
import api from '../../../api.js';
import Obtetive from '../../components/objetive'
import ObtetiveLoading from '../../components/objetive_loading'

function ObjetivesSuccess(){

  const [items, set_items] = useState([]);
  const [loading, set_loading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      set_loading(true);
      const response = await api('/objetives/success');
      set_items(response.items);
      set_loading(false);
    }

    fetchdata();
  }, []);

  return (
    <Fragment>
      <Title title="Lista de objetivos" />
      <div className={style.body}>
        {loading && (
          <Fragment>
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
            <ObtetiveLoading />
          </Fragment>
        )}

        {!loading && (
          items.map((item) => <Obtetive {...item} key={item.id}/>)
        )}
      </div>
    </Fragment>
  )
}

export default ObjetivesSuccess;
