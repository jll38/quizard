import 'antd/dist/reset.css';
import './App.css';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react'



function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/greeting").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <ChakraProvider>
      <Navbar />
      <Container maxW='1000px' p='20px' mb='10px'centerContent>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default App

