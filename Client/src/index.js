import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//DataProvider
import DataSection from './Components/CONTEXT';

ReactDOM.render(
  <React.StrictMode>
    <DataSection>
        <App />
    </DataSection>
  </React.StrictMode>,
  document.getElementById('root')
);

