import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/core';

import App from './components/App';

import indexStyles from './styles/index.css';

render(
  <Fragment>
    <Global styles={indexStyles} />
    <App />
  </Fragment>,

  document.getElementById('root')
);
