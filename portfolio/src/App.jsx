import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <Header />
              <Resume />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
