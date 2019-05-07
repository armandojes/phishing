import React, { useState, useEffect } from 'react';
import api from '../../api.js';

function useData (id){

  const [view, set_view] = useState('loading'); //waiting success loading error
  const [data, set_data] = useState({});

  useEffect(() =>{
    async function fetch(){
      const response = await api(`/profile/${id}`);
      if (!response.error){
        set_data(response.data);
        set_view('waiting')
      } else {
        set_view('error');
      }
    }

    fetch();
  },[]);


  return [view, data]
}

export default useData;
