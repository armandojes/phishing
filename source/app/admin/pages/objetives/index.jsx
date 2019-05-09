import React from 'react';
import Title from '../../components/title';
import style from './style.css';

import Obtetive from '../../components/objetive'
import ObtetiveLoading from '../../components/objetive_loading'

const Objetives = () => (
  <section>
    <Title title="Lista de objetivos" />
    <div className={style.body}>
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
      <ObtetiveLoading />
    </div>
  </section>
)

export default Objetives;
