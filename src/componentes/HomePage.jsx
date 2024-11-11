import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../app.css';

export default function HomePage() {
  return (
    <div>

      <main>
        <h1> CLINICA DE LA SALUD  </h1>
        <h2 class="centrado"> BIENVENIDOS </h2>
        <p>Ofrecemos los mejores servicios médicos para UD. y la COMUNIDAD</p>
        
      </main>
      <Header />


      <Footer />
    </div>
  )
}


