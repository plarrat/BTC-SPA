import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import HomePage from './Pages/HomePage/HomrPage'
import JoueurPage from './Pages/JoueurPage/JoueurPage'
import JoueurAddPage from './Pages/JoueurAddPage/JoueurAddPage'
import JoueurUpdatePage from './Pages/JoueurUpdatePage/JoueurUpdatePage'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/joueurs" element={<JoueurPage />} />
          <Route path="/joueurs/add" element={<JoueurAddPage />} />
          <Route path="/joueurs/:id" element={<JoueurUpdatePage />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
