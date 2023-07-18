import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Layout } from 'src/Layouts/DefaultLayout/DefaultLayout';
import { Introduction } from 'src/Pages/Introduction/Introduction';
import { Styleguide } from 'src/Pages/Styleguide/Styleguide';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="styleguide" element={<Styleguide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
