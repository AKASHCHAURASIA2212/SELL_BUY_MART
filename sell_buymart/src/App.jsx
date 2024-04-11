import { useState } from 'react'
import './App.css'
import Product from './pages/Product/Product'
import Header from './components/Header/Header'
import Header2 from './components/Header/Header2'
import Footer from './components/Footer/Footer'
import MegaMenu from './components/MegaMenu/MegaMenu'
import Slider from './components/Slider/Slider'
import Crousal from './components/Crousal/Crousal'
import BreadCrum from './components/BreadCrum/BreadCrum'
import Banner from './components/Banner/Banner'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Contact from './pages/Contact/Contact'
function App() {

  return (
    <>
      <Header />
      <Product />
      <Contact />
      <Footer />

    </>
  )
}

export default App
