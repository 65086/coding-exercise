import React from 'react';
import ReactDOM from 'react-dom/client';
import DashBoard from './Components/DashBoard';

import './assets/vendor/apexcharts/apexcharts.min.js'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/chart.js/chart.umd.js'
import './assets/vendor/echarts/echarts.min.js'
import './assets/vendor/quill/quill.js'
import './assets/vendor/simple-datatables/simple-datatables.js'
import './assets/vendor/tinymce/tinymce.min.js'
import './assets/vendor/php-email-form/validate.js'
import './assets/js/main.js'
import './App.scss'

import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
   <Provider store={store}>
        <Login/>
     </Provider>
  </React.StrictMode>
);

