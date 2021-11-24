import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './view/components/basics/base_layout';

document.title = "Formació WordPress";
ReactDOM.render(
  <React.StrictMode>
    <BaseLayout>
      <App />
    </BaseLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();