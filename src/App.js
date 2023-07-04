import React from 'react';
import './App.css';
import './components/menu/menu';
import Menu from "./components/menu/menu";

function App() {
  const currentURL = window.location.pathname;

  function renderContent() {
    switch (currentURL) {
      case "/":
        return (
          <div className="container">
            <div className="text-animation">
Me hice un bosque en casa. Hay pinos y un encino temperamental que alfombra el piso a su antojo (los bosques no se barren). Desde que me hice un bosque en casa despierto al mismo tiempo que los pájaros; esta alarma circadiana no trastorna el día.            </div>
          </div>
        );
      case "/sobre-mi":
        return <div>Contenido de la página Sobre mí</div>;
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
