import Header from './components/Header'
import Main from './components/Main';
import Particle from './components/Particle';
import './index.css'

function App() {
  return (
    <div className='bg-black-400'>
      <Particle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
