import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import Colors from './Colors'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
        <nav className="navMenu">
            <a href="/">Home</a>
            <a href="/colors">Colors</a>
        </nav>
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/colors" element={<Colors />} />
                </Routes>
            </Router>
        </div>

    </>
)
