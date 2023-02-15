import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {
//    Flex,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import {LoginP, Dashboard, Blog, Landing} from './pages';

function App() {    
    return (

    //code
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='*' element={<div>404 error</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
