import React, { useState, Fragment, useEffect } from 'react';
import style from './style.css';
import Content from '../content';
import Pictures from './components/pictures'
import PicturesLoading from './components/pictures_loading'
import Data from './components/data'
import DataLoading from './components/data_loading'
import useData from '../../../hocks/profile/data.js';

function Body (props){

const [view, data] = useData(props.id); //waiting success loading error

  return (
    <div className={style.wrapper_body}>
      <Content>
        <div className={style.body}>
          {view === 'loading' && (
            <Fragment>
              <PicturesLoading />
              <DataLoading />
            </Fragment>
          )}
          {view == 'success' || view == 'waiting' && (
            <Fragment>
              <Pictures pictures={data.pictures}/>
              <Data view={view} set_page={props.set_page}/>
            </Fragment>
          )}
        </div>
      </Content>
    </div>
  )
}

export default Body;
