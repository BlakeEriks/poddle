import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import MyList from './pages/MyList';
import Home from './pages/Home';
import { useAuthState } from './hooks/auth';
import Login from './pages/Login';
import Podcast from './pages/Podcast';
import Top from './pages/Top';
import Genres from './pages/Genres';
import Recommended from './pages/Recommended';

function App() {

  const [auth] = useAuthState()

  return (
    <>
      <Header />
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Login newUser={true}/>} />
          <Route path="top" element={<Top />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="my-list" element={auth ? <MyList /> : <Navigate to="/login"/>} />
          <Route path="my-genres" element={auth ? <Genres /> : <Navigate to="/login"/>} />
          <Route path="podcasts/:id" element={<Podcast />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
