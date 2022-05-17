import AboutUs from './pages/AboutUs'
import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import { Routes,Route, useLocation } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
//Animation
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AboutUs />} />
        <Route path='/work' element={<OurWork />}/>
        <Route path='/work/:id' element={<MovieDetail />}/>
        <Route path='/contact' element={<ContactUs />}/>
         
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
