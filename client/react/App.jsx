import React from 'react';
// import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
// import Register from './Register.js';
// import Content from './Content.js';
// import Error from './Error.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <main className='App'>
    <h1 className='app-title'>Finance Tracker App</h1>
    < Login />
    {/* < BrowserRouter >
      < NavBar />
      < Routes >
        < Route path="/register" element={< Register />}/>
        < Route path="/tracker" element={< Tracker />}/>
        < Route path="/login" element={< Login />}/>
        < Route path="/content" element={< Content />}/>
        < Route path="/" element={<h1 className='homepage'>Dashboard</h1>}/>
        < Route path="*" element={< Error />}/>
      </ Routes >
    </ BrowserRouter > */}
  </main>
);

export default App;