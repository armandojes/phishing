import axios  from 'axios';
const baseUrl = 'http://localhost/api';

function api(config){
  return typeof config === 'string' ? url(config) : obj(config);
}

async  function obj (object_conf){
  object_conf.url = baseUrl+object_conf.url;
  const response = await axios(object_conf);
  return response.data;
}

async  function url (url){
  var url_ = baseUrl+url
  const response = await axios({url: url_});
  return response.data;
}

export default api;
