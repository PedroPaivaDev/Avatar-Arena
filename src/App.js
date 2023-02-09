import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from 'components/Header/Header';
import About from 'pages/About';
import Home from 'pages/Home';
import Game from 'pages/Game';

function App() {

  // const baseURL = 'https://cards-avatar-default-rtdb.firebaseio.com/cards/1'
  
  // async function getCards() {
  //   const response = await fetch(baseURL, {method: "GET", mode: "no-cors"});
  //   return await response.json();
  // }

  // async function showTest() {
  //   const data = await getCards()
  //   return console.log(data)
  // }

  // showTest()

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
