import React from 'react';
import './App.css';
import { Routes,  Route, Navigate } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Explore from './pages/Explore';
import MyList from './pages/MyList';
import Home from './pages/Home';
import { useAuthState } from './hooks/auth';
import Login from './pages/Login';
import Podcast from './pages/Podcast';

function App() {

  const [auth, setAuth] = useAuthState()

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Login newUser={true}/>} />
        <Route path="podcasts/:id" element={<Podcast />} />
        <Route path="explore" element={<Explore />} />
        <Route path="my-list" element={auth ? <MyList /> : <Navigate to="/login"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
