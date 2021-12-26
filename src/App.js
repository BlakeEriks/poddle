import React from 'react';
import './App.css';
import { Routes,  Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Explore from './pages/Explore';
import MyList from './pages/MyList';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="my-list" element={<MyList />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
