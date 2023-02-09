import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from 'components/Header/Header';
import About from 'pages/About';
import Home from 'pages/Home';
import Game from 'pages/Game';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header/>
        <main className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='game' element={<Game/>}/>
              <Route path='about' element={<About/>}/>
            </Routes>
        </main>
        <p className='footer'>Desenvolvido por Pedro Paiva - Direitos de imagem da Nickelodeon</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
