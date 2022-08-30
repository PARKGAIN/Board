import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AxiosClient from './components/network/AxiosClient';
import { Route, Routes } from 'react-router-dom';

import write from './components/page/write';
import Write from './components/page/write';
import Detail from './components/page/detail';
import Delete from './components/page/delete';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="posts/post" element={<Write/>}/>
        <Route path="detail/get/:id" element={<Detail/>}/>
        <Route path="detail/get/:id/detail/delete/:id" element={<Delete/>}/>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

