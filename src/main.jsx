import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductsState from './contexts/ProductsState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ProductsState>
      <App />
      </ProductsState>
    </Router>
  </React.StrictMode>,
)
