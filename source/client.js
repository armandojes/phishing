import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app.jsx';

function Client (){
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

render(<Client />, document.getElementById('render_target'));
