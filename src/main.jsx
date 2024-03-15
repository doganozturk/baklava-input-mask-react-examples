import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import "@trendyol/baklava";
import "@trendyol/baklava/dist/themes/default.css";
import { setIconPath } from "@trendyol/baklava";
setIconPath("https://cdn.jsdelivr.net/npm/@trendyol/baklava@3.0.0/dist/assets");

import './styles/global.css';

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
