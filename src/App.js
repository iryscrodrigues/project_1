import React from 'react';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Starter Template</h1>
      </header>
      <main>
        <img src="https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/11/Parque-Nacional-da-Capivara.png" alt="Placeholder" className="responsive-image" />
        <p className="Text">Serra da Capivara National Park has the largest concentration of prehistoric sites in the Americas (more than 1200), and the largest number of cave paintings in the world (more than 30 thousand paintings)!

The park received the title of Cultural Heritage of Humanity by UNESCO, and in addition to all its importance, its beauty is also something that draws attention.

You will find many canyons, plateaus, mountains and incredible landscapes, it's worth the visit!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
