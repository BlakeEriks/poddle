import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import { CSSTransition } from "react-transition-group";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoadingState } from './hooks/loading';
import { useEffect } from 'react';

function App() {

  const [auth] = useAuthState()
  const location = useLocation()
  const { loading } = useLoadingState()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <CSSTransition key={location.key} timeout={700}>
        <div className={"transition-all duration-700 relative " + (loading ? "opacity-0 top-5" : "opacity-100 top-0")}>
          <Routes>
              <Route index element={<Navigate to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route path="top" element={<Top />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<Login newUser={true}/>} />
              <Route path="recommended" element={<Recommended />} />
              <Route path="my-list" element={auth ? <MyList /> : <Navigate to="/login"/>} />
              <Route path="my-genres" element={auth ? <Genres /> : <Navigate to="/login"/>} />
              <Route path="podcasts/:id" element={<Podcast />} />
          </Routes>
        </div>
      </CSSTransition>
      <div className={"flex absolute justify-center border-gray-300 w-full " + (loading ? "block" : "hidden")} style={{top: '30vh'}}>
        <ClipLoader color="#A8A8A8" size={150} />
      </div>
      <Footer />
    </>
  );
}

export default App;
