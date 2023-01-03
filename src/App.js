import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Result from './components/Result/Result';

function App() {
  return (
    <div className='app'>
      <h1 className='title'>Avatar-Arena</h1>
      <div className='container'>
        <div className='cards'>
          <Card/>
          <Card/>
        </div>
        <div className='resultAndButton'>
          <Result/>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default App;
