import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route exact path='products' element={<Products/>}/> */}
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
