import React, { useState, Fragment, useEffect } from 'react';
import style from './style.css';
import Content from '../content';
import Pictures from './components/pictures'
import PicturesLoading from './components/pictures_loading'
import Data from './components/data'
import DataLoading from './components/data_loading'


function Body (props){
  const [view, set_view] = useState('loading'); //waiting success loading
  



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
          {view != 'loading' && (
            <Fragment>
              <Pictures />
              <Data view={view} set_page={props.set_page}/>
            </Fragment>
          )}
        </div>
      </Content>
    </div>
  )
}

export default Body;
