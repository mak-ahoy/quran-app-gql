import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SpecificCard from './pages/SpecificCard';
import MissingPage from './pages/MissingPage';
import ProtectedRoute from './components/ProtectedRoute'; // import the ProtectedRoute component

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<ProtectedRoute element={Home} />} />
          <Route path="home/surah" element={<ProtectedRoute element={SpecificCard} />} />
        </Route>
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </>
  );
}

export default App;