import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './Pages/Hero';
import Jobs from './components/Jobs';

const App = () => {

  return (
    <main>
      <Navbar />
      <Hero />
      <Jobs />
    </main>
  );
}

export default App;