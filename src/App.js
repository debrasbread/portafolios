import React from 'react';
import './App.css';
import Menu from "./components/menu/menu";

function App() {
  const currentURL = window.location.pathname;

  function renderContent() {
    switch (currentURL) {
      case "/":
        return <div>Contenido de la página de inicio</div>;
      case "/sobre-mi":
        return <div>Contenido de la página "Sobre mí"</div>;
      case "/proyectos":
        return <div>Contenido de la página de proyectos</div>;
      case "/contacto":
        return <div>Contenido de la página de contacto</div>;
      default:
        return <div>Página no encontrada</div>;
    }
  }

  return (
    <div className="App">
      <Menu />
      {renderContent()}
    </div>
  );
}

export default App;
