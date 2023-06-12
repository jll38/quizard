import './App.css';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import CreatePage from './pages/Create';
import QuizDetails from './pages/create-steps/quizDetails';
import Publish from './pages/create-steps/Publish';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react'




function App() {

  const [data, setData] = useState([{}]);

  /*useEffect fetching json message from the backend*/
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
      {/* Neccesary for ChakraUI elements to work. To not use ChakraUI replace <ChakraProvider></ChakraProvider> with <></> */}
      <Navbar />
      <Container maxW="1000px" p="20px" mb="10px" centerContent>
        <Router>
          <Routes>
            {/* Add routes for new pages here | See ./pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/quizzes" element={<Browse />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/create/details" element={<QuizDetails />} />
            <Route path="/create/publish" element={<Publish />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route
              path="*"
              element={<NotFound />}
            /> {/* Wildcard Path, any URL that isn't defined in another route will land here */}
          </Routes>
        </Router>
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default App

