import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout as App} from 'src/Layouts/DefaultLayout/DefaultLayout'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
