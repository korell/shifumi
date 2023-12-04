import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

export enum Choice {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors'
}

export enum Player {
    User = 'Vous',
    Computer = 'Robot'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
