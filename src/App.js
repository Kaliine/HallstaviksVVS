/* eslint-disable */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Home from './pages/Home'
import AboutUs from 'pages/AboutUs'
import Services from 'pages/Services'
import Partners from 'pages/Partners'
import References from 'pages/References'
import Contact from 'pages/Contact'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/om-oss" element={<AboutUs/>} />
          <Route exact path="/konsumenttjanster" element={<Services/>} />
          <Route exact path="/partners" element={<Partners/>} />
          <Route exact path="/referenser" element={<References/>} />
          <Route exact path="/kontakt" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
